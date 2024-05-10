import i18n from '../utils/useTranslate'

const $ = kendo.jQuery

const RecoverForm = () => {
  const recoverSection = $('<div>')
  recoverSection.attr('id', 'recoverSection')
  recoverSection.addClass('container')

  const recoverInner = $('<div>')
  recoverInner.attr('id', 'recover')
  recoverInner.addClass('row justify-content-center align-middle')
  recoverSection.append(recoverInner)

  const sectionInner = $('<div>')
  sectionInner.addClass('col-sm-8 col-lg-4')
  recoverInner.append(sectionInner)

  const header = $('<div>')
  header.addClass('card-header')
  sectionInner.append(header)

  const title = $('<h3>')
  title.text(`${i18n.t('recover.title')}`)
  header.append(title)

  const body = $('<div>')
  body.addClass('card-body')
  sectionInner.append(body)

  const form = $('<form>')
  form.attr('id', 'recoverForm')
  body.append(form)

  const formInner = $('<div>')
  formInner.addClass('login')
  form.append(formInner)

  const formGroup = $('<div>')
  formGroup.addClass('form-group')
  formInner.append(formGroup)

  const userGroup = $('<div>')
  userGroup.addClass('form-group input-group')
  formGroup.append(userGroup)

  const userIconWrapper = $('<div>')
  userIconWrapper.addClass('input-group-prepend')
  userGroup.append(userIconWrapper)

  const userIconText = $('<span>')
  userIconText.addClass('input-group-text')
  userIconWrapper.append(userIconText)

  const userIcon = $('<i>')
  userIcon.addClass('fas fa-user')
  userIconText.append(userIcon)

  const userInput = $('<input>')
  userInput.attr('id', 'recoverName')
  userInput.attr('required', '')
  userInput.attr('placeholder', `${i18n.t('recover.name')}`)
  userInput.addClass('form-control')
  userGroup.append(userInput)

  const surnameGroup = $('<div>')
  surnameGroup.addClass('form-group input-group')
  formGroup.append(surnameGroup)

  const surnameIconWrapper = $('<div>')
  surnameIconWrapper.addClass('input-group-prepend')
  surnameGroup.append(surnameIconWrapper)

  const surnameIconText = $('<span>')
  surnameIconText.addClass('input-group-text')
  surnameIconWrapper.append(surnameIconText)

  const surnameIcon = $('<i>')
  surnameIcon.addClass('fas fa-user')
  surnameIconText.append(surnameIcon)

  const surnameInput = $('<input>')
  surnameInput.attr('id', 'recoverSurname')
  surnameInput.attr('type', 'text')
  surnameInput.attr('required', '')
  surnameInput.attr('placeholder', `${i18n.t('recover.surname')}`)
  surnameInput.addClass('form-control ')
  surnameGroup.append(surnameInput)

  const emailGroup = $('<div>')
  emailGroup.addClass('form-group input-group')
  formGroup.append(emailGroup)

  const emailIconWrapper = $('<div>')
  emailIconWrapper.addClass('input-group-prepend')
  emailGroup.append(emailIconWrapper)

  const emailIconText = $('<span>')
  emailIconText.addClass('input-group-text')
  emailIconWrapper.append(emailIconText)

  const emailIcon = $('<i>')
  emailIcon.addClass('fas fa-envelope')
  emailIconText.append(emailIcon)

  const emailInput = $('<input>')
  emailInput.attr('id', 'recoverEmail')
  emailInput.attr('type', 'email')
  emailInput.attr('required', '')
  emailInput.attr('placeholder', `${i18n.t('recover.email')}`)
  emailInput.addClass('form-control ')
  emailGroup.append(emailInput)

  const documentGroup = $('<div>')
  documentGroup.addClass('form-group input-group')
  formGroup.append(documentGroup)

  const documentIconWrapper = $('<div>')
  documentIconWrapper.addClass('input-group-prepend')
  documentGroup.append(documentIconWrapper)

  const documentIconText = $('<span>')
  documentIconText.addClass('input-group-text')
  documentIconWrapper.append(documentIconText)

  const documentIcon = $('<i>')
  documentIcon.addClass('fas fa-passport')
  documentIconText.append(documentIcon)

  const documentInput = $('<input>')
  documentInput.attr('id', 'recoverDocument')
  documentInput.attr('type', 'text')
  documentInput.attr('required', '')
  documentInput.attr('placeholder', `${i18n.t('recover.doc')}`)
  documentInput.addClass('form-control ')
  documentGroup.append(documentInput)

  const captchaContainer = $('<div>')
  captchaContainer.attr('id', 'captchaContainer')
  formGroup.append(captchaContainer)

  const captchaIconText = $('<span>')
  captchaIconText.attr('id', 'refreshCaptcha')
  captchaIconText.addClass('input-group-text')
  captchaContainer.append(captchaIconText)

  const captchaIcon = $('<i>')
  captchaIcon.addClass('fas fa-pencil')
  captchaIconText.append(captchaIcon)

  const captchaCanvasWrapper = $('<div>')
  captchaCanvasWrapper.attr('id', 'canvasWrapper')
  captchaContainer.append(captchaCanvasWrapper)

  const captchaInputGroup = $('<div>')
  captchaInputGroup.addClass('form-group input-group')
  formGroup.append(captchaInputGroup)

  const captchaIconWrapper = $('<div>')
  captchaIconWrapper.addClass('input-group-prepend')
  captchaInputGroup.append(captchaIconWrapper)

  const captchaGroupIconText = $('<span>')
  captchaGroupIconText.addClass('input-group-text')
  captchaIconWrapper.append(captchaGroupIconText)

  const captchaGroupIcon = $('<i>')
  captchaGroupIcon.addClass('fas fa-passport')
  captchaGroupIconText.append(captchaGroupIcon)

  const captchaGroupInput = $('<input>')
  captchaGroupInput.attr('id', 'recoverCaptcha')
  captchaGroupInput.attr('type', 'text')
  captchaGroupInput.attr('placeholder', `${i18n.t('recover.captcha')}`)
  captchaGroupInput.addClass('form-control ')
  captchaInputGroup.append(captchaGroupInput)

  const submitGroup = $('<div>')
  submitGroup.addClass('form-group input-group')
  formGroup.append(submitGroup)

  const submitButton = $('<button>')
  submitButton.attr('id', 'recoverSubmit')
  submitButton.attr('type', 'submit')
  submitButton.text(`${i18n.t('recover.submit')}`)
  submitButton.css({ display: 'none' })
  submitButton.addClass(
    'form-control btn col-lg-12 col-xs-12 float-left loginbtn'
  )
  submitGroup.append(submitButton)

  const gobackGroup = $('<div>')
  gobackGroup.addClass('form-group input-group')
  formGroup.append(gobackGroup)

  const goBackButton = $('<button>')
  goBackButton.attr('id', 'recoverBack')
  goBackButton.attr('type', 'button')
  goBackButton.text(`${i18n.t('recover.back')}`)
  goBackButton.addClass(
    'form-control btn col-lg-12 col-xs-12 float-left recoverBackBtn'
  )
  gobackGroup.append(goBackButton)

  return recoverSection
}

export default RecoverForm
