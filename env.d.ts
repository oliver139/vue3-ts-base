/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ViteTypeOptions {
  // 不允許未知的Env值
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_SITE_NAME: string
  readonly VITE_SITE_DESC: string
  readonly VITE_SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
