import React from 'react';

interface ProgressBarProps {
  progress: number;
  width?: string;
  height?: string;
  className?: string;
  active?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width,
  height = '8px',
  className = '',
  active = true,
}) => {
  return (
    <div
      className={`progress-bar-container overflow-hidden rounded-full ${className}`}
      style={{ width, height }}
    >
      <div
        className={`${active ? 'gradient-primary-color' : 'bg-text-light opacity-50'} h-full rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
