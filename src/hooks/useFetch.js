import { useCallback, useState } from 'react';

export default function useFetch(callback) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      await callback()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [callback])

  return [fetch, loading, error]
}