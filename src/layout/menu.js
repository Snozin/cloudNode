import i18n from '../utils/useTranslate'
// import { router } from '../utils/useRouter'

const $ = kendo.jQuery

function MainMenu() {
  const menuWrapper = $('<div>')
  menuWrapper.addClass(
    'menu-wrapper hidden col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4'
  )

  const menu = $('<navbar>')
  menu.addClass('menu-navbar')
  menuWrapper.append(menu)

  // menu.append(leftMenu(), rightMenu())

  // Left menu
  const leftSide = $('<div>')
  leftSide.attr('id', 'menu-left')
  leftSide.addClass('menu-left')
  menu.append(leftSide)

  // const linkHome = $('<a>')
  // leftSide.append(linkHome)

  // const linkHomeWrap = $('<div>')
  // linkHomeWrap.addClass('menu-link')
  // linkHome.append(linkHomeWrap)

  // const linkHomeIconWrap = $('<span>')
  // linkHomeIconWrap.addClass('home-icon')
  // linkHomeWrap.append(linkHomeIconWrap)

  // const linkHomeText = $('<span>')
  // linkHomeText.text(`${i18n.t('menu.home')}`)
  // linkHomeWrap.append(linkHomeText)

  // const linkTools = $('<a>')
  // leftSide.append(linkTools)

  // const linkToolsWrap = $('<div>')
  // linkToolsWrap.addClass('menu-link')
  // linkTools.append(linkToolsWrap)

  // const linkToolsIconWrap = $('<span>')
  // linkToolsIconWrap.addClass('tools-icon')
  // linkToolsWrap.append(linkToolsIconWrap)

  // const linkToolsText = $('<span>')
  // linkToolsText.text(`${i18n.t('menu.admTools')}`)
  // linkToolsWrap.append(linkToolsText)

  // const linkControlPanel = $('<a>')
  // leftSide.append(linkControlPanel)

  // const linkControlPanelWrap = $('<div>')
  // linkControlPanelWrap.addClass('menu-link')
  // linkControlPanel.append(linkControlPanelWrap)

  // const linkControlPanelIconWrap = $('<span>')
  // linkControlPanelIconWrap.addClass('control-panel-icon')
  // linkControlPanelWrap.append(linkControlPanelIconWrap)

  // const linkControlPanelText = $('<span>')
  // linkControlPanelText.text(`${i18n.t('menu.controlPanel')}`)
  // linkControlPanelWrap.append(linkControlPanelText)

  // Right menu
  const rightSide = $('<div>')
  rightSide.addClass('menu-right')
  menu.append(rightSide)

  const userInfoWrapper = $('<div>')
  userInfoWrapper.addClass('user-info-wrapper')
  rightSide.append(userInfoWrapper)

  const userPhotoWrapper = $('<div>')
  userPhotoWrapper.addClass('user-photo-wrapper')
  userInfoWrapper.append(userPhotoWrapper)

  const userPhoto = $('<img>')
  userPhoto.attr('src', '')
  userPhoto.addClass('user-photo')
  userPhotoWrapper.append(userPhoto)

  const userInfoName = $('<span>')
  userInfoName.addClass('user-text')
  userInfoName.text('Default user name')
  userInfoWrapper.append(userInfoName)

  const companyWrapper = $('<div>')
  companyWrapper.addClass('company-link')
  rightSide.append(companyWrapper)

  const companyInner = $('<div>')
  companyInner.addClass('company-inner')
  companyWrapper.append(companyInner)

  const companyText = $('<span>')
  companyText.text(`${i18n.t('menu.changeCompany')}`)
  companyInner.append(companyText)

  const companyIcon = $('<span>')
  companyIcon.addClass('company-icon')
  companyInner.append(companyIcon)

  const companyDropdownWrapper = $('<div>')
  companyDropdownWrapper.addClass('company-dropdown-wrapper hidden')
  companyWrapper.append(companyDropdownWrapper)

  const companyDropdown = $('<span>')
  companyDropdown.attr('id', 'companySelect')
  companyDropdownWrapper.append(companyDropdown)

  const linkPassword = $('<a>')
  rightSide.append(linkPassword)

  const linkPasswordWrapper = $('<div>')
  linkPasswordWrapper.addClass('menu-link')
  linkPassword.append(linkPasswordWrapper)

  const linkPasswordText = $('<span>')
  linkPasswordText.text(`${i18n.t('menu.changePass')}`)
  linkPasswordWrapper.append(linkPasswordText)

  const linkPasswordIcon = $('<span>')
  linkPasswordIcon.addClass('password-icon')
  linkPasswordWrapper.append(linkPasswordIcon)

  const linkLogout = $('<a>')
  rightSide.append(linkLogout)

  const linkLogoutWrapper = $('<div>')
  linkLogoutWrapper.addClass('menu-link')
  linkLogout.append(linkLogoutWrapper)

  const linkLogoutText = $('<span>')
  linkLogoutText.text(`${i18n.t('menu.logout')}`)
  linkLogoutWrapper.append(linkLogoutText)

  const linkLogoutIcon = $('<span>')
  linkLogoutIcon.addClass('logout-icon')
  linkLogoutWrapper.append(linkLogoutIcon)

  return menuWrapper
}

