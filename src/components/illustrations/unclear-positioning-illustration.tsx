import React from 'react'

interface UnclearPositioningIllustrationProps {
  className?: string
}

export function UnclearPositioningIllustration({ className = "w-full h-full" }: UnclearPositioningIllustrationProps) {
  return (
    <svg viewBox="0 0 400 400" className={className}>
      {/* Confused messaging and scattered elements */}
      
      {/* Multiple competing B2B SaaS messages */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="120" height="60" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" />
        <text x="60" y="18" textAnchor="middle" className="fill-slate-600 text-xs font-medium">AI-Powered</text>
        <text x="60" y="32" textAnchor="middle" className="fill-slate-500 text-xs">Enterprise Ready</text>
        <text x="60" y="46" textAnchor="middle" className="fill-slate-500 text-xs">All-in-One Platform</text>
      </g>
      
      <g transform="translate(260, 40)">
        <rect x="0" y="0" width="120" height="60" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" rx="8" />
        <text x="60" y="18" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Next-Gen Solution</text>
        <text x="60" y="32" textAnchor="middle" className="fill-slate-500 text-xs">Revolutionary</text>
        <text x="60" y="46" textAnchor="middle" className="fill-slate-500 text-xs">Game Changer</text>
      </g>
      
      <g transform="translate(140, 120)">
        <rect x="0" y="0" width="120" height="60" fill="#f8fafc" stroke="#64748b" strokeWidth="1" rx="8" />
        <text x="60" y="18" textAnchor="middle" className="fill-slate-600 text-xs font-medium">Simple & Powerful</text>
        <text x="60" y="32" textAnchor="middle" className="fill-slate-500 text-xs">Easy to Use</text>
        <text x="60" y="46" textAnchor="middle" className="fill-slate-500 text-xs">No Code Required</text>
      </g>
      
      {/* Scattered B2B target audiences */}
      <circle cx="80" cy="220" r="24" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="80" y="218" textAnchor="middle" className="fill-slate-600 text-xs">SMBs</text>
      <text x="80" y="230" textAnchor="middle" className="fill-slate-500 text-xs">50-200</text>
      
      <circle cx="200" cy="200" r="24" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
      <text x="200" y="198" textAnchor="middle" className="fill-slate-600 text-xs">Enterprise</text>
      <text x="200" y="210" textAnchor="middle" className="fill-slate-500 text-xs">1000+</text>
      
      <circle cx="320" cy="230" r="24" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
      <text x="320" y="228" textAnchor="middle" className="fill-slate-600 text-xs">Startups</text>
      <text x="320" y="240" textAnchor="middle" className="fill-slate-500 text-xs">5-50</text>
      
      <circle cx="150" cy="280" r="24" fill="#f1f5f9" stroke="#475569" strokeWidth="1" />
      <text x="150" y="278" textAnchor="middle" className="fill-slate-600 text-xs">Mid-Market</text>
      <text x="150" y="290" textAnchor="middle" className="fill-slate-500 text-xs">200-1000</text>
      
      {/* Central confusion hub */}
      <circle cx="200" cy="160" r="30" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" />
      <text x="200" y="155" textAnchor="middle" className="fill-slate-500 text-xs font-medium">Confused</text>
      <text x="200" y="170" textAnchor="middle" className="fill-slate-500 text-xs">Prospects</text>
      
      {/* Simplified arrows pointing to confusion */}
      <g stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeDasharray="3,3">
        <path d="M140 80 L180 140" />
        <path d="M260 80 L220 140" />
        <path d="M200 120 L200 140" />
      </g>
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead-subtle" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
        </marker>
      </defs>
      
      {/* Simplified feature cluster */}
      <g transform="translate(120, 320)">
        <rect x="0" y="0" width="160" height="50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="8" strokeDasharray="2,2" />
        <text x="80" y="18" textAnchor="middle" className="fill-slate-500 text-xs font-medium">Scattered Features</text>
        <text x="80" y="32" textAnchor="middle" className="fill-slate-400 text-xs">Analytics • Automation • Integration</text>
        <text x="80" y="44" textAnchor="middle" className="fill-slate-400 text-xs">Reporting • Workflow • More...</text>
      </g>
    </svg>
  )
} 