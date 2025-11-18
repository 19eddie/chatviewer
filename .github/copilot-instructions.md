# Chatviewer AI Guide
- **Monorepo Layout** Nx workspace with API in `apps/chatviewer-api` and React client in `apps/chatviewer-web`; Nx handles build/serve/test.
- **Primary Goal** Render WhatsApp exports, optionally upload to cloud, and share via signed tokens.
## Backend API (Express + Sequelize)
- Entry point `apps/chatviewer-api/src/main.ts` seeds DB via `db_initializer()` then mounts v2 routers under `/api/v2/*`.
- Sequelize configured in `apps/chatviewer-api/src/database/index.ts`; `DATABASE_URL` must allow SSL (Render/PlanetScale style URLs).
- Models in `models/User.ts` and `models/Chat.ts`; `Chat.data` stores binary blobs and `User.createAuthJwtToken()` powers the `authenticator` middleware.
- `controllers/chatController.ts` expects `Authorization: Bearer <jwt>` for everything except `/shared/:token`; `sortBy` query param is required (`name|createdAt|updatedAt`).
- `postChatController` consumes base64 data URIs (`data:...;base64,`) and converts to `Buffer`+`mimeType` before storing.
- Pagination uses `perPage` and `page`, and writes a `Link` header (note the header uses `per_page`, so treat it as advisory).
- `/chats/:chat_id/token` currently hard-fails because `ms('1d')` returns a number; plan to parse `req.query.expiresIn` before enabling share tokens.
- Google Sign-In flows rely on `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`; `userPostController` verifies the ID token then emits a JWT in the `auth-token` header.
- JWT secret comes from `JWT_SECRET`; set `PORT` if you cannot use 8000.
## Frontend Web (React + Vite)
- `apps/chatviewer-web/src/main.tsx` wraps the app with Redux (`redux-persist`), React Query, React Router, and global axios interceptors.
- JWT and user record live in `redux/slices/userSlice.tsx`; `setUser` stores both and persists to localStorage.
- Axios default base URL comes from `constants/index.tsx` (`BASE_URL` toggles prod vs localhost); 401 responses trigger logout and redirect.
- Global error handling: browser `unhandledrejection` and `error` events alert users, and `AppError` wraps the router as an error boundary.
- Components use `styled-components` plus MUI; follow the pattern of local `styled('div')` blocks and avoid new styling systems.
- Chat ingestion flows through `modals/ImportChat.tsx` and `utilities/whatsapp.tsx`; reuse helpers like `blobToMsg`, `blobToBase64`, and `getMimeType`.
- `Dashboard.tsx` coordinates listing (`ChatView`) with pagination and downloads blobs via axios before routing with `createViewerState()`.
- Shared chat hooks still send an `Authorization` header even though the backend ignores it; mimic existing hooks unless you fix both sides.
## Environment & Secrets
- Backend needs `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `JWT_SECRET`, `DATABASE_URL`, optional `PORT`; start from `.env.example`.
- Web client loads the Google One Tap SDK; match the web `GOOGLE_CLIENT_ID` with the backend to avoid token verification failures.
- Local dev usually runs API on 8000 and web on 3000 (`npx nx serve chatviewer-api` and `npx nx serve chatviewer-web`).
## Commands & Workflows
- Install deps once with `npm install`; run Nx commands from the repo root.
- Dev servers: `npx nx serve chatviewer-api` (webpack build then node) and `npx nx serve chatviewer-web` (Vite dev on port 3000).
- Builds: `npx nx build chatviewer-api` outputs to `apps/chatviewer-api/dist`; `npx nx build chatviewer-web` creates `apps/chatviewer-web/dist`.
- Tests: `npx nx test chatviewer-api` (Jest node) and `npx nx test chatviewer-web` (Jest React). E2E: `npx nx run chatviewer-web-e2e:e2e` for Playwright, `npx nx run chatviewer-api-e2e:e2e` for API coverage.
- When updating shared helpers or query shapes, keep React Query cache keys (`['chats', perPage, page, sortBy]` etc.) in sync to avoid stale UI.
## Patterns & Tips
- Middleware populates `res.locals.user_auth_payload`; new controllers should read user context from there instead of re-verifying tokens.
- Always reuse the singleton `sequelize` export; do not open new connections from controllers or helpers.
- React routing prefers building navigation state via `createViewerState()` so `Viewchat` stays route-driven rather than store-driven.
- Maintain TypeScript interfaces under `src/types` and re-export through the local barrel (`index.tsx`) for consistent imports.
- Styling lives in `styles/global.css` plus component-local styled elements; avoid introducing CSS modules or Tailwind without coordination.
- `Link` header pagination is legacy and mismatched (`per_page` vs `perPage`); fix API and client together if you standardize it.
- Before enabling share tokens or pagination tweaks, add Jest coverage under a new `apps/chatviewer-api/src/controllers/__tests__` folder to lock behavior.
