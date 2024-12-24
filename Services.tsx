import React from 'react';
import { Tv2, Video, Mic2, Film } from 'lucide-react';

const services = [
  {
    title: 'Live Streaming',
    description: 'Professional live streaming services with high-quality production value and minimal latency.',
    icon: Tv2,
  },
  {
    title: 'Tournament Coverage',
    description: 'Complete tournament coverage including player cams, instant replays, and dynamic overlays.',
    icon: Video,
  },
  {
    title: 'Commentary & Analysis',
    description: 'Expert commentary and analysis from experienced esports casters and analysts.',
    icon: Mic2,
  },
  {
    title: 'Content Creation',
    description: 'High-quality video production and editing for highlights, recaps, and promotional content.',
    icon: Film,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive broadcasting solutions for all your esports needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}