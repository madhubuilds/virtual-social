import { create } from "zustand";

const useMenuStore = create((set) => ({
  isOpen: false,
  viewMode: "store",
  ownedItems: [],
  equippedItem: null,
  // UI Actions
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
  setViewMode: (mode) => set({ viewMode: mode }),
  // Logic Actions
  purchaseItem: (item) =>
    set((state) => {
      // prevent duplicate purchases
      if (state.ownedItems.find((i) => i.name === item.name)) return state;
      return { ownedItems: [...state.ownedItems, item] };
    }),
  equipItem: (item) => set({ equippedItem: item }),
}));

export default useMenuStore;
