import { recoverFetch } from '../utils/useFetch'

function RecoverViewModel() {
  const _vm = kendo.observable({
    sended: null,
  })

  const getViewModel = () => {
    return _vm
  }

  const recoverPassword = async (name, surname, email, numdoc) => {
    const payload = {
      name: name,
      apell1: surname,
      email: email,
      numdoc: numdoc,
    }

    const result = await recoverFetch(payload)
    if (result) {
      _vm.set('sended', true)
    } else {
      _vm.set('sended', false)
    }
  }

  return { getViewModel, recoverPassword }
}

export default RecoverViewModel
