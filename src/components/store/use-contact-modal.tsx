import { create } from "zustand";

interface UseContactModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useContactModal = create<UseContactModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useContactModal;
