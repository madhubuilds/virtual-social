import { create } from "zustand";
export const useUIStore = create((set) => ({
  isShopOpen: false,
  activeTab: "shop", // 'shop' or 'inventory'
  toggleShop: () => set((state) => ({ isShopOpen: !state.isShopOpen })),
  setTab: (tab) => set({ activeTab: tab }),
}));
