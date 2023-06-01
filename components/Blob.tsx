"use client";

import { useEffect, useState } from 'react';

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-96 h-98 bg-gradient-to-br from-gray-500 via-purple-500 to-blue-500 rounded-full opacity-20 pointer-events-none blur-xl"
      style={{
        left:  -98*2 + 'px',
        top: -98*2 + 'px',
        transform: `translate(${position.x}px, ${position.y}px) scale(2)`,}}
    ></div>
  );
};

export default Blob;
