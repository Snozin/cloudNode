import LoginForm from '../components/loginForm'
import { LoginVM } from './loginViewModel'

const $ = kendo.jQuery

const loginController = {
  init() {
    LoginVM.getVM()

    $('#app').append(LoginForm)

    $('#lang-select').kendoComboBox({
      dataTextField: 'text',
      dataValueField: 'value',
      dataSource: [
        // { text: 'Espanol', value: app.constants.LANGUAJES.SPANISH },
        { text: 'Español', value: 'Español' },
        // { text: 'English', value: app.constants.LANGUAJES.ENGLISH },
        { text: 'English', value: 'English' },
      ],
      change: function (e) {
        // var value = this.value()

        // if (value == app.constants.LANGUAJES.SPANISH) {
        //   app.common.setLanguaje(value)
        // } else {
        //   app.common.setLanguaje(app.constants.LANGUAJES.ENGLISH)
        // }
        console.log('Cambio combo')
      },
      // index: app.common.getLanguajeIndex(), //get index by defauklt.
      index: 0, //get index by defauklt.
    })
  },
}

export { loginController }
