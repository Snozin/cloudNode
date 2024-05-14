import MainMenu from './menu'

function Header() {
  const $ = kendo.jQuery

  const headerWrapper = $('<div>')
  headerWrapper.addClass('header-wrapper container-fluid')

  const header = $('<header>')
  header.addClass('header')
  headerWrapper.append(header)

  const logoWrapper = $('<div>')
  logoWrapper.addClass('logo-wrapper')
  header.append(logoWrapper)

  const logo = $('<img>')
  logo.attr('src', '/png/logo.png')
  logo.addClass('logo')
  logoWrapper.append(logo)

  const titleWrapper = $('<div>')
  titleWrapper.addClass('title-wrapper')
  header.append(titleWrapper)

  const title = $('<h1>')
  title.text('Equilibrha Personas SL')
  title.addClass('title')
  titleWrapper.append(title)

  headerWrapper.append(MainMenu)

  return headerWrapper
}

export default Header
