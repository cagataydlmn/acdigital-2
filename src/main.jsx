import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import LiquidEther from "./components/LiquidEther";
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, backgroundColor: '#000000' }}>
      <LiquidEther
        colors={['#00D4FF', '#4DB8FF', '#80D4FF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <RouterProvider router={routes} />
    </div>
  </StrictMode>
);
