import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type Current = "carousel" | "chat"

export type NavigationStoreProps = {
  current: Current
}

export interface NavigationStoreMethods {
  update: (current: Current) => void
  reset: () => void
}

export const initialState: NavigationStoreProps = {
  current: "carousel",
}

export const useNavigationStore = create<
  NavigationStoreProps & NavigationStoreMethods
>()(
  persist(
    (set) => ({
      ...initialState,
      update: (current) => {
        set(() => ({ current }))
      },
      reset: () => {
        set(() => initialState)
      },
    }),
    {
      name: "@FinTechX:navigation",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
