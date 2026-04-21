import usePlacementStore from "../../../store/placement/usePlacementStore";

export function PlacementControls() {
  const selectedId = usePlacementStore((s) => s.selectedId);
  const editMode = usePlacementStore((s) => s.editMode);
  const setEditMode = usePlacementStore((s) => s.setEditMode);
  const rotate = usePlacementStore((s) => s.rotateSelected);
  const clear = usePlacementStore((s) => s.clearSelection);
  const del = usePlacementStore((s) => s.deleteSelected);
  if (!selectedId) return null;
  console.log("selectedId:", selectedId);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur px-4 py-3 rounded-2xl flex gap-3">
      <button
        onClick={() => setEditMode("move")}
        className={btn(editMode === "move")}
      >
        Move
      </button>
      <button
        onClick={() => setEditMode("rotate")}
        className={btn(editMode === "rotate")}
      >
        Rotate
      </button>
      <button onClick={() => rotate(0.25)} className={btn(false)}>
        ⟲
      </button>
      <button onClick={() => rotate(-0.25)} className={btn(false)}>
        ⟳
      </button>
      <button onClick={del} className={btn(false)}>
        🗑
      </button>
      <button onClick={clear} className={btn(false)}>
        Done
      </button>
    </div>
  );
}

function btn(active) {
  return `px-3 py-2 rounded-xl text-sm font-bold ${
    active ? "bg-amber-500 text-black" : "bg-slate-700 text-white"
  }`;
}
