import useInventoryStore from "../../../store/inventory/useInventoryStore";
import GridFloor from "../grid/GridFloor";
import PlacedItem from "../PlacedItem";

export default function PlayerSpace() {
  const placedItems = useInventoryStore((state) => state.placedItems);

  return (
    <group>
      <GridFloor />
      {placedItems.map((item) => (
        <PlacedItem
          key={item.instanceId}
          modelUrl={item.modelUrl}
          position={item.position}
        />
      ))}
    </group>
  );
}
