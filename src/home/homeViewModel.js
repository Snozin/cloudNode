import { useFetch } from '../utils/useFetch'

function HomeViewModel() {
  const _vm = kendo.observable({
    isLoading: null,
    userInfo: null,
  })

  const getViewModel = () => {
    return _vm
  }

  const url = import.meta.env.VITE_ENDPOINT_INFO

  const getInfo = async () => {
    const userInfo = await useFetch({ url, method: 'GET' })
    _vm.set('userInfo', userInfo)
  }

  return { getViewModel, getInfo }
}

export default HomeViewModel
