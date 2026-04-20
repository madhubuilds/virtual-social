import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { FAB } from "./components/ui/buttons/FAB";
import { MenuSlider } from "./components/ui/inventory/MenuSlider";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Your main content */}
      <h1 className="p-10 text-3xl font-bold">Main Dashboard</h1>

      {/* Inventory UI Components */}
      <MenuSlider />
      <FAB />
    </div>
  );
}

export default App;
