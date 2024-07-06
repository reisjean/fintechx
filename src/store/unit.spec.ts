import { act, renderHook } from "@testing-library/react"
import {
  initialState,
  NavigationStoreMethods,
  NavigationStoreProps,
  useNavigationStore,
} from "./navigation"

type Current = any

describe("useNavigationStore", () => {
  let current: NavigationStoreProps & NavigationStoreMethods

  const renderNavigationStore = () => {
    return renderHook(() => useNavigationStore()).result.current
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return the initial state", () => {
    current = renderNavigationStore()
    const { current: currentView } = current

    expect(currentView).toEqual(initialState.current)
  })

  it("should update current view", async () => {
    current = renderNavigationStore()
    const { update } = current
    const newCurrent: Current = "chat"

    act(() => {
      update(newCurrent)
    })

    current = renderNavigationStore()
    const { current: updatedCurrent } = current
    expect(updatedCurrent).toBe(newCurrent)
  })

  it("should reset to initial state", async () => {
    current = renderNavigationStore()
    const { update, reset } = current
    const newCurrent: Current = "chat"

    act(() => {
      update(newCurrent)
    })

    current = renderNavigationStore()
    const { current: updatedCurrent } = current
    expect(updatedCurrent).toBe(newCurrent)

    act(() => {
      reset()
    })

    current = renderNavigationStore()
    const { current: resetCurrent } = current
    expect(resetCurrent).toBe(initialState.current)
  })
})
