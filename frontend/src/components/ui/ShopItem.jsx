import useInventoryStore from "../../store/inventory/useInventoryStore";

export default function ShopItem({ item, mode }) {
  const { buyItem, equipItem } = useInventoryStore();

  return (
    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 flex flex-col">
      <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden border border-slate-100">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>

      <p className="text-xs font-bold text-slate-800 mb-3 truncate">
        {item.name}
      </p>

      {mode === "buy" ? (
        <button
          onClick={() => buyItem(item.id)}
          className="w-full bg-indigo-600 text-white text-[10px] uppercase tracking-wider font-bold py-2 rounded-lg"
        >
          Buy Now
        </button>
      ) : (
        <button
          onClick={() => equipItem(item.id)}
          className="w-full bg-emerald-500 text-white text-[10px] uppercase tracking-wider font-bold py-2 rounded-lg"
        >
          Place in Space
        </button>
      )}
    </div>
  );
}
