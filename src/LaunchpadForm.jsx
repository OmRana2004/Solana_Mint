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
    <div
      className="h-screen flex flex-col justify-center items-center p-6 text-white"
      style={{
        backgroundColor: '#0f172a', // Tailwind's bg-slate-900
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <h1 className="text-3xl font-bold mb-6">Solana Token Launchpad</h1>

      <input
        className="w-80 p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
        type="text"
        placeholder="Token Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-80 p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <input
        className="w-80 p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
        type="text"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        className="w-80 p-2 mb-6 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
        type="number"
        placeholder="Initial Supply"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
      />

      <button
        onClick={createToken}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Create Token
      </button>
    </div>
  );
}
