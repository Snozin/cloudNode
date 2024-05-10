import i18n from '../utils/useTranslate'
import { router } from '../utils/useRouter'
import Captcha from '../components/captcha'
import RecoverViewModel from './recoverViewModel'
import RecoverForm from './recoverForm'
import useNotification from '../utils/useNotification'
import './recoverStyles.css'

const $ = kendo.jQuery

function RecoverController() {
  const template = $(document.createDocumentFragment())
  template.append(RecoverForm)

  const form = template.find('#recoverForm')
  const submitBtn = template.find('#recoverSubmit')

  const captchaRoot = template.find('#canvasWrapper')
  const refreshBtn = template.find('#refreshCaptcha')
  const backButton = template.find('#recoverBack')
  const inputCaptcha = template.find('#recoverCaptcha')

  const { refreshCaptcha, validateCaptcha } = Captcha(captchaRoot)
  const validator = formValidator(form, validateCaptcha)

  const { getViewModel, recoverPassword } = RecoverViewModel()
  const VM = getViewModel()

  refreshBtn.on('click', () => {
    refreshCaptcha()
    inputCaptcha.val('')
  })

  form.on('change', (e) => {
    if (validator.validate()) {
      submitBtn.show()
    } else {
      submitBtn.hide()
    }
  })

  form.on('submit', (e) => {
    e.preventDefault()
    const name = form.find('#recoverName').val()
    const surname = form.find('#recoverSurname').val()
    const email = form.find('#recoverEmail').val()
    const doc = form.find('#recoverDocument').val()

    recoverPassword(name, surname, email, doc)
  })

  backButton.on('click', () => {
    router.navigate('/login')
  })

  VM.bind('change', () => {
    if (VM.get('sended')) {
      useNotification(`${i18n.t('recover.msg.done')}`, 'info')
      router.navigate('/login')
    } else {
      useNotification(`${i18n.t('recover.msg.error')}`, 'error')
    }
  })

  return template
}

const formValidator = (form, validateCaptcha) =>
  form
    .kendoValidator({
      messages: {
        checkCaptcha() {
          useNotification(`${i18n.t('recover.msg.captcha')}`, 'error')
        },
        required() {
          useNotification(`${i18n.t('recover.msg.required')}`, 'error')
        },
        email() {
          useNotification(`${i18n.t('recover.msg.emailFormat')}`, 'error')
        },
      },
      rules: {
        checkCaptcha(input) {
          if (input.is('#recoverCaptcha')) {
            return validateCaptcha(input.val())
          }
          return true
        },
      },
    })
    .data('kendoValidator')

export { RecoverController as RecoverPage }
