import Layout from './layout'
import LayoutViewModel from './layoutViewModel'
import './layoutStyles.css'
import { getOrgIndex } from '../utils/tools'

function LayoutController(page) {
  const $ = kendo.jQuery

  const layoutState = kendo.observable({
    homePageShown: false,
    dashboardShown: false,
  })

  const template = $(document.createDocumentFragment())

  console.log('page received: ', page)

  const { getViewModel, getUserInfo, changeSociety } = LayoutViewModel()
  const VM = getViewModel()
  getUserInfo()

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
  const societyLink = template.find('.company-inner')

  // Society selector click handler
  societyLink.on('click', () => {
    console.log('Click!')
    $('.company-dropdown-wrapper').toggleClass('hidden')
  })

  const selectData = [
    {
      text: 'Equilibrha personas SL',
      value: 'EQ',
    },
    {
      text: 'Donte group',
      value: 'DONTE',
    },
  ]

  const prueba = (event) => {
    // console.log('Cambio compañia!', event.sender.value())
    const value = event.sender.value()
    changeSociety(value).then((result) => {
      console.log('Despué!', result)
      getUserInfo()
    })
  }

  const companyListData = template
    .find('#companySelect')
    .kendoDropDownList({
      dataTextField: 'name',
      dataValueField: 'id',
      change: prueba,
    })
    .data('kendoDropDownList')

  // Header logo click handler
  logo.on('click', (event) => {
    event.stopPropagation()
    // layoutState.set('dashboardShown', true)
    menu.toggleClass('hidden')
    // layoutState.set('homePageShown', !layoutState.get('homePageShown'))
  })

  // Navbar menu click handler
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

  // Listen to VM changes
  VM.bind('change', ({ field }) => {
    // Error handling
    if (field === 'errorStatus') {
      // TODO implementar notificación al usuario
      console.log('Ocurrió un error error: ', VM.get('errorStatus'))
    }

    // Update UI withe new data loaded
    if (field === 'userInfo') {
      const data = VM.get('userInfo')
      console.log('AllData: ', data)

      // Set header logo
      $('#company-logo').attr('src', `${data.urlLogo}`)

      // Set header company name
      $('#company-name').text(`${data.nameOrganization}`)

      // Set user photo for navbar menu
      $('.user-photo').attr('src', `${data.photo}`)

      // Set user name for navbar menú
      $('.user-text').text(`${data.name}`)

      // Set menu dropdownList data
      companyListData.setDataSource(data.organizations)
      // TODO cambiiar por el calculo de la organización en el indice correcto
      companyListData.select(
        getOrgIndex(data.connectedOrganization, data.organizations)
      )
    }
  })

  return template
}

export { LayoutController as Layout }