// function leftMenu() {
//   const leftSide = $('<div>')
//   leftSide.attr('id', 'menu-left')
//   leftSide.addClass('menu-left')

//   const linkHome = $('<a>')
//   leftSide.append(linkHome)

//   const linkHomeWrap = $('<div>')
//   linkHomeWrap.addClass('menu-link')
//   linkHome.append(linkHomeWrap)

//   const linkHomeIconWrap = $('<span>')
//   linkHomeIconWrap.addClass('home-icon')
//   linkHomeWrap.append(linkHomeIconWrap)

//   const linkHomeText = $('<span>')
//   linkHomeText.text(`${i18n.t('menu.home')}`)
//   linkHomeWrap.append(linkHomeText)

//   const linkTools = $('<a>')
//   leftSide.append(linkTools)

//   const linkToolsWrap = $('<div>')
//   linkToolsWrap.addClass('menu-link')
//   linkTools.append(linkToolsWrap)

//   const linkToolsIconWrap = $('<span>')
//   linkToolsIconWrap.addClass('tools-icon')
//   linkToolsWrap.append(linkToolsIconWrap)

//   const linkToolsText = $('<span>')
//   linkToolsText.text(`${i18n.t('menu.admTools')}`)
//   linkToolsWrap.append(linkToolsText)

//   const linkControlPanel = $('<a>')
//   leftSide.append(linkControlPanel)

//   const linkControlPanelWrap = $('<div>')
//   linkControlPanelWrap.addClass('menu-link')
//   linkControlPanel.append(linkControlPanelWrap)

//   const linkControlPanelIconWrap = $('<span>')
//   linkControlPanelIconWrap.addClass('control-panel-icon')
//   linkControlPanelWrap.append(linkControlPanelIconWrap)

//   const linkControlPanelText = $('<span>')
//   linkControlPanelText.text(`${i18n.t('menu.controlPanel')}`)
//   linkControlPanelWrap.append(linkControlPanelText)

//   return leftSide
// }

// function rightMenu() {
//   // Right menu
//   const rightSide = $('<div>')
//   rightSide.attr('id', 'menu-right')
//   rightSide.addClass('menu-right')

//   const userInfoWrapper = $('<div>')
//   userInfoWrapper.addClass('user-info-wrapper')
//   rightSide.append(userInfoWrapper)

//   const userPhotoWrapper = $('<div>')
//   userPhotoWrapper.addClass('user-photo-wrapper')
//   userInfoWrapper.append(userPhotoWrapper)

//   const userPhoto = $('<img>')
//   userPhoto.attr('src', '')
//   userPhoto.addClass('user-photo')
//   userPhotoWrapper.append(userPhoto)

//   const userInfoName = $('<span>')
//   userInfoName.addClass('user-text')
//   userInfoName.text('Default user name')
//   userInfoWrapper.append(userInfoName)

//   const companyWrapper = $('<div>')
//   companyWrapper.addClass('company-link')
//   rightSide.append(companyWrapper)

