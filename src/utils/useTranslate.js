import { I18n } from 'i18n-js'
import { translations } from '../assets/locales/translations'
import useStorage from './useStorage'

const i18n = () => {
  const ref = new I18n(translations)
  const lang = useStorage.get('lang')

  if (!lang) {
    const lang = 'es' //Sets the default app language
    ref.locale = lang
    useStorage.set('lang', lang)
  } else {
    ref.locale = lang
  }

  return ref
}

export default i18n()
