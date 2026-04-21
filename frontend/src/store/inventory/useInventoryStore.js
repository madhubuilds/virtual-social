import { create } from "zustand";

const useInventoryStore = create((set) => ({
  ownedItemIds: [],

  // Logic to buy an item
  buyItem: (id) =>
    set((state) => ({
      // Only add if not already owned
      ownedItemIds: state.ownedItemIds.includes(id)
        ? state.ownedItemIds
        : [...state.ownedItemIds, id],
    })),

  // Logic to "Equip/Place" in 3D world
  equipItem: (id) => {
    console.log(`Equipping item ${id} into the 3D space...`);
    // This will eventually trigger adding a model to your Scene.jsx
  },
}));

export default useInventoryStore;
