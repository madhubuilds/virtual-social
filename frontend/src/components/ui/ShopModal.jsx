import { Package, ShoppingCart, X } from "lucide-react";
import { useUIStore } from "../../store/ui/useUIStore";
import ShopItem from "./ShopItem";
import { ASSETS } from "../../data/assets";
import useInventoryStore from "../../store/inventory/useInventoryStore";
import ItemGrid from "./ItemGrid";

export default function ShopModal() {
  const { isShopOpen, toggleShop, activeTab, setTab } = useUIStore();
  const { ownedItemIds } = useInventoryStore();
  // Filter items based on ownership
  const inventoryItems = ASSETS.filter((item) =>
    ownedItemIds.includes(item.id),
  );
  const shopItems = ASSETS.filter((item) => !ownedItemIds.includes(item.id));
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isShopOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold text-slate-800">Marketplace</h2>
        <button
          onClick={toggleShop}
          className="p-2 hover:bg-slate-100 rounded-full"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tab Switcher */}
      <div className="flex border-b">
        <button
          onClick={() => setTab("shop")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${activeTab === "shop" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-slate-500"}`}
        >
          <ShoppingCart size={18} /> Shop ({shopItems.length})
        </button>
        <button
          onClick={() => setTab("inventory")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${activeTab === "inventory" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-slate-500"}`}
        >
          <Package size={18} /> Owned ({inventoryItems.length})
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 overflow-y-auto h-[calc(100%-110px)]">
        {activeTab === "shop" ? (
          <ItemGrid items={shopItems} mode="buy" />
        ) : (
          <ItemGrid items={inventoryItems} mode="equip" />
        )}
      </div>
    </div>
  );
}
