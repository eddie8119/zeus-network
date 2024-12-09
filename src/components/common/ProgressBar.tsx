import React from 'react';

interface ProgressBarProps {
  progress: number;
  width?: string;
  height?: string;
  className?: string;
  barClassName?: string;
  active?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width,
  height = '8px',
  className = '',
  barClassName = 'gradient-primary-color',
  active = true,
}) => {
  return (
    <div
      className={`progress-bar-container overflow-hidden rounded-full ${className}`}
      style={{ width, height }}
    >
      <div
        className={`${active ? barClassName : 'bg-text-light opacity-50'} h-full rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
