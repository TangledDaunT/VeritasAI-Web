import React from 'react';

export default function Skeleton({ className = '', style = {}, height = '1rem', rounded = '8px' }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ height, borderRadius: rounded, ...style }}
      aria-hidden
    />
  );
}
