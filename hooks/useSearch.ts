import { create } from "zustand"

interface SearchStore {
  open: boolean
  onOpen: () => void
}

const useSearch = create<SearchStore>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
}))

export default useSearch
