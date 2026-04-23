import { useGLTF } from "@react-three/drei";

export default function PlacedItem({ modelUrl, position, rotation }) {
  const { scene } = useGLTF(modelUrl);

  const clonedScene = scene.clone();
  return (
    <primitive
      object={clonedScene}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}
