import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const indices = [
  { name: 'NIFTY 50', value: '19,674.25', change: '+234.50', changePercent: '+1.21%', isPositive: true },
  { name: 'SENSEX', value: '65,953.48', change: '+789.25', changePercent: '+1.21%', isPositive: true },
  { name: 'BANK NIFTY', value: '44,234.75', change: '-123.45', changePercent: '-0.28%', isPositive: false },
  { name: 'NIFTY IT', value: '31,456.80', change: '+456.30', changePercent: '+1.47%', isPositive: true },
];

export default function MarketIndices() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Market Indices</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Live</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {indices.map((index) => (
          <div key={index.name} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800 text-sm">{index.name}</h3>
              {index.isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              )}
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-gray-900">{index.value}</p>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${index.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {index.change}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  index.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {index.changePercent}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}