import '@progress/kendo-ui'
import { router } from './src/utils/useRouter'
import './style.css'

const $ = kendo.jQuery
const render = (content) => {
  $('#app').append(content)
}

router
  .on(
    '/login',
    async (match) => {
      const { LoginPage } = await import('./src/login/loginContorller')
      render(LoginPage)
    },
    {
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
    }
  )

  .on(
    '/recover',
    async (match) => {
      const { RecoverPage } = await import('./src/recover/recoverController')
      render(RecoverPage)
    },
    {
      before(done) {
        // console.log('Before recover')

        done()
      },
    }
  )

  .on('/home', async (match) => {
    // console.log(match)
    // const { HomePage } = await import('./src/home/homeController')
    const { Layout } = await import('./src/layout/layoutController')
    // render(HomePage)
    render(Layout(match.url))
  })

  .on('/dashboard', async (match) => {
    const { Layout } = await import('./src/layout/layoutController')
    render(Layout(match.url))
  })

  .on('*', () => {
    router.navigate('/login')
  })
  .resolve()
