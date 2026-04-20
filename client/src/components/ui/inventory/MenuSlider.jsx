import { X, ShoppingBag, UserCheck } from "lucide-react";
import useMenuStore from "../../../store/menu/useMenuStore";
import { modelData } from "../../../data/modelData";

export const MenuSlider = () => {
  const { isOpen, closeMenu, viewMode, setViewMode, ownedItems, purchaseItem } =
    useMenuStore();
  // Determine which data to display
  const displayData = viewMode === "store" ? modelData : ownedItems;
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeMenu}
        />
      )}
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-slate-900 text-slate-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-amber-600 uppercase tracking-tighter">
              Inventory
            </h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-slate-800 rounded-full"
            >
              <X />
            </button>
          </div>

          {/* Toggle Tabs */}
          <div className="flex gap-2 mb-6 bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("store")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === "store" ? "bg-amber-600 text-slate-900" : "hover:bg-slate-700"}`}
            >
              <ShoppingBag size={16} /> Store
            </button>
            <button
              onClick={() => setViewMode("collection")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === "collection" ? "bg-amber-600 text-slate-900" : "hover:bg-slate-700"}`}
            >
              <UserCheck size={16} /> Owned ({ownedItems.length})
            </button>
          </div>

          {/* Asset Grid */}
          <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar">
            {displayData.length > 0 ? (
              displayData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 border border-slate-700 p-2 rounded-2xl group"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3">
                    <img
                      src={item.modelImg}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <p className="text-xs font-bold mb-2 truncate px-1">
                    {item.name}
                  </p>

                  {viewMode === "store" ? (
                    <button
                      onClick={() => purchaseItem(item)}
                      disabled={ownedItems.some((i) => i.name === item.name)}
                      className="w-full py-2 bg-purple-600 disabled:bg-slate-600 disabled:opacity-50 text-[10px] uppercase font-black rounded-lg hover:bg-purple-500 transition-colors"
                    >
                      {ownedItems.some((i) => i.name === item.name)
                        ? "Owned"
                        : "Buy Asset"}
                    </button>
                  ) : (
                    <button className="w-full py-2 bg-emerald-600 text-[10px] uppercase font-black rounded-lg hover:bg-emerald-500">
                      Equip Item
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-20 text-slate-500 italic text-sm">
                No items found here...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
