import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPC, setIsPC] = useState(window.innerWidth > 768); // Check if device is PC

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPC) return; // Disable cursor animation on mobile

    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isPC]);

  if (!isPC) return null; // Do not render cursor on mobile

  return (
    <motion.div
      className="cursor fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none"
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{ duration: 0, ease: 'linear' }}
      style={{ position: "fixed", top: 0, left: 0, transform: "translate(-50%, -50%)", zIndex: 9999 }}
    />
  );
};

export default CursorAnimation;
