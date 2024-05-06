import useStorage from '../utils/useStorage'

// const vm = {
//   _vm: kendo.observable({
//     currentLang: useStorage.get('lang'),
//     status: -2, //status of load data (-2 = nothing, -1 = error, 0 = Loading, 1 = login success)
//   }),

//   init() {
//     if (!this._vm.get('currentLang')) {
//       const actual = 'en'
//       useStorage.set('lang', actual)
//       this._vm.set('currentLang', actual)
//     }
//   },
//   getVM() {
//     return this._vm
//     // console.log('Variables: ', import.meta.env.VITE_SERVER_URL)
//     // console.log('Variables: ', import.meta.env.VITE_ENDPOINT_LOGIN)
//     // console.log('Variables: ', this._vmLoginMobile)
//   },
// }

// export { vm as LoginVM }

const _vm = kendo.observable({
  currentLang: useStorage.get('lang'),
})

const loadVM = () => {
  if (!_vm.get('currentLang')) {
    const actual = 'es'
    useStorage.set('lang', actual)
    _vm.set('currentLang', actual)
  }
}

const getVM = () => {
  return _vm
}

export { loadVM, getVM }
