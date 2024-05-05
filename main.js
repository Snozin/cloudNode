// import './style.css'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import '@progress/kendo-ui'
import { loginController as Login } from './src/login/loginController'

import useState from './src/utils/useState.js'

const $ = kendo.jQuery
const [state, setState] = useState({
  isLogged: false,
})

// console.log('Estado actual', state())
// setState({
//   ...state,
//   isLogged: true,
// })

const app = $('#app')

// app.append(Form)
if (!state().isLogged) {
  Login.init()
}

// console.log('Modito: ', import.meta.env.MODE)
