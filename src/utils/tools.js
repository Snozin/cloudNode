import useStorage from './useStorage'

// Returns 0 if lang = 'es' or 1 otherwise
const getLangIndex = () => {
  return useStorage.get('lang') === 'es' ? 0 : 1
}

// Fin the actual organization position in all organizations array
const getOrgIndex = (mainOrg, orgs) => {
  const condition = (org) => org.id === mainOrg

  const pos = orgs.indexOf(orgs.find(condition))

  return pos
}

export { getLangIndex, getOrgIndex }
