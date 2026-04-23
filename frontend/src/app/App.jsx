import ActionButton from "../components/ui/buttons/ActionButton";
import ShopModal from "../components/ui/ShopModal";
import { WorldCanvas } from "../components/world/WorldCanvas";
import { InventoryPanel } from "../features/inventory/InventoryPanel";
import { World } from "../features/world/World";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <LandingPage />
      {/* <WorldCanvas />
      <ActionButton />
      <ShopModal /> */}
      {/* <InventoryPanel /> */}
    </div>
  );
}
