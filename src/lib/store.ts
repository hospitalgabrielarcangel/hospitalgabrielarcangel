import { create } from "zustand"

interface Store {
  isOnTop: boolean
  setIsOnTop: (isOnTop: boolean) => void
}

export const useStore = create<Store>((set) => ({
  isOnTop: true,
  setIsOnTop: (isOnTop: boolean) => set({ isOnTop }),
}))
