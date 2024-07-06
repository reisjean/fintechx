import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type CurrentView = "carousel" | "chat" | "preferences" | "profile"

export type NavigationStoreProps = {
  current: CurrentView
}

export interface NavigationStoreMethods {
  update: (current: CurrentView) => void
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
