import { useEffect } from "react";
import usePlacementStore from "../../../store/placement/usePlacementStore";

export function usePlacementControls() {
  const pos = usePlacementStore((s) => s.placingPosition);
  const rot = usePlacementStore((s) => s.placingRotation);
  const setPos = usePlacementStore((s) => s.updatePosition);
  const setRot = usePlacementStore((s) => s.updateRotation);
  const placingItem = usePlacementStore((s) => s.placingItem);
  const selectedId = usePlacementStore((s) => s.selectedId);

  if (!placingItem || selectedId) return;
  useEffect(() => {
    function onKey(e) {
      const step = 0.2;
      const rotStep = 0.15;

      let [x, y, z] = pos;
      let [rx, ry, rz] = rot;

      switch (e.key) {
        case "ArrowUp":
          z -= step;
          break;
        case "ArrowDown":
          z += step;
          break;
        case "ArrowLeft":
          x -= step;
          break;
        case "ArrowRight":
          x += step;
          break;
        case "q":
          ry += rotStep;
          break;
        case "e":
          ry -= rotStep;
          break;
        default:
          return;
      }

      // bounds limit
      x = Math.max(-10, Math.min(10, x));
      z = Math.max(-10, Math.min(10, z));

      setPos([x, y, z]);
      setRot([rx, ry, rz]);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pos, rot, setPos, setRot]);
}
