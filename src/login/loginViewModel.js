import { loginFetch, refreshFetch } from '../utils/useFetch'
import useStorage from '../utils/useStorage'

function LoginViewModel() {
  const _vm = kendo.observable({
    lang: useStorage.get('lang'),
    loginDone: null,
    isLoading: false,
  })

  const getViewModel = () => {
    return _vm
  }

  const login = async (credentials) => {
    _vm.set('isLoading', true)
    const token = await loginFetch(credentials)

    if (token) {
      useStorage.set('tokenJWT', token)
      _vm.set('isLoading', false)
      return true
    }
    
    _vm.set('isLoading', false)
    return false
  }

  const refreshToken = (organization) => {
    const url = import.meta.env.VITE_ENDPOINT_REFRESH
    const resp = refreshFetch({ url, payload: organization })

    return resp ? true : false
  }

  return { getViewModel, login, refreshToken }
}

export default LoginViewModel
