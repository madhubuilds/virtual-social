import { ShoppingBag } from "lucide-react";
import { useUIStore } from "../../../store/ui/useUIStore";

export default function ActionButton() {
  const toggleShop = useUIStore((state) => state.toggleShop);
  return (
    <button
      onClick={toggleShop}
      className="fixed bottom-6 right-6 z-40 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all"
    >
      <ShoppingBag size={28} />
    </button>
  );
}
