import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { FAB } from "./components/ui/buttons/FAB";
import { MenuSlider } from "./components/ui/inventory/MenuSlider";
import { Scene } from "./components/canvas/Scene";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Scene></Scene>
      {/* Your main content */} 

      {/* Inventory UI Components */}
      <MenuSlider />
      <FAB />
    </div>
  );
}

export default App;
