import { I18n } from 'i18n-js'
import { translations } from '../locales/translations'
import useStorage from './useStorage'

const i18n = () => {
  const ref = new I18n(translations)
  const lang = useStorage.get('lang')

  if (!lang) {
    ref.locale = 'es'
  } else {
    ref.locale = lang
  }

  return ref
}

export default i18n()
