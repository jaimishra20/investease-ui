import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import "./index.css";

const indices = [
  { name: "NIFTY 50", symbol: "NIFTY", price: 24510.2 },
  { name: "SENSEX", symbol: "SENSEX", price: 74101.4 },
  { name: "BANK NIFTY", symbol: "BANKNIFTY", price: 52112.7 },
];

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {};
      indices.forEach((index) => {
        const fluctuation = (Math.random() - 0.5) * 100;
        newData[index.symbol] = parseFloat(index.price + fluctuation).toFixed(2);
      });
      setData(newData);
    }, 3000); // Refresh every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-6">📈 Investease Dashboard</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {indices.map((index) => (
          <div
            key={index.symbol}
            className="bg-white p-4 rounded-xl shadow text-center"
          >
            <h2 className="text-lg font-semibold mb-2">{index.name}</h2>
            <p className="text-2xl font-bold text-green-600">
              ₹ {data[index.symbol] || index.price}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Featured Stocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["TCS", "INFY", "RELIANCE"].map((stock) => (
            <div
              key={stock}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{stock}</span>
                <TrendingUp className="text-green-500" size={20} />
              </div>
              <p className="text-gray-700">₹{(Math.random() * 5000).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
