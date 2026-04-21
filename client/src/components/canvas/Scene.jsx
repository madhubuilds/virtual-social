import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Lighting } from "./lighting/Lighting";
import { Controls } from "./controls/Controls";
import useMenuStore from "../../store/menu/useMenuStore";
import { Float, Gltf, Html } from "@react-three/drei";
import { Floor } from "../../features/world/Floor";

export const Scene = () => {
  const equippedItem = useMenuStore((state) => state.equippedItem);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-slate-950">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Physics>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {equippedItem ? (
              <Gltf src={equippedItem.modelUrl} />
            ) : (
              <mesh>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#334155" wireframe />
              </mesh>
            )}
            {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="tomato" />
            </mesh> */}
          </Float>
          <Floor />
          <Lighting />
          <Controls />
        </Physics>
      </Canvas>
    </div>
  );
};
