import '@progress/kendo-ui'
import { router } from './src/utils/useRouter'
import { LoginPage } from './src/login/loginContorller'
import { RecoverPage } from './src/recover/recoverController'
import './style.css'

const $ = kendo.jQuery
const render = (content) => {
  $('#app').append(content)
}

router
  .on('/login', (match) => render(LoginPage), {
    before(done) {
      // console.log('login before!!')
      done()
    },
    leave(done) {
      // Limpiar el componente dropdown después de cambiar de url
      const item = $('.k-list-container.k-popup[data-role="popup"]')
      item.remove()
      done()
    },
  })

  .on('/recover', (match) => render(RecoverPage), {
    before(done) {
      // console.log('Before recover')

      done()
    },
  })

  .on('/home', (match) => {
    // console.log(match)
    console.log('Home!')
    render('Futura home page!!')
  })
  .on('*', () => {
    router.navigate('/login')
  })
  .resolve()
