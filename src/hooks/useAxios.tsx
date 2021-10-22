import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://res.cloudinary.com/kayaknews'

interface CategoryInterface {
  id: string;
  name: string;
}
interface errInterface {
  id: string;
  name: string;
}

type IData = CategoryInterface[];
type err = errInterface[];

const UseAxios = (params: any) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const fetchData = async (params: any) => {
    setLoading(true)
    try {
      const res = await axios.request(params)

      setResponse(res.data)
      // eslint-disable-next-line no-console
      console.log(res.data)
      setError(null)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(params)
  }, [])

  return { response, error, loading }
}

export default UseAxios
