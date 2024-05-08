import Navigo from 'navigo'
import '@progress/kendo-ui'
import { LoginController } from './src/login/loginController'
import { RecoverPage } from './src/recover/recoverController'
import './style.css'

const $ = kendo.jQuery
const router = new Navigo('/')
const render = (content) => {
  $('#app').append(content)
}

router.hooks({
  before: async (done, match) => {
    // Reset app container before load any URL
    $('#app').empty()
    console.log('Before!')

    done()
  },
})

router
  .on(
    '/login',
    () => {
      new LoginController(router)
    },
    {
      before: (done) => {
        console.log('login before!!')
        done()
      },
    }
  )
  .on('/remember', (match) => {
    console.log('Remember: ', RecoverPage)
    render(RecoverPage)
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
