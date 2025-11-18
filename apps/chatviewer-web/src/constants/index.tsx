// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Google Client ID for web application
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID ??
  "956872187563-rj6j961c7ri7u6adb3v97gk5othp01dv.apps.googleusercontent.com";

// Base URL for the API (can be overridden with VITE_API_BASE_URL during build)
const defaultBaseUrl = import.meta.env.MODE === "production" ?
  "https://chatviewer-api.onrender.com" :
  "http://localhost:8000";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? defaultBaseUrl;
