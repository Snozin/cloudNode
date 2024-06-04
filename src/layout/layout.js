import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
// import { HomePage } from '../home/homeController'
import './layoutStyles.css'

function Layout({ page, withSidebar, userInfo }) {
  const $ = kendo.jQuery
  const template = $(document.createDocumentFragment())

  // console.log('Recibo: ', userInfo)
  template.append(Header)

  const contentWrapper = $('<div id="contentWrapper">')
  contentWrapper.addClass('container-fluid')
  template.append(contentWrapper)

  if (withSidebar === true) {
    contentWrapper.append(Sidebar)
  }

  asyncRender(contentWrapper, page)

  // if (page === 'home') {
  //   contentWrapper.append(HomePage)
  // }
  // if (page === 'dashboard') {
  //   contentWrapper.append(page)
  // }

  template.append(Footer)

  return template
}

const asyncRender = async (parent, page) => {
  if (page === 'home') {
    const { HomePage } = await import('../home/homeController')
    parent.append(HomePage)
  }

  if (page === 'dashboard') {
    parent.append(page)
  }
}

export default Layout
