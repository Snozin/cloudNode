const useStorage = {
  get(key) {
    const value = JSON.parse(localStorage.getItem(key))
    return value
  },
  set(key, value) {
    const parsedValue = JSON.stringify(value)
    localStorage.setItem(key, parsedValue)
  },
  remove(key) {
    localStorage.removeItem(key)
  },
}

export default useStorage
