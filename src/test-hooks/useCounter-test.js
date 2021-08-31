import { renderHook } from "@testing-library/react-hooks"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
  it("useCounter", () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)
    expect(typeof result.current.count).toBe("function")
  })

  it("useCounter increment", () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(1)
  })

  it("useCounter increment with initial value", () => {
    const { result } = renderHook(() => useCounter(10))

    expect(result.current.count).toBe(11)
  })

  it("test reset", () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => useCounter(initialValue),
      {
        initialValue: 0,
      },
    )

    rerender({ initialValue: 10 })

    expect(result.current.count).toBe(10)
  })

  it("test incrementAsync", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter(0))

    result.current.incrementAsync()

    await waitForNextUpdate()

    expect(result.current.count).toBe(1)
  })
})
