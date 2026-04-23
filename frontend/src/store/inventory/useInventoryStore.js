import { create } from "zustand";

const useInventoryStore = create((set) => ({
  ownedItemIds: [],
  placedItems: [],
  // Logic to buy an item
  buyItem: (id) =>
    set((state) => ({
      // Only add if not already owned
      ownedItemIds: state.ownedItemIds.includes(id)
        ? state.ownedItemIds
        : [...state.ownedItemIds, id],
    })),

  // Logic to "Equip/Place" in 3D world
  equipItem: (asset) =>
    set((state) => ({
      placedItems: [
        ...state.placedItems,
        {
          ...asset,
          instanceId: Date.now(), // Unique ID for multiple of same model
          position: [0, 0, 0],
          rotation: [0, 0, 0],
        },
      ],
    })),
}));

export default useInventoryStore;
