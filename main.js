import Navigo from 'navigo'
import '@progress/kendo-ui'
import { LoginController } from './src/login/loginController'
import './style.css'

const $ = kendo.jQuery
const router = new Navigo('/')
const render = (content) => {
  $('#app').append(content)
}

router.hooks({
  before: async (done, match) => {
    console.log('Before!')

    done()
  },
})

router
  .on(
    '/login',
    () => {
      new LoginController()
    },
    {
      before: (done) => {
        console.log('login before!!')
        done()
      },
    }
  )
  .on('/remember', (match) => {
    console.log('Remember')
    console.log(match)
  })
  .on('/home', (match) => {
    console.log('Home!')
    console.log(match)
  })
  .on('*', () => {
    router.navigate('/login')
  })
  .resolve()
