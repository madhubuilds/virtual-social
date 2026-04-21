import { MeshReflectorMaterial } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
export function Floor() {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />

        {/* Simple material for now */}
        <meshStandardMaterial color="#1e293b" />

        {/** Later you can replace with:
         * <MeshReflectorMaterial />
         * or textures
         */}
      </mesh>
    </RigidBody>
  );
}
