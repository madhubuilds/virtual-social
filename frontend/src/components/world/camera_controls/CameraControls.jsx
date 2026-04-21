import { OrbitControls } from "@react-three/drei";

export default function CameraControls() {
  return (
    <OrbitControls
      makeDefault
      enableDamping={true}
      dampingFactor={0.05}
      minDistance={2}
      maxDistance={20}
      // Mobile-friendly: prevents panning off-screen
      maxPolarAngle={Math.PI / 2.1}
    />
  );
}
