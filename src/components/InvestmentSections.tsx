import React from 'react';
import { Eye, Lock, Star, TrendingUp, Shield, Zap } from 'lucide-react';

const freeStocks = [
  { name: 'Reliance Industries', symbol: 'RELIANCE', price: '₹2,456', change: '+2.3%', score: 8.5, sector: 'Energy' },
  { name: 'TCS', symbol: 'TCS', price: '₹3,234', change: '+1.8%', score: 9.2, sector: 'IT' },
  { name: 'HDFC Bank', symbol: 'HDFCBANK', price: '₹1,567', change: '+0.9%', score: 8.8, sector: 'Banking' }
];

const premiumStocks = [
  { name: 'Hidden Gem #1', sector: 'Technology', potentialReturn: '25-30%' },
  { name: 'Hidden Gem #2', sector: 'Healthcare', potentialReturn: '20-25%' },
  { name: 'Hidden Gem #3', sector: 'Green Energy', potentialReturn: '30-35%' }
];

export default function InvestmentSections() {
  return (
    <div className="grid grid-cols-2 gap-8 mb-8">
      {/* Free Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-xl">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Free Insights</h3>
              <p className="text-sm text-gray-600">Top performing stocks with analysis</p>
            </div>
          </div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            FREE
          </span>
        </div>

        <div className="space-y-4">
          {freeStocks.map((stock) => (
            <div key={stock.symbol} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800">{stock.name}</h4>
                  <p className="text-sm text-gray-500">{stock.symbol} • {stock.sector}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{stock.price}</p>
                  <p className="text-sm text-green-600">{stock.change}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Score: {stock.score}/10</span>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-purple-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Premium Insights</h3>
              <p className="text-sm text-gray-600">Exclusive high-potential opportunities</p>
            </div>
          </div>
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            PREMIUM
          </span>
        </div>

        <div className="space-y-4">
          {premiumStocks.map((stock, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">#{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{stock.name}</h4>
                    <p className="text-sm text-gray-600">{stock.sector}</p>
                  </div>
                </div>
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    Potential: {stock.potentialReturn}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <Zap className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
          
          <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
            Unlock Premium Features - ₹999/month
          </button>
        </div>
      </div>
    </div>
  );
}