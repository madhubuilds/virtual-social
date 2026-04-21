import { ASSETS } from "../../data/assets";
import { InventoryItem } from "./InventoryItem";
import { useInventoryLogic } from "./useInventoryLogic";

export function InventoryPanel() {
  const { coins, owned, buyAsset } = useInventoryLogic();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 rounded-t-2xl p-4">
      <div className="flex justify-between mb-3">
        <div className="font-bold">Inventory</div>
        <div className="text-amber-400 font-bold">
          💰 {coins === 0 ? 0 : coins}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {ASSETS.map((asset) => (
          <InventoryItem
            key={asset.id}
            asset={asset}
            owned={owned.some((o) => o.id === asset.id)}
            onBuy={buyAsset}
          />
        ))}
      </div>
    </div>
  );
}
