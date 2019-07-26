import { useState, useEffect } from 'react'

export function useFetch (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUrl () {
    const response = await window.fetch(url)
    const json = await response.json()
    const ownData = await json.data
    setData(ownData)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  return [data, loading]
}
