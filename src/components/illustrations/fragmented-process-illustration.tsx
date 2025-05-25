import React from 'react'

interface FragmentedProcessIllustrationProps {
  className?: string
}

export function FragmentedProcessIllustration({ className = "w-full h-full" }: FragmentedProcessIllustrationProps) {
  return (
    <svg viewBox="0 0 400 400" className={className}>
      {/* Multiple disconnected design systems */}
      
      {/* Design System A - Modern */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="100" height="80" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
        <text x="50" y="15" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Design A</text>
        <rect x="10" y="25" width="80" height="8" fill="#94a3b8" rx="4" />
        <rect x="10" y="40" width="60" height="8" fill="#e2e8f0" rx="4" />
        <circle cx="20" cy="60" r="4" fill="#64748b" />
        <circle cx="35" cy="60" r="4" fill="#94a3b8" />
      </g>
      
      {/* Design System B - Old */}
      <g transform="translate(280, 40)">
        <rect x="0" y="0" width="100" height="80" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" rx="4" />
        <text x="50" y="15" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Design B</text>
        <rect x="10" y="25" width="80" height="10" fill="#64748b" />
        <rect x="10" y="45" width="50" height="10" fill="#94a3b8" />
        <rect x="10" y="65" width="30" height="6" fill="#cbd5e1" />
      </g>
      
      {/* Design System C - Inconsistent */}
      <g transform="translate(150, 150)">
        <rect x="0" y="0" width="100" height="80" fill="#f8fafc" stroke="#64748b" strokeWidth="1" rx="8" strokeDasharray="3,3" />
        <text x="50" y="15" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Design C</text>
        <rect x="10" y="25" width="80" height="6" fill="#475569" rx="3" />
        <rect x="10" y="38" width="40" height="8" fill="#64748b" rx="4" />
        <polygon points="15,55 25,65 35,55" fill="#94a3b8" />
      </g>
      
      {/* Broken connections */}
      <g stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="4,4">
        <path d="M120 60 L150 190" />
        <path d="M250 190 L280 80" />
        <path d="M70 100 L330 120" />
      </g>
      
      {/* Conflict indicators - more subtle */}
      <text x="200" y="120" textAnchor="middle" className="fill-slate-400 text-2xl">⚡</text>
      <text x="150" y="80" textAnchor="middle" className="fill-slate-400 text-lg">✕</text>
      <text x="250" y="160" textAnchor="middle" className="fill-slate-400 text-lg">⚠</text>
      
      {/* Scattered tools */}
      <g transform="translate(50, 280)">
        <rect x="0" y="0" width="60" height="35" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" rx="4" />
        <text x="30" y="22" textAnchor="middle" className="fill-slate-600 text-xs">Tool 1</text>
      </g>
      
      <g transform="translate(170, 300)">
        <rect x="0" y="0" width="60" height="35" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" rx="4" />
        <text x="30" y="22" textAnchor="middle" className="fill-slate-600 text-xs">Tool 2</text>
      </g>
      
      <g transform="translate(290, 290)">
        <rect x="0" y="0" width="60" height="35" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" rx="4" />
        <text x="30" y="22" textAnchor="middle" className="fill-slate-600 text-xs">Tool 3</text>
      </g>
      
      {/* Question marks indicating confusion */}
      <text x="80" y="200" className="fill-slate-300 text-3xl">?</text>
      <text x="320" y="200" className="fill-slate-300 text-3xl">?</text>
    </svg>
  )
} 