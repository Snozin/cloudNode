import { I18n } from 'i18n-js'
import { translations } from '../locales/translations'
import useStorage from './useStorage'

const i18n = () => {
  const lang = new I18n(translations)
  // lang.defaultLocale = 'en'
  const current = useStorage.get('lang')

  console.log('current: ', current)
  if (!current) {
    // lang.defaultLocale = 'es'
    lang.locale = 'es'
  } else {
    // lang.defaultLocale = current
    lang.locale = current
  }

  return lang
}

export default i18n()
