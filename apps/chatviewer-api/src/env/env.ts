const DEFAULT_JWT_SECRET = "insecure-dev-secret";

export function getJwtSecret(): string {
  return process.env.JWT_SECRET || DEFAULT_JWT_SECRET;
}

export function getDatabaseUrl(): string {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  return dbUrl;
}

export function isDatabaseSslEnabled(): boolean {
  const value = process.env.DATABASE_SSL?.toLowerCase();
  return value === "true" || value === "1" || value === "yes";
}
