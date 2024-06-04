import useStorage from './useStorage'

const base = import.meta.env.VITE_SERVER_URL

const loginFetch = async ({ user, password }) => {
  const path = import.meta.env.VITE_ENDPOINT_LOGIN
  const url = base + path

  try {
    const credentials = btoa(`${user}:${password}`)

    const resp = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({ client: '', token: '' }),
    })

    if (!resp.ok) {
      const message = `Login error. Status code:${resp.status}. ${resp.statusText}`
      console.error(message)
      return false
    }

    const token = await resp.text()

    return token
    //Send Analytics Success
    // app.analytics.addAnalytics(
    //   'Login Success',
    //   app.analytics.ANALYTICS_PROCESS.PROCESS_LOGIN,
    //   new Date()
    // )
  } catch (error) {
    console.error(`Error fetching: ${error}`)
  }
}

const refreshFetch = async (payload = '') => {
  const path = import.meta.env.VITE_ENDPOINT_REFRESH
  const url = base + path

  try {
    const token = useStorage.get('tokenJWT')

    const resp = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (!resp.ok) {
      const message = `Fetching error. Status code:${resp.status}. ${resp.statusText}`
      console.error(message)
      return false
    }

    const newToken = await resp.text()
    useStorage.set('tokenJWT', newToken)

    return true
  } catch (error) {
    console.error(`Error fetching: ${error}`)
  }
}

const recoverFetch = async (payload = '') => {
  const url = import.meta.env.VITE_ENDPOINT_RECOVER
  const fullURL = base + url

  try {
    const resp = await fetch(fullURL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!resp.ok) {
      const message = `Fetching error. Status code:${resp.status}. ${resp.statusText}`
      console.error(message)
      return false
    }

    // const data = await resp.json()
    // return data
    return true
  } catch (error) {
    console.error(`Error fetching: ${error}`)
  }
}

const useFetch = async ({ url, method = 'POST', payload = '' }) => {
  const fullURL = base + url
  try {
    const token = useStorage.get('tokenJWT')

    const setConfig = () => {
      const config = {
        method: method,
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      if (method.toUpperCase() !== 'GET') {
        return {
          ...config,
          body: JSON.stringify(payload),
        }
      }
      return config
    }

    const resp = await fetch(fullURL, setConfig())

    if (!resp.ok) {
      const error = new Error('Fetching error')
      error.statusCode = resp.status

      throw error
    }

    const data = await resp.json()
    return data
  } catch (error) {
    error.statusCode ??= 666

    throw error
  }
}

export { loginFetch, refreshFetch, recoverFetch, useFetch }
