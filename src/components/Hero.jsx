import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';


const Hero = () => (
    <section className="bg-gradient-to-br from-blue-200 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Achieve Your Goals<br />
              with <span className="text-blue-600">Personalized</span><br />
              Learning!
            </h1>
            <p class="text-xl text-gray-600 mb-8 w-full max-w-6xl ">
                Experience engaging and effective lessons and courses.
             </p>
            
            <div class="flex items-center mb-8 bg-white border border-gray-300 rounded-full overflow-hidden">
  <div class="relative flex-1">
    <span class="absolute inset-y-0 left-0 flex items-center pl-4">
      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
      </svg>
    </span>
    <input 
      type="text" 
      placeholder="Search for a class"
      class="w-full pl-12 pr-4 py-3 border-0 focus:ring-0 focus:outline-none"
    />
  </div>
  
  <div class="relative flex-1">
    <span class="absolute inset-y-0 left-0 flex items-center pl-4">
      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      </svg>
    </span>
    <select class="w-full pl-12 pr-4 py-3 border-0 focus:ring-0 focus:outline-none appearance-none bg-transparent">
      <option>Class location</option>
    </select>
  </div>
  
  <button class="bg-blue-600 text-white px-6 py-2 m-2 rounded-full hover:bg-blue-700">
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
