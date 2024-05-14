function Footer() {
  const $ = kendo.jQuery

  const wrapper = $('<div>')
  wrapper.addClass('footer-wrapper container-fluid')

  const footer = $('<footer>')
  footer.addClass('footer')
  wrapper.append(footer)

  const divider = $('<hr>')
  footer.append(divider)

  const text = $('<p>')
  text.text(`© 2024 All rights reserved`)
  text.addClass('footer-text')
  footer.append(text)

  return wrapper
}

export default Footer
