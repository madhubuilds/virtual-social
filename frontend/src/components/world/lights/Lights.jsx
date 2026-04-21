export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <hemisphereLight args={["#ffffff", "#606060", 0.5]} />
    </>
  );
}
