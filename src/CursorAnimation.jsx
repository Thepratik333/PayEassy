import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <motion.div
    className='cursor'
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{ duration: 0, ease: 'linear' }}
    />
  );
};

export default CursorAnimation;
