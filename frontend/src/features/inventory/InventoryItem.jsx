export function InventoryItem({ asset, owned, onBuy }) {
  return (
    <div className="bg-slate-800 rounded-xl p-3 flex flex-col gap-2">
      <img
        src={asset.thumbnail}
        alt={asset.name}
        className="rounded-lg h-24 object-cover"
      />

      <div className="text-sm font-bold">{asset.name}</div>

      {owned ? (
        <div className="text-xs text-emerald-400 font-semibold">Owned</div>
      ) : (
        <button
          onClick={() => onBuy(asset)}
          className="bg-amber-500 text-black text-xs font-bold py-2 rounded-lg"
        >
          Buy · {asset.price}
        </button>
      )}
    </div>
  );
}
