import { createI18n } from 'vue-i18n'
import type { typeAvailableLangs } from '@/types/app'

const langs = import.meta.glob('./*.json', { eager: true, import: 'default' })
const messages = Object.entries(langs).reduce((msgs, [key, value]) => {
  const langKey = key.match(/\.\/(.*).json/)?.[1]
  if (langKey) {
    return { ...msgs, [langKey]: value }
  }
  return msgs
}, {}) as Record<typeAvailableLangs, Record<string, any>>

const site_lang: typeAvailableLangs = localStorage.site_lang || 'en'
interface typeDictContent {
  iso: string
  name: string
}
export const langDict = new Map<typeAvailableLangs, typeDictContent>([
  ['en', {
    iso: 'en',
    name: 'English',
  }],
  ['ja', {
    iso: 'ja',
    name: '日本語',
  }],
  ['zh', {
    iso: 'zh-Hant',
    name: '繁體中文',
  }],
])

type MessageSchema = typeof messages.en
const i18n = createI18n<[MessageSchema], typeAvailableLangs, false>({
  // Composition API
  legacy: false,

  // default locale
  locale: site_lang,
  fallbackLocale: 'en',

  // translations
  messages,

  // Suppress warning
  fallbackWarn: false,
  missingWarn: false,
})

changeSiteLang(site_lang)

// @ts-expect-error Unknown TS error
export const $t: typeof i18n.global.t = i18n.global.t
export const $te: typeof i18n.global.te = i18n.global.te
export const $d: typeof i18n.global.d = i18n.global.d
export const $n: typeof i18n.global.n = i18n.global.n
export const $locale: typeof i18n.global.locale = i18n.global.locale

export function changeSiteLang(targetLocale: typeAvailableLangs) {
  i18n.global.locale.value = targetLocale
  localStorage.site_lang = targetLocale
  document.documentElement.setAttribute('lang', langDict.get(targetLocale)!.iso)
}

export default i18n
