import { Language } from '@swap-org/uikit'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const ESES: Language = { locale: 'es-ES', language: 'Español', code: 'es-ES' }
export const FR: Language = { locale: 'fr-FR', language: 'Français', code: 'fr' }

export const languages = {
  'en-US': EN,
  'es-ES': ESES,
  'fr-FR': FR,
}

export const languageList = Object.values(languages)
