import { X } from "lucide-react";
import useMenuStore from "../../../store/menu/useMenuStore";
import { modelData } from "../../../data/modelData";

export const MenuSlider = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const closeMenu = useMenuStore((state) => state.closeMenu);
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
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-slate-900 py-2 z-10">
            <h2 className="text-xl font-bold text-amber-600 uppercase tracking-wider">
              Inventory
            </h2>
            <button
              onClick={closeMenu}
              className="hover:rotate-90 transition-transform p-1 bg-slate-800 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {modelData.map((item, index) => (
              <div
                key={index}
                className="group border border-slate-700 p-2 rounded-xl bg-slate-800/50"
              >
                <div className="overflow-hidden rounded-lg aspect-square mb-3">
                  <img
                    src={item.modelImg}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-sm truncate mb-2">
                  {item.name}
                </h3>
                <button className="w-full bg-purple-600 hover:bg-purple-500 py-1.5 rounded text-xs font-bold">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
