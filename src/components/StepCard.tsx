import React from "react";

interface StepCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  image,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`text-center group hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <div className="w-20 h-20 bg-purple-700/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-700/20 group-hover:shadow-lg transition-shadow duration-300 border-1 border-purple-400/50 dark:border-purple-600/50 ">
        <img src={image} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-lg font-semibold theme-text-primary mb-2 theme-text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="theme-text-secondary transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
