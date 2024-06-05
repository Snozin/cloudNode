import MainMenu from './menu'

function Header() {
  const $ = kendo.jQuery

  const headerWrapper = $('<div>')
  headerWrapper.addClass('header-wrapper container-fluid')

  const header = $('<header>')
  header.attr('id','header-wrapper')
  header.addClass('header')

  const logoWrapper = $('<div>')
  logoWrapper.addClass('logo-wrapper')

  const logo = $('<img>')
  logo.attr('id', 'company-logo')
  logo.attr('src', '/png/logo.png')
  logo.addClass('logo')

  const titleWrapper = $('<div>')
  titleWrapper.addClass('title-wrapper')

  const title = $('<h1>')
  title.attr('id', 'company-name')
  title.text('Default company')
  title.addClass('title')

  logoWrapper.append(logo)
  titleWrapper.append(title)
  header.append(logoWrapper, titleWrapper)

  // headerWrapper.append(header, MainMenu())
  headerWrapper.append(header)

  return headerWrapper
}

export default Header
