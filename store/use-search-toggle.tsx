import { create } from 'zustand'

interface searchToggleProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  toggleOpen: () => void
}

const useSearchToggle = create<searchToggleProps>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useSearchToggle
