import { useEffect, useState } from "react"

const useStoreFromLocalStorage = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as any
  const [data, setData] = useState<any>([])

  useEffect(() => {
    setData(result)
  }, [result])

  return { data }
}

export default useStoreFromLocalStorage


