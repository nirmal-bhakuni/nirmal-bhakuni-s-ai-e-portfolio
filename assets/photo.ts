// assets/photo.ts
// Option: import asset (Vite will return a URL string)
export const PROFILE_PHOTO = new URL('./profile.jpg', import.meta.url).href;

// (Optional) keep the base64 fallback:
export const PROFILE_PHOTO_BASE64 = "data:image/jpeg;base64,...."; // keep or remove