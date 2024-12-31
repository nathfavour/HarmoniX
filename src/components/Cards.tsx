import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
