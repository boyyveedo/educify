import React from 'react';
import {
  CalculatorIcon,
  BeakerIcon,
  BookOpenIcon,
  MapIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  LanguageIcon,
  UserIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const Header = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="https://educify.org/assets/logo-f48d3bfd.webp" alt="Educify Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900">educify</span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">How it works</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
          <a href="#" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Become a tutor</a>
        </nav>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">📞 +1 855 355 5585</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm">USD/EN</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-3 text-sm">
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <CalculatorIcon className="w-4 h-4 mb-1" />
            <span>Math</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <BeakerIcon className="w-4 h-4 mb-1" />
            <span>Science</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
          <BookOpenIcon className="w-4 h-4 mb-1" />            <span>English</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <MapIcon className="w-4 h-4 mb-1" />
            <span>History</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <GlobeAltIcon className="w-4 h-4 mb-1" />
            <span>Geography</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <CurrencyDollarIcon className="w-4 h-4 mb-1" />
            <span>Economics</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <BriefcaseIcon className="w-4 h-4 mb-1" />
            <span>Business</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <CodeBracketIcon className="w-4 h-4 mb-1" />
            <span>Programming</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <LanguageIcon className="w-4 h-4 mb-1" />
            <span>Languages</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
            <UserIcon className="w-4 h-4 mb-1" />
            <span>Psychology</span>
          </a>
          <a href="#" className="bg-blue-600 text-white px-3 py-1 rounded-full flex flex-col items-center">
            <span>Explore all Categories</span>
            <ChevronDownIcon className="w-4 h-4 mt-0.5" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;