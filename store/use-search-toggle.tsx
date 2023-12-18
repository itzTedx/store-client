import { create } from 'zustand'

interface searchToggleProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useSearchToggle = create<searchToggleProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useSearchToggle
