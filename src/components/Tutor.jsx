import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'; // <- Add this line

const TutorCard = ({ name, rating, hourlyRate, subject, avatar, flag }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
      <div className="ml-4 flex-1">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center">
          <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
          <span className="text-sm text-gray-400 ml-2">{flag}</span>
        </div>
      </div>
    </div>

    <div className="text-sm text-gray-600 mb-4">
      <div className="flex justify-between mb-2">
        <span>Start from</span>
        <span className="font-semibold">${hourlyRate}/h</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Next hour</span>
        <span>4.5 (5k reviews)</span>
      </div>
      <div className="text-blue-600 text-xs">Online Reports</div>
    </div>

    <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">
      {subject}
    </div>
  </div>
);

const Tutor = () => {
  const tutors = [
    {
      name: "Devani Lewis",
      rating: "5 (4/5)",
      hourlyRate: "25",
      subject: "Mathematics",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e27c2b?w=150&h=150&fit=crop&crop=face",
      flag: "🇺🇸"
    },
    {
      name: "Jessica Cooper",
      rating: "5 (4/5)",
      hourlyRate: "30",
      subject: "Chemistry",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      flag: "🇬🇧"
    },
    {
      name: "Ronald Richards",
      rating: "5 (4/5)",
      hourlyRate: "28",
      subject: "Mathematics",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      flag: "🇺🇸"
    },
    {
      name: "Savannah Nguyen",
      rating: "5 (4/5)",
      hourlyRate: "35",
      subject: "Biology",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      flag: "🇨🇦"
    },
    {
      name: "Guy Hawkins",
      rating: "5 (4/5)",
      hourlyRate: "32",
      subject: "Chemistry",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      flag: "🇺🇸"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet 2k+ Tutors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-pink-600 hover:to-blue-700">
            Book a free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutor;
