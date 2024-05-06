import { languageController as Lang } from '../languages/languageController'
import LoginForm from '../components/loginForm'
// import { LoginVM } from './loginViewModel'
import { loadVM, getVM } from './loginViewModel'
import useState from '../utils/useState'
import { I18n } from 'i18n-js'
import { translations } from '../locales/translations'

import './styles.css'

const $ = kendo.jQuery
const i18n = new I18n(translations)
// const [currentLang, setCurrentLang] = useState('en')

const loginController = {
  init() {
    // LoginVM.init()
    // LoginVM.getVM()
    loadVM()
    const VM = getVM()
    // console.log(VM.get('currentLang'))

    $('#app').append(LoginForm)
    $('#lang-select').kendoComboBox({
      dataTextField: 'text',
      dataValueField: 'value',
      dataSource: [
        // { text: 'Espanol', value: app.constants.LANGUAJES.SPANISH },
        // { text: 'Español', value: 'es' },
        { text: 'Español', value: 'es' },
        // { text: 'English', value: app.constants.LANGUAJES.ENGLISH },
        { text: 'English', value: 'en' },
      ],
      change: function (e) {
        VM.set('currentLang', this.value())
      },
      // index: app.common.getLanguajeIndex(), //get index by defauklt.
      index: 0, //get index by defauklt.
    })

    VM.bind('change', () => {
      i18n.locale = VM.get('currentLang')
      $('#enviar').text(`${i18n.t('login.send')}`)
      // console.log($('#enviar').text('PAtata'))

      console.log('Lenguaje actual: ', VM.get('currentLang'))
    })
  },
}

export { loginController }
