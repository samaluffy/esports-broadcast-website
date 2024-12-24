import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'League Championships 2023',
    description: 'Full tournament coverage with multi-language commentary and instant replays.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Peak Viewers', value: '250K' },
      { label: 'Hours Streamed', value: '48+' },
    ],
    link: '#',
  },
  {
    title: 'Regional Finals',
    description: 'Professional broadcast of the regional qualifiers with player cams and analysis desk.',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Total Views', value: '1.2M' },
      { label: 'Teams', value: '16' },
    ],
    link: '#',
  },
  {
    title: 'Pro Series Finals',
    description: 'High-stakes matches with real-time statistics and expert commentary.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Prize Pool', value: '$50K' },
      { label: 'Matches', value: '32' },
    ],
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our most successful broadcasts and events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}