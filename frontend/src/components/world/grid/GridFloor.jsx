import { Grid } from "@react-three/drei";

export default function GridFloor() {
  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-0.01} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#f8fafc" />
      <Grid
        infiniteGrid
        fadeDistance={20}
        fadeStrength={5}
        sectionSize={1}
        cellColor="#cbd5e1"
      />
    </mesh>
  );
}
