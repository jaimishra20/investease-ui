import { useState } from "react";
import { Search, Bell, User } from "lucide-react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white">
        <div className="text-2xl font-bold">InvestEase</div>
        <div className="flex items-center w-full max-w-xl mx-6">
          <Search className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search stocks..."
            className="w-full p-2 rounded bg-gray-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Bell />
          <User />
        </div>
      </header>

      {/* Index Buttons */}
      <section className="flex justify-around my-6 px-6">
        {["NIFTY 50", "SENSEX", "BANK NIFTY"].map((index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            {index}
          </button>
        ))}
      </section>

      {/* Cap Sections */}
      <section className="grid grid-cols-3 gap-4 px-6">
        {["SMALL", "MID", "LARGE"].map((cap) => (
          <div
            key={cap}
            className="p-4 rounded-lg shadow bg-white hover:bg-gray-100 text-center font-semibold"
          >
            {cap} CAP
          </div>
        ))}
      </section>

      {/* Stock Cards */}
      <section className="px-6 mt-8 grid grid-cols-3 gap-4">
        {["AAPL", "MSFT", "GOOGL"].map((stock) => (
          <div key={stock} className="p-4 rounded-lg shadow bg-white">
            <h3 className="font-bold text-lg">{stock}</h3>
            <p className="text-sm text-gray-500">Visible Stock</p>
          </div>
        ))}
      </section>

      

      {/* Footer */}
      <footer className="mt-12 p-6 text-center text-sm text-gray-400">
        Made with ❤️ by Investease
      </footer>
    </div>
  );
}

export default App;
