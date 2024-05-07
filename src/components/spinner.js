const $ = kendo.jQuery
const Spinner = () => {
  const spinnerWrapper = $('<div>')
  spinnerWrapper.attr('id', 'spinner')

  const innerSpinner = $('<span>')
  innerSpinner.addClass('loader')
  spinnerWrapper.append(innerSpinner)

  return spinnerWrapper
}

export default Spinner
