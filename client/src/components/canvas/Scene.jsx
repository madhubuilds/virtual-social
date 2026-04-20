import { Canvas } from "@react-three/fiber";
import { Lighting } from "./lighting/Lighting";
import { Controls } from "./controls/Controls";
export const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-slate-950">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={window.devicePixelRatio}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="tomato" />
        </mesh>
        <Lighting />
        <Controls />
      </Canvas>
    </div>
  );
};
