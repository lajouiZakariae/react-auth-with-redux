/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ENV: 'medicineion' | 'development' | 'test'
    VITE_APP_URL: string
    VITE_API_URL: string
    VITE_GOOGLE_CLIENT_ID: string
    VITE_API_GOOGLE_MAPS_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
