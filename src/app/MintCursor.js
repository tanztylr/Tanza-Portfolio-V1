'use client';
import { useEffect, useState } from 'react';

export default function MintCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // FORCEFULLY hide the default cursor via JavaScript injection
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHasMoved(true);
    };

    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.head.removeChild(style);
    };
  }, []);

  // Don't show anything until the user actually moves their mouse
  if (!hasMoved) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: '14px',
        height: '14px',
        backgroundColor: '#5eead4', // Mint color
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99999,
        boxShadow: '0 0 15px #5eead4, 0 0 30px #5eead4', // Glowing effect
        transition: 'transform 0.05s ease-out',
      }}
    />
  );
}