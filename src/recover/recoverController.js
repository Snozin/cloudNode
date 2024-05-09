import i18n from '../utils/useTranslate'
import { router } from '../utils/useRouter'
import RecoverForm from '../components/recoverForm'
import useNotification from '../utils/useNotification'
import Captcha from '../components/captcha'
import './recoverStyles.css'

const $ = kendo.jQuery

const RecoverController = () => {
  const template = $(document.createDocumentFragment())
  template.append(RecoverForm)

  const form = template.find('#recoverForm')
  const submitBtn = template.find('#recoverSubmit')

  const captchaRoot = template.find('#canvasWrapper')
  const refreshBtn = template.find('#refreshCaptcha')
  const inputCaptcha = template.find('#recoverCaptcha')
  const { refreshCaptcha, validateCaptcha } = Captcha(captchaRoot)
  const validator = formValidator(form, validateCaptcha)

  refreshBtn.on('click', () => {
    refreshCaptcha()
    inputCaptcha.val('')
  })

  form.on('change', (e) => {
    if (validator.validate()) {
      console.log('\nValido ok \n')
      submitBtn.show()
    } else {
      submitBtn.hide()
    }
  })

  form.on('submit', (e) => {
    e.preventDefault()
    console.log('Click submit!')
  })

  const backButton = template.find('#recoverBack')
  backButton.on('click', () => {
    router.navigate('/login')
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
