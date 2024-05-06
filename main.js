// import './style.css'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import '@progress/kendo-ui'
import { loginController as Login } from './src/login/loginController'
import { languageController as Lang } from './src/languages/languageController.js'
// import { translations } from './src/locales/translations.js'
// import { I18n } from 'i18n-js'

import useState from './src/utils/useState.js'
import i18n from './src/utils/useTranslate.js'

// const i18n = new I18n(translations)
const $ = kendo.jQuery
const [state, setState] = useState({
  isLogged: false,
})

const [currentLang, setCurrentLang] = useState('en')

const app = $('#app')

if (!state().isLogged) {
  // Lang.init()
  Login.init()
  // i18n.locale = 'en'
  // console.log(i18n.t('login.send'))

  // i18n.locale = 'es'
  // console.log(i18n.t('login.send'))
}

// console.log('Modito: ', import.meta.env.MODE)
