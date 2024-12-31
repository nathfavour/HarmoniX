import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function PrimaryButton({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  );
}
