import React from 'react';

const Pacman: React.FC<{ position: { x: number, y: number } }> = ({ position }) => {
  return (
    <div
      className="pacman"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`
      }}
    ></div>
  );
};

export default Pacman;
