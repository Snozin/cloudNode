function Sidebar() {
  const $ = kendo.jQuery

  const wrapper = $('<div>')
  wrapper.addClass('sidebar-wrapper col-lg-3 col-md-4 col-sm-4 col-4')

  const sidebar = $('<aside>')
  sidebar.addClass('sidebar')
  sidebar.text('sidebar')
  wrapper.append(sidebar)

  return wrapper
}

export default Sidebar
