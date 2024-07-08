import React from 'react';

const Ghost: React.FC<{ position: { x: number, y: number }, type: number }> = ({ position, type }) => {
  return (
    <div
      className="ghost"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        background: `url(/images/ghost${type}.png) no-repeat center center`,
        backgroundSize: 'contain'
      }}
    ></div>
  );
};

export default Ghost;
