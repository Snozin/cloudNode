const $ = kendo.jQuery

const Notification = (msg, type) => {
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
      width: 200,
      height: 50,
      // autoHideAfter: 3000,
      // appendTo: wrapper,
    })
    .data('kendoNotification')

  ref.show(msg, type)
}

export default Notification
