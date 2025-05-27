import React from 'react';
import { StarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const TutorCard = ({ name, rating, reviews, hourlyRate, subject, avatar, location }) => (
  <div className="bg-white-600 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
    <div className="relative mb-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-full h-48 object-cover rounded-t-2xl" 
      />
      <div className="absolute bottom-1 left-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
        1st lesson free
      </div>
    </div>

    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <CheckCircleIcon className="w-5 h-5 text-green-500" />
      </div>
      <span className="font-semibold text-gray-900">${hourlyRate}/h</span>
    </div>

    <div className="text-sm text-gray-600 flex items-center space-x-2 flex-nowrap">
      <span className="text-blue-600 whitespace-nowrap">{subject}</span>
      <div className="flex items-center whitespace-nowrap">
        <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
        <span className="whitespace-nowrap">{rating} ({reviews} reviews)</span>
      </div>
    </div>

    <div className="text-sm text-gray-600 mt-1">
      <span className="text-blue-600">{location}</span>
    </div>
  </div>
);

const Tutor = () => {
  const tutors = [
    {
      name: "Devon Lane",
      rating: "4.8",
      reviews: "3.3k",
      hourlyRate: "14",
      subject: "Math Tutor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "Online, Nigeria",
    },
    {
      name: "Guy Hawkins",
      rating: "4.8",
      reviews: "3.3k",
      hourlyRate: "14",
      subject: "Math Tutor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Online, Nigeria",
    },
    {
      name: "Devon Lane",
      rating: "4.8",
      reviews: "3.3k",
      hourlyRate: "14",
      subject: "Math Tutor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "Online, Nigeria",
    },
    {
      name: "Guy Hawkins",
      rating: "4.8",
      reviews: "3.3k",
      hourlyRate: "14",
      subject: "Math Tutor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Online, Nigeria",
    },
    {
      name: "Guy Hawkins", 
      rating: "4.8",
      reviews: "3.3k",
      hourlyRate: "14",
      subject: "Math Tutor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Online, Nigeria",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet 2k+ Tutors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>
        <div className="text-center pt-[60px]">
          <button className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-12 py-3 rounded-full hover:from-pink-600 hover:to-blue-700">
            Book a free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutor;