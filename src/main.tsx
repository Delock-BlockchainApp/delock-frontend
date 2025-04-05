import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { BlockchainProvider } from "./context/BlockchainContext"; // Import the provider
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <RecoilRoot>
     <Router>
    <BlockchainProvider> {/* Wrap the provider at the top level */}
        <App />
    </BlockchainProvider>
    </Router>
    </RecoilRoot>
  </StrictMode>
);
