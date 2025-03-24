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
    <BlockchainProvider> {/* Wrap the provider at the top level */}
      <Router>
        <App />
      </Router>
    </BlockchainProvider>
    </RecoilRoot>
  </StrictMode>
);
