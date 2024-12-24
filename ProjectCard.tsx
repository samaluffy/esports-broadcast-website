import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  link?: string;
}

export default function ProjectCard({ title, description, image, stats, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-white" />
          </a>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-semibold text-purple-500">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}