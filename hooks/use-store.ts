import { useEffect, useState, useTransition } from "react"


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const useStoreFromLocalStorage = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as Todo[]
  const [data, setData] = useState<Todo[]>([])

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useStoreFromLocalStorage