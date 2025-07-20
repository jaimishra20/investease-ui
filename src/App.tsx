import React from 'react';
import Header from './components/Header';
import MarketIndices from './components/MarketIndices';
import MarketCapCategories from './components/MarketCapCategories';
import InvestmentSections from './components/InvestmentSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <MarketIndices />
        <MarketCapCategories />
        <InvestmentSections />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
