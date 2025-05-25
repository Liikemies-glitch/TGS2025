import React from 'react'

interface PoorUIIllustrationProps {
  className?: string
}

export function PoorUIIllustration({ className = "w-full h-full" }: PoorUIIllustrationProps) {
  return (
    <svg viewBox="0 0 400 400" className={className}>
      {/* Broken/misaligned UI elements */}
      {/* Header bar - crooked */}
      <rect x="20" y="30" width="360" height="50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" transform="rotate(-2 200 55)" />
      <circle cx="50" cy="55" r="6" fill="#cbd5e1" />
      <circle cx="75" cy="55" r="6" fill="#94a3b8" />
      <circle cx="100" cy="55" r="6" fill="#64748b" />
      
      {/* Navigation - misaligned */}
      <rect x="30" y="100" width="80" height="35" fill="#94a3b8" rx="4" transform="rotate(1 70 117)" />
      <text x="70" y="120" textAnchor="middle" className="fill-white text-sm font-medium">Home</text>
      
      <rect x="130" y="95" width="80" height="35" fill="#64748b" rx="4" transform="rotate(-1 170 112)" />
      <text x="170" y="115" textAnchor="middle" className="fill-white text-sm font-medium">About</text>
      
      <rect x="230" y="105" width="80" height="35" fill="#475569" rx="4" transform="rotate(2 270 122)" />
      <text x="270" y="125" textAnchor="middle" className="fill-white text-sm font-medium">Contact</text>
      
      {/* Content boxes - different sizes and misaligned */}
      <rect x="20" y="160" width="150" height="100" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
      <text x="95" y="185" textAnchor="middle" className="fill-gray-500 text-xs">Broken Layout</text>
      
      <rect x="200" y="170" width="120" height="80" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" transform="rotate(-1 260 210)" />
      <text x="260" y="195" textAnchor="middle" className="fill-gray-500 text-xs">Bad Spacing</text>
      
      <rect x="340" y="150" width="80" height="120" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" transform="rotate(3 380 210)" />
      <text x="380" y="175" textAnchor="middle" className="fill-gray-500 text-xs">Wrong Size</text>
      
      {/* Buttons - inconsistent styles */}
      <rect x="30" y="300" width="100" height="40" fill="#64748b" rx="20" />
      <text x="80" y="323" textAnchor="middle" className="fill-white text-sm">Click Me!</text>
      
      <rect x="150" y="305" width="90" height="30" fill="#94a3b8" rx="4" />
      <text x="195" y="323" textAnchor="middle" className="fill-white text-xs">Button</text>
      
      <rect x="260" y="295" width="110" height="50" fill="#475569" rx="8" />
      <text x="315" y="323" textAnchor="middle" className="fill-white text-sm">Submit</text>
      
      {/* Error symbols - more subtle */}
      <text x="180" y="40" className="fill-slate-400 text-xl">⚠</text>
      <text x="350" y="130" className="fill-slate-400 text-lg">✕</text>
      <text x="50" y="280" className="fill-slate-400 text-lg">⚙</text>
    </svg>
  )
} 