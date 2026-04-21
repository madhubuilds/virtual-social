import { create } from "zustand";

const usePlacementStore = create((set) => ({
  // placement
  placingItem: null, // item being placed
  placingPosition: [0, 0, 0],
  placingRotation: [0, 0, 0],
  // placed
  placedObjects: [],
  selectedId: null,
  editMode: null,

  startPlacing: (item) =>
    set({
      placingItem: item,
      placingPosition: [0, 0, 0],
      placingRotation: [0, 0, 0],
    }),

  updatePosition: (pos) => set({ placingPosition: pos }),
  updateRotation: (rot) => set({ placingRotation: rot }),

  confirmPlacement: () =>
    set((state) => {
      if (!state.placingItem) return state;
      return {
        placedObjects: [
          ...state.placedObjects,
          {
            id: crypto.randomUUID(),
            item: state.placingItem,
            position: state.placingPosition,
            rotation: state.placingRotation,
          },
        ],
        placingItem: null,
      };
    }),
  // selection
  selectObject: (id) => set({ selectedId: id, editMode: "move" }),
  clearSelection: () => set({ selectedId: null, editMode: null }),

  setEditMode: (mode) => set({ editMode: mode }),

  updateSelectedPosition: (pos) =>
    set((state) => ({
      placedObjects: state.placedObjects.map((o) =>
        o.id === state.selectedId ? { ...o, position: pos } : o,
      ),
    })),

  rotateSelected: (delta) =>
    set((state) => ({
      placedObjects: state.placedObjects.map((o) =>
        o.id === state.selectedId
          ? { ...o, rotation: [0, o.rotation[1] + delta, 0] }
          : o,
      ),
    })),

  deleteSelected: () =>
    set((state) => ({
      placedObjects: state.placedObjects.filter(
        (o) => o.id !== state.selectedId,
      ),
      selectedId: null,
      editMode: null,
    })),

  cancelPlacement: () => set({ placingItem: null }),
}));
export default usePlacementStore;
