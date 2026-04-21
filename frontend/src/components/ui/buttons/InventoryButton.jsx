import { Package } from "lucide-react";

export default function InventoryButton() {
  return (
    <button
      className="fixed bottom-6 right-24 z-40 bg-white text-slate-800 p-4 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-all"
      onClick={() => alert("Opening Owned Items...")}
    >
      <Package size={28} />
    </button>
  );
}
