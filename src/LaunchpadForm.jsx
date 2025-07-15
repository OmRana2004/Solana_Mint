export function LaunchpadForm({
  name,
  setName,
  symbol,
  setSymbol,
  imageUrl,
  setImageUrl,
  initialSupply,
  setInitialSupply,
  createToken,
}) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6"> Solana Token Launchpad</h1>

      <input
        className="w-80 p-2 mb-4 border border-gray-300 rounded"
        type="text"
        placeholder="Token Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-80 p-2 mb-4 border border-gray-300 rounded"
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <input
        className="w-80 p-2 mb-4 border border-gray-300 rounded"
        type="text"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        className="w-80 p-2 mb-6 border border-gray-300 rounded"
        type="number"
        placeholder="Initial Supply"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
      />

      <button
        onClick={createToken}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Create Token
      </button>
    </div>
  );
}
