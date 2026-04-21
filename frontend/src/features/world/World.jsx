import { Canvas } from "@react-three/fiber";

import { Floor } from "./Floor";

export function World() {
  return (
    <div className="fixed inset-0 bg-slate-950">
      <Canvas camera={{ position: [0, 6, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Floor />
      </Canvas>
    </div>
  );
}
