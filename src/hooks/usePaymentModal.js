import { create } from "zustand";

const usePaymentModal = create((set) => ({
  isOpen: false,
  BookedID: 0,
  amount: 0,
  changeAmount: (price) => set({ amount: price }),
  changeBookedID: (id) => set({ BookedID: id }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePaymentModal;
