import React from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  InvestEasy
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Making smart investing accessible to everyone. Discover great companies with future potential through our advanced analysis and insights.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-white text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <span className="text-white text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Market Analysis', 'Stock Screener', 'Portfolio Tracker', 'Investment Guide', 'Research Reports'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Large Cap Stocks', 'Mid Cap Stocks', 'Small Cap Stocks', 'Mutual Funds', 'ETFs'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">support@investeasy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <p className="text-lg font-semibold text-gray-300 mb-2">
                🚀 Companies with great scores & future potential are here
              </p>
              <p className="text-sm text-gray-500">
                Discover your next investment opportunity with our AI-powered analysis
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 InvestEasy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}