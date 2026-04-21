import { Gltf } from "@react-three/drei";
import usePlacementStore from "../../../store/placement/usePlacementStore";

export function PlacedObject({ objectId, item, position, rotation }) {
  const select = usePlacementStore((s) => s.selectObject);
  const selectedId = usePlacementStore((s) => s.selectedId);

  const isSelected = selectedId === objectId;

  return (
    <group
      position={position}
      rotation={rotation}
      onPointerDown={(e) => {
        e.stopPropagation();
        select(objectId);
      }}
    >
      <Gltf src={item.modelUrl} />

      {isSelected && (
        <mesh scale={[1.2, 0.05, 1.2]} position={[0, -0.01, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.25} />
        </mesh>
      )}
    </group>
  );
}
