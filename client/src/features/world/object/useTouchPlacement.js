import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import usePlacementStore from "../../../store/placement/usePlacementStore";

const PLANE_Y = 0;
const MIN_X = -10;
const MAX_X = 10;
const MIN_Z = -10;
const MAX_Z = 10;

export function useTouchPlacement() {
  const { camera } = useThree();

  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -PLANE_Y);

  const updatePosition = usePlacementStore((s) => s.updatePosition);
  function moveFromEvent(e) {
    e.stopPropagation();

    const mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1,
    );
    raycaster.setFromCamera(mouse, camera);
    const point = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, point);

    const x = Math.max(MIN_X, Math.min(MAX_X, point.x));
    const z = Math.max(MIN_Z, Math.min(MAX_Z, point.z));

    updatePosition([x, PLANE_Y, z]);
  }
  return { moveFromEvent };
}
