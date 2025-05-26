import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'; 

const TestimonialCard = ({ name, role, content, avatar, rating }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex items-center mb-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 text-sm">{content}</p>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      name: "Robert Fox",
      role: "Student",
      rating: 5,
      content: "Outstanding tutoring program! I've learned more in 3 months than I did in 2 years of regular classes.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Theresa Webb",
      role: "Parent",
      rating: 5,
      content: "My daughter's confidence and performance improved dramatically after joining this program.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e27c2b?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Theresa Webb",
      role: "Student",
      rating: 5,
      content: "The tutors are amazing and really understand how to make complex topics simple.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Theresa Webb",
      role: "Parent",
      rating: 5,
      content: "Flexible scheduling and personalized attention make this program perfect for busy families.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What our students say</h2>
          <p className="text-gray-400">Superb Learning, absolutely! Have today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
