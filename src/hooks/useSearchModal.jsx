// Import necessary modules
import { create } from 'zustand';

// Use create function to create Zustand store
const useSearchModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

// Export the Zustand store
export default useSearchModal;
