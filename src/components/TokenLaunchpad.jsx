import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { 
    createInitializeMint2Instruction,
    getMinimumBalanceForRentExemptMint,
    MINT_SIZE,
    TOKEN_PROGRAM_ID, 
} from "@solana/spl-token";
import {
    Keypair,
    SystemProgram,
    Transaction,
} from "@solana/web3.js"
import { LaunchpadForm } from "../LaunchpadForm";

export function TokenLaunchpad() {
    const wallet = useWallet();
    const { connection } = useConnection();

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [initialSupply, setInitialSupply] = useState ("");

    async function createToken() {
        if (!wallet.connected) {
            alert(" Please Connect your Wallet ")
            return;
        }
        
        try {
            const lamports = await getMinimumBalanceForRentExemptMint(connection);
            const mintKeypair = Keypair.generate();

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(
                mintKeypair.publicKey,
                6,
                wallet.publicKey,
                null,
                TOKEN_PROGRAM_ID
            )
         );

         const { blockhash } = await connection.getLatestBlockhash();
         transaction.recentBlockhash = blockhash;
         transaction.feePayer = wallet.publicKey;
         transaction.partialSign(mintKeypair);

         const signature = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, "confirmed");

            alert (`Token Created!\nMint Address:\n${mintKeypair.publicKey.toBase58()}`);
        } catch (error) {
            console.error("Error creating token", error);
            alert("Something went wrong.");
        }
    }

    return (
         <LaunchpadForm
      name={name}
      setName={setName}
      symbol={symbol}
      setSymbol={setSymbol}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      initialSupply={initialSupply}
      setInitialSupply={setInitialSupply}
      createToken={createToken}
    />
    )
}

export default TokenLaunchpad;