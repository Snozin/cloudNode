import LoginForm from '../components/loginForm'
import Spinner from '../components/spinner'
import { LoginVM } from './loginViewModel'
import { getLangIndex } from '../utils/tools'
import useStorage from '../utils/useStorage'
import i18n from '../utils/useTranslate'
import './loginStyles.css'

const $ = kendo.jQuery

class LoginController {
  _state = kendo.observable({
    hasToken: null,
    loginDone: false,
  })
  VMLoginRef = LoginVM.getRef()

  constructor(router) {
    this.router = router
    $('#app').append(LoginForm)

    const setLanguage = (newLang) => {
      this.VMLoginRef.set('currentLang', newLang)
      useStorage.set('lang', newLang)
    }

    $('#lang-select').kendoComboBox({
      dataTextField: 'text',
      dataValueField: 'value',
      dataSource: [
        { text: 'Español', value: 'es' },
        { text: 'English', value: 'en' },
      ],
      change: function (e) {
        const newLang = this.value()
        setLanguage(newLang)
      },
      index: getLangIndex(),
    })

    this.VMLoginRef.bind('change', () => {
      // Set the current languaje
      i18n.locale = this.VMLoginRef.get('currentLang')

      // Make the translations for login form
      $('#login-btn').text(`${i18n.t('login.send')}`)
      $('#loginEmail').attr('placeholder', `${i18n.t('login.user')}`)
      $('#loginPass').attr('placeholder', `${i18n.t('login.pass')}`)
      $('#remember-link').text(`${i18n.t('login.recover')}`)
    })

    //TODO Delete at deploy
    const mode = import.meta.env.MODE
    if (mode === 'development') {
      $('#loginEmail').val('EQADM')
      $('#loginPass').val('12345678')
    }

    this.hasToken()
    this.formHandler()
    return this._state
  }

  hasToken() {
    const token = useStorage.get('tokenJWT')

    if (token) {
      // TODO setear id organización de forma correcta y leerlo aquí
      const organization = '0001'
      LoginVM.refreshToken({ organization })
    }
  }

  formHandler() {
    const form = $('#loginForm')

    form.on('submit', (e) => {
      e.preventDefault()
      // $('body').prepend(Spinner)
      // $('#spinner').remove()
      const user = $('#loginEmail').val()
      const password = $('#loginPass').val()
      $('#login-btn').attr('disabled', true)

      const credentials = { user, password }
      LoginVM.login(credentials)

      // this.router.navigate('/remember')
      console.log('Envío!')
      this._state.set('loginDone', true)
    })

    $('#remember-link').on('click', () => {
      this.router.navigate('/remember')
    })
  }
}

// const loginPage = new LoginController()
// export { loginPage }
export { LoginController }
