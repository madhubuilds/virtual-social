import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Lighting } from "./lighting/Lighting";
import { Controls } from "./controls/Controls";
import useMenuStore from "../../store/menu/useMenuStore";
import { Float, Gltf, Html } from "@react-three/drei";
import { Floor } from "../../features/world/Floor";

import { PlacementGhost } from "../../features/world/object/PlacementGhost";
import { PlacedObject } from "../../features/world/object/PlacedObject";
import { usePlacementControls } from "../../features/world/object/usePlacementControls.js";
import usePlacementStore from "../../store/placement/usePlacementStore.js";
export const Scene = () => {
  usePlacementControls();
  const placedObjects = usePlacementStore((s) => s.placedObjects);
  const selectedId = usePlacementStore((s) => s.selectedId);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-slate-950">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Physics>
          <Floor />

          {/* Placed furniture */}
          {placedObjects.map((obj) => (
            <PlacedObject
              key={obj.id}
              objectId={obj.id}
              item={obj.item}
              position={obj.position}
              rotation={obj.rotation}
            />
          ))}

          {/* Ghost while placing */}
          <PlacementGhost />

          <Lighting />
          <Controls enabled={!selectedId} />
        </Physics>
      </Canvas>
    </div>
  );
};
