import React from "react";
import { PackageOpen } from "lucide-react";
export const FAB = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-amber-600 w-16 h-16 text-slate-900 rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-slate-900 cursor-pointer">
        <PackageOpen size={34} />
      </button>
    </div>
  );
};
