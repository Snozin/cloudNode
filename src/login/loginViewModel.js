const mv = {
  _vmLoginMobile: new kendo.data.ObservableObject({
    status: -2, //status of load data (-2 = nothing, -1 = error, 0 = Loading, 1 = login success)
  }),

  getVM() {
    console.log('Variables: ', import.meta.env.VITE_SERVER_URL)
    console.log('Variables: ', import.meta.env.VITE_ENDPOINT_LOGIN)
    console.log('Variables: ', this._vmLoginMobile)
  },
}

export { mv as LoginVM }
