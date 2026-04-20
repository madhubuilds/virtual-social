import { useState } from "react";
import { PackageOpen, X } from "lucide-react"; 
import useMenuStore from "../../../store/menu/useMenuStore";

export const FAB = () => {
 const isOpen = useMenuStore((state) => state.isOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  return (
 <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMenu}
        className="bg-amber-600 w-16 h-16 text-slate-900 rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-slate-900 cursor-pointer"
      >
        {isOpen ? <X size={34} /> : <PackageOpen size={34} />}
      </button>
    </div>
  );
};
