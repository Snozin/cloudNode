import { loginFetch, refreshFetch } from '../utils/useFetch'
import useStorage from '../utils/useStorage'

class LoginViewModel {
  _vm = kendo.observable({
    currentLang: useStorage.get('lang'),
    status: -2, //status of load data (-2 = nothing, -1 = error, 0 = Loading, 1 = login success)
  })

  constructor() {
    if (!this._vm.get('currentLang')) {
      const lang = 'es'
      useStorage.set('lang', lang)
      this._vm.set('currentLang', lang)
    }
  }

  getRef() {
    return this._vm
  }

  login(credentials) {
    loginFetch(credentials)
  }

  refreshToken(organization) {
    const url = import.meta.env.VITE_ENDPOINT_REFRESH
    const resp = refreshFetch({ url, payload: organization })

    return resp ? true : false
  }
}

const LoginVM = new LoginViewModel()

export { LoginVM }
