import React, { useState, useEffect } from 'react';
import Pacman from './components/Pacman';
import Ghost from './components/Ghost';
import './App.css';

const App: React.FC = () => {
  const [pacmanPosition, setPacmanPosition] = useState({ x: 40, y: 40 });
  const [ghostPositions, setGhostPositions] = useState(Array.from({ length: 10 }, (_, index) => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    type: 1,
  })));
  const [score, setScore] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    const { x, y } = pacmanPosition;
    switch (e.key) {
      case 'ArrowUp':
        setPacmanPosition({ x, y: y - 20 });
        break;
      case 'ArrowDown':
        setPacmanPosition({ x, y: y + 20 });
        break;
      case 'ArrowLeft':
        setPacmanPosition({ x: x - 20, y });
        break;
      case 'ArrowRight':
        setPacmanPosition({ x: x + 20, y });
        break;
    }
  };

  useEffect(() => {
    const checkCollision = () => {
      ghostPositions.forEach((ghost, index) => {
        if (Math.abs(ghost.x - pacmanPosition.x) < 20 && Math.abs(ghost.y - pacmanPosition.y) < 20) {
          setGhostPositions((prev) => prev.filter((_, i) => i !== index));
          setScore((prev) => prev + 10);
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    checkCollision();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pacmanPosition, ghostPositions]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Pacman position={pacmanPosition} />
      {ghostPositions.map((ghost, index) => (
        <Ghost key={index} position={{ x: ghost.x, y: ghost.y }} type={ghost.type} />
      ))}
      <div className="absolute top-4 left-4 text-white text-2xl">Score: {score}</div>
    </div>
  );
};

export default App;
