import React from 'react';
import TeamMember from './TeamMember';
import { Trophy, Users, Tv } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '50+', label: 'Tournaments Broadcasted' },
  { icon: Users, value: '1M+', label: 'Viewers Reached' },
  { icon: Tv, value: '5+', label: 'Years Experience' },
];

const team = [
  { name: 'Alex Chen', role: 'Lead Producer', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80' },
  { name: 'Sarah Kim', role: 'Technical Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80' },
  { name: 'Mike Johnson', role: 'Lead Commentator', image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're passionate about bringing esports to life through professional broadcasting.
            Our team combines technical expertise with deep gaming knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Meet Our Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}