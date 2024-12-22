import React, { useState, useEffect } from 'react';

const messages = [
  'Loading website content...',
  'Preparing your experience...',
  'Setting up secure connection...',
  'Almost ready...'
];

export function LoadingMessage() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-gray-600 mt-8 animate-fade-in">
      {messages[messageIndex]}
    </p>
  );
}