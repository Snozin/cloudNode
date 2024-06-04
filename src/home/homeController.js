import HomeViewModel from './homeViewModel'

const $ = kendo.jQuery

function HomeController() {
  const content = $(document.createDocumentFragment())

  const container = $('<div>')
  container.attr('id', 'homePage')

  const prueba = $('<p>Texto de homeController </p>')
  container.append(prueba)

  const { getViewModel, getInfo } = HomeViewModel()
  const VM = getViewModel()

  VM.bind('change', () => {
    console.log('Cambia el estado: ', VM.get('userInfo'))
    // console.log('Depues!: ', VM.get('userInfo.name'))
    $('.user-photo').attr('src', `${VM.get('userInfo.photo')}`)
    $('.user-text').text(`${VM.get('userInfo.name')}`)
  })

  // getInfo()
  content.append(container)

  // return Layout({ content, withSidebar: true })
  return content
}

export { HomeController as HomePage }
