import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';


const Hero = () => (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Achieve Your Goals<br />
              with <span className="text-blue-600">Personalized</span><br />
              Learning!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience engaging and effective lessons and courses.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Search for a class"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Class location</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                Search
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-green-600 font-semibold">Excellent</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-green-500 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-gray-600">4.8 reviews on</span>
              <span className="font-semibold">Trustpilot</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop" alt="Students learning" className="rounded-lg" />
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" alt="Online tutoring" className="rounded-lg" />
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" alt="Study materials" className="rounded-lg" />
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" alt="Learning environment" className="rounded-lg" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Join 500,000+ students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
export default Hero
