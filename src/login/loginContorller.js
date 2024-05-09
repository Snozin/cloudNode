import useNotification from '../utils/useNotification'
import LoginForm from '../components/loginForm'
import { getLangIndex } from '../utils/tools'
import LoginViewModel from './loginViewModel'
import useStorage from '../utils/useStorage'
import { router } from '../utils/useRouter'
import Spinner from '../components/spinner'
import i18n from '../utils/useTranslate'
import './loginStyles.css'

const $ = kendo.jQuery

function LoginController() {
  const template = $(document.createDocumentFragment())
  template.append(LoginForm)

  const form = template.find('#loginForm')
  const dropdown = template.find('#langSelect')
  const recoverLink = template.find('#recoverLink')

  const emailInput = form.find('#loginEmail')
  const passInput = form.find('#loginPass')

  const token = useStorage.get('tokenJWT')

  formValidator(form)

  const { getViewModel, login, refreshToken } = LoginViewModel()
  const VM = getViewModel()

  // Create the dropdown select for languages
  dropdown.kendoComboBox({
    dataTextField: 'text',
    dataValueField: 'value',
    dataSource: [
      { text: 'Español', value: 'es' },
      { text: 'English', value: 'en' },
    ],
    change: function (e) {
      const newLang = this.value()

      VM.set('lang', newLang)
      useStorage.set('lang', newLang)
    },
    index: getLangIndex(),
  })

  form.on('submit', async (event) => {
    event.preventDefault()

    const credentials = {
      user: emailInput.val(),
      password: passInput.val(),
    }

    const result = await login(credentials)
    VM.set('loginDone', result)
  })

  recoverLink.on('click', () => {
    router.navigate('/recover')
  })

  VM.bind('change', () => {
    // Translate UI after change language
    i18n.locale = VM.get('lang')

    emailInput.attr('placeholder', `${i18n.t('login.user')}`)
    passInput.attr('placeholder', `${i18n.t('login.pass')}`)
    form.find('#login-btn').text(`${i18n.t('login.send')}`)
    recoverLink.text(`${i18n.t('login.recover')}`)

    // Login management
    if (VM.get('loginDone') === false) {
      useNotification(`${i18n.t('login.msg.error')}`, 'error')
      VM.set('loginDone', null)
    }
    if (VM.get('loginDone') === true) {
      router.navigate('/home')
    }

    if (VM.get('isLoading')) {
      $('body').prepend(Spinner)
    } else {
      $('#spinner').remove()
    }
  })

  // Refresh token if exists
  if (token) {
    // TODO setear id organización de forma correcta y leerlo aquí
    const organization = '0001'
    refreshToken({ organization })
  }

  //TODO Delete at deploy
  const mode = import.meta.env.MODE
  if (mode === 'development') {
    template.find('#loginEmail').val('EQADM')
    template.find('#loginPass').val('12345678')
  }

  return template
}

function formValidator(form) {
  return form
    .kendoValidator({
      messages: {
        required() {
          useNotification(`${i18n.t('login.msg.required')}`, 'error')
        },
      },
    })
    .data('kendoValidator')
}

export { LoginController as LoginPage }
