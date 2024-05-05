const useState = (defaultValue) => {
  let value = defaultValue
  const getValue = () => value

  const setValue = (newValue) => {
    value = newValue
  }

  return [getValue, setValue]
}

export default useState
