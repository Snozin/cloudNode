import i18n from '../utils/useTranslate'
// import { router } from '../utils/useRouter'

function MainMenu() {
  const $ = kendo.jQuery

  const menuWrapper = $('<div>')
  menuWrapper.addClass(
    'menu-wrapper hidden col-5 col-sm-4 col-md-4 col-lg-4 col-xl-3'
  )

  const menu = $('<navbar>')
  menu.addClass('menu-navbar')
  menuWrapper.append(menu)

  // Left menu
  const leftSide = $('<div>')
  leftSide.addClass('menu-left')
  menu.append(leftSide)

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
  userInfoName.text('Holiwi gente linda')
  userInfoWrapper.append(userInfoName)

  // Implementar cambio de sociedad
  const companyWrapper = $('<div>')
  rightSide.append(companyWrapper)

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

export default MainMenu
