// Centralized API base URL.
// In production (Vercel), set VITE_API_URL in the project's Environment Variables
// to your deployed backend URL (e.g. https://your-backend.onrender.com).
// Locally, it falls back to your local backend.
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
