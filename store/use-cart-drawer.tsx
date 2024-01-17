import { create } from "zustand";

interface cartDrawerprops {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleOpen: () => void;
}

const useCartDrawer = create<cartDrawerprops>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useCartDrawer;
