import { TokenLaunchpad } from "./components/TokenLaunchpad"

   // Wallet Adaper Imports
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
import "@solana/wallet-adapter-react-ui/styles.css"

function App() {
    const wallets = useMemo(() => [], []); // No wallet adapter defined explicitly

    return (
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div 
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 20,
                    }}>
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                    </div>
                    <TokenLaunchpad />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default App;