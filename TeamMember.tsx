import React from 'react';
import { User2 } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <User2 className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}