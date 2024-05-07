// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import '@progress/kendo-ui'
import { loginController } from './src/login/loginController'
import './style.css'

const $ = kendo.jQuery
// const app = $('#app')

const globalState = kendo.observable({
  loginShown: true,
  rememberShown: false,
  homeShown: false,
})

globalState.bind('change', () => {
  console.log('Cambio global')
})

if (globalState.get('loginShown')) {
  const loginRef = loginController
  
  loginRef.bind('change', () => {
    console.log('Login ref: ', loginRef.get('loginDone'))
    globalState.set('loginShown', false)
  })

} else {
  $('#app').append('Toy logiado')
}
