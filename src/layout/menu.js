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
  linkHomeIconWrap.addClass('home-link')
  linkHomeWrap.append(linkHomeIconWrap)

  const linkHomeIcon = $('<img>')
  linkHomeIcon.attr('src', '')
  linkHomeIconWrap.append(linkHomeIcon)

  const linkHomeText = $('<span>')
  linkHomeText.text(`${i18n.t('menu.home')}`)
  linkHomeWrap.append(linkHomeText)

  const linkTools = $('<a>')
  leftSide.append(linkTools)

  const linkToolsWrap = $('<div>')
  linkToolsWrap.addClass('menu-link')
  linkTools.append(linkToolsWrap)

  const linkToolsIconWrap = $('<span>')
  linkToolsIconWrap.addClass('tools-link')
  linkToolsWrap.append(linkToolsIconWrap)

  const linkToolsIcon = $('<img>')
  linkToolsIcon.attr('src', '')
  linkToolsIconWrap.append(linkToolsIcon)

  const linkToolsText = $('<span>')
  linkToolsText.text(`${i18n.t('menu.admTools')}`)
  linkToolsWrap.append(linkToolsText)

  const linkControlPanel = $('<a>')
  leftSide.append(linkControlPanel)

  const linkControlPanelWrap = $('<div>')
  linkControlPanelWrap.addClass('menu-link')
  linkControlPanel.append(linkControlPanelWrap)

  const linkControlPanelIconWrap = $('<span>')
  linkControlPanelIconWrap.addClass('control-panel-link')
  linkControlPanelWrap.append(linkControlPanelIconWrap)

  const linkControlPanelIcon = $('<img>')
  linkControlPanelIcon.attr('scr', '')
  linkControlPanelIconWrap.append(linkControlPanelIcon)

  const linkControlPanelText = $('<span>')
  linkControlPanelText.text(`${i18n.t('menu.controlPanel')}`)
  linkControlPanelWrap.append(linkControlPanelText)

  // Right menu
  const rightSide = $('<div>')
  rightSide.addClass('menu-right')
  menu.append(rightSide)

  return menuWrapper
}

export default MainMenu
