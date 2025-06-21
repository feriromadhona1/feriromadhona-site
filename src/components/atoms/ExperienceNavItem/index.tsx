import React from "react";

type ExperienceNavItemProps = {
  company: string;
  isActive: boolean;
  onClick: () => void;
};

const ExperienceNavItem = ({ company, isActive, onClick }: ExperienceNavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center py-3 text-left transition-all cursor-pointer ${
        isActive ? 'text-sky-500 font-bold' : 'text-gray-500'
      } hover:text-black focus-visible:text-white`}
    >
      <span
        className={`nav-indicator mr-4 h-px w-8 transition-all ${
          isActive ? 'bg-sky-500 w-16' : 'bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
        }`}
      ></span>
      <span className="text-xs uppercase tracking-widest">{company}</span>
    </button>
  );
};

export default ExperienceNavItem;