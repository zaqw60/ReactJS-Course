import React, { useState, useContext, useCallback, createContext } from "react"

const CounterContext = createContext(1)

export const CounterProvider = ({ children, step }) => {
  return (
    <CounterContext.Provider value={step}>{children}</CounterContext.Provider>
  )
}

export const useCounter = (value = 0) => {
  const [count, setCount] = useState(value)
  const step = useContext(CounterContext)
  const increment = useCallback(() => setCount((c) => c + step), [step])
  const incrementAsync = useCallback(
    () => setTimeout(increment, 200),
    [increment],
  )

  const reset = useCallback(() => setCount(value), [value])

  if (count > 5000) {
    throw Error("error")
  }

  return { count, increment, incrementAsync, reset }
}
