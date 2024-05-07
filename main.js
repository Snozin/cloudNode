// import viteLogo from '/vite.svg'
import '@progress/kendo-ui'
import { LoginController } from './src/login/loginController'
import './style.css'

const $ = kendo.jQuery
// const app = $('#app')

const globalState = kendo.observable({
  loginShown: false,
  rememberShown: false,
  homeShown: false,
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('Carga inicial')
  globalState.set('loginShown', true)
})

globalState.bind('change', () => {
  console.log('Cambio global', globalState.get('loginShown'))

  if (globalState.get('loginShown')) {
    const loginRef = new LoginController()

    loginRef.bind('change', () => {
      console.log('Login ref: ', loginRef.get('loginDone'))
      // globalState.set('loginShown', false)

      if (loginRef.get('loginDone')) {
        globalState.set('loginShown', false)
      } else {
        globalState.set('loginShown', true)
      }
    })
  } else {
    $('#app').empty()
    $('#app').append('Estoy logueado')
  }
  // loginRef.get('loginDone')
  //   ? globalState.set('loginShown', false)
  //   : globalState.set('loginShown', true)
})

