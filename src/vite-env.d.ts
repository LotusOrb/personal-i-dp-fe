/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_AUTH_STORAGE: string;
  readonly VITE_APP_MICROSERVICE_DEFAULT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
