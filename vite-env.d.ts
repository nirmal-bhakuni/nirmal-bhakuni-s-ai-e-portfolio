/// <reference types="vite/client" />

// Allow importing common static asset file types without TypeScript errors
declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg';
declare module '*.ico';
declare module '*.mp4';
declare module '*.webm';
declare module '*.mp3';
declare module '*.wav';
declare module '*.ogg';
declare module '*.pdf';
declare module '*.txt';

// Optionally declare shape of import.meta.env used by Vite
interface ImportMetaEnv {
  // Add known env vars here (optional). Prefer VITE_ prefix for client-exposed vars.
  readonly VITE_GEMINI_API_KEY?: string;
  readonly GEMINI_API_KEY?: string; // present in project config; kept optional
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
