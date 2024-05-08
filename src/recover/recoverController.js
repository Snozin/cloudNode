import RecoverForm from '../components/recoverForm'
import { router } from '../utils/useRouter'
import useNotification from '../utils/useNotification'
import './recoverStyles.css'

const $ = kendo.jQuery

const RecoverController = () => {
  const template = $(document.createDocumentFragment())
  template.append(RecoverForm)

  const form = template.find('#recoverForm')
  const validator = formValidator(form)
  const submitBtn = template.find('#recoverSubmit')

  useNotification('Mensaje de tipo info', 'info')
  useNotification('Mensaje de tipo warning', 'warning')
  useNotification('Mensaje de tipo error', 'error')

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

const formValidator = (form) =>
  form
    .kendoValidator({
      messages: {
        checkCaptcha() {
          console.log('mensaje de validar captcha!')
        },
        // checkCaptcha: 'Holiwi',
        required() {
          // console.log('Validation error!!')
        },
        email() {
          console.log('email no válido!!')
        },
      },
      rules: {
        checkCaptcha(input) {
          if (input.is('#recoverCaptcha')) {
            return true
          }
          return true
        },
      },
    })
    .data('kendoValidator')

export { RecoverController as RecoverPage }
