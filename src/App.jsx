import { Buffer } from "buffer"; // ✅ keep at the top
import { TokenLaunchpad } from "./components/TokenLaunchpad";

// Wallet Adapter Imports
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";

// Set Buffer globally AFTER imports
window.Buffer = Buffer;

function App() {
  const wallets = useMemo(() => [], []); // No wallet adapter defined explicitly

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div
            className="min-h-screen text-white"
            style={{
              backgroundColor: "#0f172a",
              backgroundImage:
                "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          >
            {/* Wallet Button Bar */}
            <header className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-md">
              <h1 className="text-xl font-semibold text-cyan-400">
                 Solana_Mint
              </h1>
              <div className="flex gap-2">
                <WalletMultiButton className="!bg-cyan-600 hover:!bg-cyan-700 transition" />
                <WalletDisconnectButton className="!bg-red-600 hover:!bg-red-700 transition" />
              </div>
            </header>

            {/* Token Launchpad Form */}
            <main className="flex justify-center items-center py-12 px-4">
              <TokenLaunchpad />
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
