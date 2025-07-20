import React from 'react';
import { Building2, TrendingUp, Zap } from 'lucide-react';

const categories = [
  {
    name: 'LARGE CAP',
    description: 'Stable & Established',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    stats: { companies: '100+', avgReturn: '12.5%' }
  },
  {
    name: 'MID CAP',
    description: 'Growth Potential',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    stats: { companies: '250+', avgReturn: '15.8%' }
  },
  {
    name: 'SMALL CAP',
    description: 'High Growth',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    stats: { companies: '500+', avgReturn: '18.2%' }
  }
];

export default function MarketCapCategories() {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore by Market Cap</h2>
        <p className="text-gray-600">Choose your investment style based on company size and growth potential</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.name}
              className={`${category.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100`}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className={`text-sm ${category.textColor} font-medium mb-4`}>{category.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Companies:</span>
                    <span className="font-semibold text-gray-800">{category.stats.companies}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg Return:</span>
                    <span className="font-semibold text-green-600">{category.stats.avgReturn}</span>
                  </div>
                </div>
                
                <button className={`mt-4 w-full py-2 px-4 bg-gradient-to-r ${category.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}>
                  Explore {category.name}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}