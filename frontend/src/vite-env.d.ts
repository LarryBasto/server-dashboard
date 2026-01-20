/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
  // puedes añadir más variables aquí si las necesitas
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
