import useStorage from './useStorage'

// Returns 0 if lang = 'es' or 1 otherwise
const getLangIndex = () => {
  return useStorage.get('lang') === 'es' ? 0 : 1
}

export { getLangIndex }
