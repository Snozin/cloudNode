const $ = kendo.jQuery

const useNotification = (msg, type) => {
  // const wrapper = $('<div>').attr('id', 'popupContainer')
  // $('#app').append(wrapper)

  const notification = $('<span>')
  notification.attr('id', 'popupNotification')

  const ref = notification
    .kendoNotification({
      // animation: false,
      position: {
        top: 80,
        right: 10,
      },
      // stacking: 'up',
      height: 40,
      width: 200,
      // appendTo: wrapper,
    })
    .data('kendoNotification')

  ref.show(msg, type)
}

export default useNotification
