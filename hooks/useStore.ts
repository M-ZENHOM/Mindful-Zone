"use client"
import { useEffect, useState } from "react"

const useLocalStorage = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback)
  const [data, setData] = useState<any>()

  useEffect(() => {
    setData(result)
  }, [result])

  return { ...data }
}

export default useLocalStorage
