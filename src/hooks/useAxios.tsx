/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://res.cloudinary.com/kayaknews/'

const useAxios = (params: any) => {
  interface CategoryInterface {
    id: string
    name: string
  }
  interface errInterface {
    code : number
    prevState: null
  }
  type IData = CategoryInterface[]
  type err = errInterface[]
  const [response, setResponse] = useState(null)
  const [error, setError] = useState<errInterface | null>(null)
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const fetchData = async (params: any) => {
    setLoading(true)
    try {
      const res: any = await axios.request(params)

      // eslint-disable-next-line no-console
      console.log(res)

      setResponse(res.data)
      // eslint-disable-next-line no-console

      setError(null)
    } catch (err: any) {
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

export default useAxios