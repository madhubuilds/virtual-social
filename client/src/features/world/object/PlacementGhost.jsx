import { Gltf } from "@react-three/drei";
import usePlacementStore from "../../../store/placement/usePlacementStore";
import { useTouchPlacement } from "./useTouchPlacement";

export function PlacementGhost() {
  const item = usePlacementStore((s) => s.placingItem);
  const position = usePlacementStore((s) => s.placingPosition);
  const rotation = usePlacementStore((s) => s.placingRotation);

  const updateRotation = usePlacementStore((s) => s.updateRotation);

  const { moveFromEvent } = useTouchPlacement();

  const editMode = usePlacementStore((s) => s.editMode);

  if (!item) return null;

  return (
    <group
      position={position}
      rotation={rotation}
      onPointerDown={moveFromEvent}
      onPointerMove={(e) =>
        editMode === "move" && e.buttons === 1 && moveFromEvent(e)
      }
    >
      <Gltf src={item.modelUrl} />
    </group>
  );
}
