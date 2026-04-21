import ShopItem from "./ShopItem";

export default function ItemGrid({ items, mode }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-400">
        <p>No items found here.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <ShopItem key={item.id} item={item} mode={mode} />
      ))}
    </div>
  );
}