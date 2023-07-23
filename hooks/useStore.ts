import { useEffect, useState, useTransition } from "react"

const useStoreFromLocalStorage = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as any
  const [data, setData] = useState<any>([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => {
      setData(result)
    })
  }, [result])

  return { data, isPending }
}

export default useStoreFromLocalStorage


