const $ = kendo.jQuery

const LoginForm = () => {
  const loginSection = $('<div>')
  loginSection.attr('id', 'loginSection')

  const loginInner = $('<div>')
  loginInner.attr('id', 'login')
  loginInner.addClass('row justify-content-center align-middle')
  loginSection.append(loginInner)

  const sectionInner = $('<div>')
  sectionInner.addClass('col-sm-8 col-lg-5')
  loginInner.append(sectionInner)

  const header = $('<div>')
  header.addClass('card-header')
  sectionInner.append(header)

  const title = $('<h3>')
  header.append(title)

  const text = $('<span>')
  text.attr('id', 'login.title')
  text.text('Equilibrha Cloud')
  title.append(text)

  const body = $('<div>')
  body.addClass('card-body')
  sectionInner.append(body)

  const form = $('<form>')
  form.attr('id', 'loginForm')
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
  userInput.attr('id', 'loginEmail')
  userInput.attr('placeholder', 'Usuario')
  userInput.addClass('form-control')
  userGroup.append(userInput)

  const passGroup = $('<div>')
  passGroup.addClass('form-group input-group')
  formGroup.append(passGroup)

  const passIconWrapper = $('<div>')
  passIconWrapper.addClass('input-group-prepend')
  passGroup.append(passIconWrapper)

  const passIconText = $('<span>')
  passIconText.addClass('input-group-text')
  passIconWrapper.append(passIconText)

  const passIcon = $('<i>')
  passIcon.addClass('fas fa-key')
  passIconText.append(passIcon)

  const passInput = $('<input>')
  passInput.attr('id', 'loginPass')
  passInput.attr('type', 'password')
  passInput.attr('placeholder', 'Contraseña')
  passInput.addClass('form-control ')
  passGroup.append(passInput)

  const langGroup = $('<div>')
  langGroup.addClass('form-group input-group')
  formGroup.append(langGroup)

  const langInput = $('<input>')
  langInput.attr('id', 'lang-select')
  // langInput.kendoComboBox({
  //   dataTextField: 'text',
  //   dataValueField: 'value',
  //   dataSource: [
  //     // { text: 'Espanol', value: app.constants.LANGUAJES.SPANISH },
  //     { text: 'Español', value: 'Español' },
  //     // { text: 'English', value: app.constants.LANGUAJES.ENGLISH },
  //     { text: 'English', value: 'English' },
  //   ],
  //   change: function (e) {
  //     // var value = this.value()

  //     // if (value == app.constants.LANGUAJES.SPANISH) {
  //     //   app.common.setLanguaje(value)
  //     // } else {
  //     //   app.common.setLanguaje(app.constants.LANGUAJES.ENGLISH)
  //     // }
  //     console.log('Cambio combo')
  //   },
  //   // index: app.common.getLanguajeIndex(), //get index by defauklt.
  //   index: 0, //get index by defauklt.
  // })
  langGroup.append(langInput)

  const sendGroup = $('<div>')
  sendGroup.addClass('form-group input-group submit')
  formGroup.append(sendGroup)

  const sendButton = $('<button>')
  sendButton.attr('id', 'enviar')
  sendButton.addClass(
    'form-control btn col-lg-12 col-xs-12 float-left loginbtn'
  )
  sendGroup.append(sendButton)

  const btnText = $('<span>')
  btnText.attr('id', 'login.lblsend')
  btnText.text('Enviar')
  sendButton.append(btnText)

  const footer = $('<div>')
  footer.addClass('card-footer')
  sectionInner.append(footer)

  const footerLink = $('<a>')
  footerLink.attr('href', '#')
  footerLink.addClass('float-right')
  footer.append(footerLink)

  const footerLinkText = $('<h6>')
  footerLink.append(footerLinkText)

  const footerLinkTextInner = $('<span>')
  footerLinkTextInner.attr('id', 'login.remeberpassword')
  footerLinkTextInner.text('¿Has olvidado la contraseña?')
  footerLinkText.append(footerLinkTextInner)

  return loginSection
}

export default LoginForm
