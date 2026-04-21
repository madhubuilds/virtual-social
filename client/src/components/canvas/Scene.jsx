import { Canvas } from "@react-three/fiber";
import { Lighting } from "./lighting/Lighting";
import { Controls } from "./controls/Controls";
import useMenuStore from "../../store/menu/useMenuStore";
import { Float, Gltf, Html } from "@react-three/drei";

export const Scene = () => {
  const equippedItem = useMenuStore((state) => state.equippedItem);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-slate-950">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={window.devicePixelRatio}
      >
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
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="indigo" />
        </mesh>
        <Lighting />
        <Controls />
      </Canvas>
    </div>
  );
};
