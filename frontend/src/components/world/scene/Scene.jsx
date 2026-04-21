export default function Scene() {
  return (
    <mesh receiveShadow position-y={-0.5} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
}