import React from 'react'
import {
  UserGroupIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  StarIcon,
  AcademicCapIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/solid';

const iconMap = {
  Users: UserGroupIcon,
  Target: AcademicCapIcon,
  Zap: BoltIcon,
  TrendingUp: ArrowTrendingUpIcon,
  Shield: ShieldCheckIcon,
  BookOpen: BookOpenIcon,
  Award: CheckBadgeIcon,
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6">
    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Feature = () => {
  const features = [
    {
      icon: 'Users',
      title: "Struggle with studying method",
      description: "Our expert tutors personalize your lessons to match how you think and grow."
    },
    {
      icon: 'Target',
      title: "Face Challenges Finding High-Quality Tutors",
      description: "Our personalised tutoring solutions address your specific on- and offline learning needs."
    },
    {
      icon: 'Zap',
      title: "Face Academic pressure",
      description: "Say hi from to pressure-based learning culture so fresh that will help you."
    },
    {
      icon: 'TrendingUp',
      title: "Struggle with complex concepts",
      description: "Our expert subject tutors focus on your growth and not failure grade."
    },
    {
      icon: 'Shield',
      title: "Avoid Expensive Education",
      description: "Instant access to affordable tutoring online."
    },
    {
      icon: 'BookOpen',
      title: "Struggle to balance sports training and academics",
      description: "With flexible scheduling, you'll never have to choose between success."
    },
    {
      icon: 'Award',
      title: "Seek Talented tutoring for your child's learning challenges",
      description: "Based on experienced tutors for your child's success. Every year."
    },
    {
      icon: 'Users',
      title: "Are Unsatisfied with tutoring programs",
      description: "Learning from tutors teaches to meet your needs customized program."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who is Educify For?
          </h2>
          <p className="text-gray-600">Educify is for you if you:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