//   const companyInner = $('<div>')
//   companyInner.addClass('company-inner')
//   companyWrapper.append(companyInner)

//   const companyText = $('<span>')
//   companyText.text(`${i18n.t('menu.changeCompany')}`)
//   companyInner.append(companyText)

//   const companyIcon = $('<span>')
//   companyIcon.addClass('company-icon')
//   companyInner.append(companyIcon)

//   const companyDropdownWrapper = $('<div>')
//   companyDropdownWrapper.addClass('company-dropdown-wrapper hidden')
//   companyWrapper.append(companyDropdownWrapper)

//   const companyDropdown = $('<span>')
//   companyDropdown.attr('id', 'companySelect')
//   companyDropdownWrapper.append(companyDropdown)

//   const linkPassword = $('<a>')
//   rightSide.append(linkPassword)

//   const linkPasswordWrapper = $('<div>')
//   linkPasswordWrapper.addClass('menu-link')
//   linkPassword.append(linkPasswordWrapper)

//   const linkPasswordText = $('<span>')
//   linkPasswordText.text(`${i18n.t('menu.changePass')}`)
//   linkPasswordWrapper.append(linkPasswordText)

//   const linkPasswordIcon = $('<span>')
//   linkPasswordIcon.addClass('password-icon')
//   linkPasswordWrapper.append(linkPasswordIcon)

//   const linkLogout = $('<a>')
//   rightSide.append(linkLogout)

//   const linkLogoutWrapper = $('<div>')
//   linkLogoutWrapper.addClass('menu-link')
//   linkLogout.append(linkLogoutWrapper)

//   const linkLogoutText = $('<span>')
//   linkLogoutText.text(`${i18n.t('menu.logout')}`)
//   linkLogoutWrapper.append(linkLogoutText)

//   const linkLogoutIcon = $('<span>')
//   linkLogoutIcon.addClass('logout-icon')
//   linkLogoutWrapper.append(linkLogoutIcon)

//   return rightSide
// }

function securedLeftMenu(secOptions = null) {
  console.log('Recibo: ', secOptions)

  const leftSide = $('#menu-left')

  if (!secOptions) {
    const linkHome = $('<a>')
    leftSide.append(linkHome)

    const linkHomeWrap = $('<div>')
    linkHomeWrap.addClass('menu-link')
    linkHome.append(linkHomeWrap)

    const linkHomeIconWrap = $('<span>')
    linkHomeIconWrap.addClass('home-icon')
    linkHomeWrap.append(linkHomeIconWrap)

    const linkHomeText = $('<span>')
    linkHomeText.text(`${i18n.t('menu.home')}`)
    linkHomeWrap.append(linkHomeText)
  }

  if (secOptions === import.meta.env.VITE_DASHBOARD_SEC_MODULE) {
    const linkTools = $('<a>')
    leftSide.append(linkTools)

    const linkToolsWrap = $('<div>')
    linkToolsWrap.addClass('menu-link')
    linkTools.append(linkToolsWrap)

    const linkToolsIconWrap = $('<span>')
    linkToolsIconWrap.addClass('tools-icon')
    linkToolsWrap.append(linkToolsIconWrap)

    const linkToolsText = $('<span>')
    linkToolsText.text(`${i18n.t('menu.admTools')}`)
    linkToolsWrap.append(linkToolsText)
  }

  if (secOptions === import.meta.env.VITE_ADMIN_TOOLS_SEC_MODULE) {
    const linkControlPanel = $('<a>')
    leftSide.append(linkControlPanel)

    const linkControlPanelWrap = $('<div>')
    linkControlPanelWrap.addClass('menu-link')
    linkControlPanel.append(linkControlPanelWrap)

    const linkControlPanelIconWrap = $('<span>')
    linkControlPanelIconWrap.addClass('control-panel-icon')
    linkControlPanelWrap.append(linkControlPanelIconWrap)

    const linkControlPanelText = $('<span>')
    linkControlPanelText.text(`${i18n.t('menu.controlPanel')}`)
    linkControlPanelWrap.append(linkControlPanelText)
  }
}

export { securedLeftMenu }
export default MainMenu
