import { refreshFetch, useFetch } from '../utils/useFetch'

function LayoutViewModel() {
  const _vm = kendo.observable({
    userInfo: null,
    errorStatus: null,
  })

  const _isLoading = kendo.observable({
    state: false,
  })

  const getViewModel = () => {
    return _vm
  }

  const getLoadingState = () => {
    return _isLoading
  }

  const getUserInfo = async () => {
    const url = import.meta.env.VITE_ENDPOINT_INFO

    _isLoading.set('state', true)
    try {
      const userInfo = await useFetch({ url, method: 'GET' })

      _vm.set('userInfo', userInfo)
      _vm.set('userSecOptions', userInfo.options)
      _isLoading.set('state', false)
    } catch (error) {
      _vm.set('errorStatus', error.statusCode)
      _vm.set('isLoading', false)
    }
  }

  const changeSociety = async (idOrganization) => {
    const payload = { organization: idOrganization }
    try {
      await refreshFetch(payload)
    } catch (error) {}
  }

  return { getViewModel, getLoadingState, getUserInfo, changeSociety }
}

export default LayoutViewModel
