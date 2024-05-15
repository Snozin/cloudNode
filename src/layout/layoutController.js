import Layout from './layout'
import './layoutStyles.css'

function LayoutController(page) {
  const $ = kendo.jQuery

  const layoutState = kendo.observable({
    homePageShown: false,
    dashboardShown: false,
  })

  const template = $(document.createDocumentFragment())

  console.log('page received: ', page)

  const props = { page: null, withSidebar: true }
  switch (page) {
    case 'home':
      props.page = page
      layoutState.set('homePageShown', true)
      break

    case 'dashboard':
      props.page = page
      layoutState.set('homePageShown', true)
      break
  }

  template.append(Layout(props))

  // Menu management
  const logo = template.find('.logo-wrapper')
  const menu = template.find('.menu-wrapper')

  logo.on('click', (event) => {
    event.stopPropagation()
    // layoutState.set('dashboardShown', true)
    menu.toggleClass('hidden')
    // layoutState.set('homePageShown', !layoutState.get('homePageShown'))
  })

  menu.on('click', (event) => {
    event.stopPropagation()
  })

  // Hide menu when click elsewere
  $(document).on('click', () => {
    const menu = $('.menu-wrapper')
    if (!menu.hasClass('hidden')) {
      menu.addClass('hidden')
    }
  })

  // let detachedPage = null //Stores the page to render after change

  // layoutState.bind('change', () => {
  //   const homePage = $('#homePage')
  //   if (layoutState.get('homePageShown') === true) {
  //     $('#contentWrapper').append(detachedPage)
  //   } else {
  //     detachedPage = homePage.detach()
  //   }
  // })

  return template
}

export { LayoutController as Layout }
