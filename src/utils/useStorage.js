const useStorage = {
  set(key, value) {
    const parsedValue = JSON.stringify(value)
    localStorage.setItem(key, parsedValue)
  },
  get(key) {
    const value = JSON.parse(localStorage.getItem(key))
    return value
  },
}

export default useStorage
