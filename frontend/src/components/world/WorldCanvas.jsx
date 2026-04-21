import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AdaptiveDpr, Environment, ContactShadows } from "@react-three/drei";
import CameraControls from "./camera_controls/CameraControls";
import Lights from "./lights/Lights";
import Scene from "./scene/Scene";
export function WorldCanvas() {
  return (
    <div className="fixed inset-0 h-full w-full outline-none bg-slate-950">
      <Canvas
       shadows
        camera={{ position: [8, 8, 8], fov: 40 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <CameraControls />
          <Lights />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
