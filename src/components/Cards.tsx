import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative px-7 py-6 bg-white dark:bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <div className="flex items-center space-y-4 transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="space-y-2">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
