import React from 'react';

const nodes = [
  { code: 'AMZ', label: 'AMAZON', cx: 540, cy: 300, delay: '0s' },
  { code: 'WMT', label: 'WALMART', cx: 470, cy: 470, delay: '0.3s' },
  { code: 'SHF', label: 'SHOPIFY', cx: 300, cy: 540, delay: '0.6s' },
  { code: 'EBY', label: 'EBAY', cx: 130, cy: 470, delay: '0.9s' },
  { code: 'TGT', label: 'TARGET+', cx: 60, cy: 300, delay: '1.2s' },
  { code: '3PL', label: '3PL / DHL', cx: 130, cy: 130, delay: '1.5s' },
  { code: 'CLG', label: 'CELIGO', cx: 300, cy: 60, delay: '1.8s' },
  { code: 'OIC', label: 'ORACLE OIC', cx: 470, cy: 130, delay: '2.1s' }
];

export const HeroNetwork = () => {
  return (
    <div className="float-soft w-full max-w-[560px] mx-auto" data-testid="hero-network-diagram">
      <svg viewBox="0 0 600 600" className="w-full h-auto" role="img" aria-label="Integration network diagram">
        <circle cx="300" cy="300" r="240" fill="none" stroke="#E2E4E9" strokeWidth="1" strokeDasharray="2 8" className="spin-slow" />
        <circle cx="300" cy="300" r="150" fill="none" stroke="#E2E4E9" strokeWidth="1" />
        
        {nodes.map((n, i) => (
          <line key={`line-${i}`} x1="300" y1="300" x2={n.cx} y2={n.cy} stroke="#0052FF" strokeWidth="1.4" opacity="0.45" className="flow-dash" />
        ))}
        
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <circle cx={n.cx} cy={n.cy} r="34" fill="#ffffff" stroke="#0A0D14" strokeWidth="1.5" className="pulse-node" style={{ animationDelay: n.delay }} />
            <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="#0A0D14" fontSize="11" fontWeight="600" fontFamily="'JetBrains Mono', monospace">
              {n.code}
            </text>
            <text x={n.cx} y={n.cy + 52} textAnchor="middle" fill="#868C98" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5">
              {n.label}
            </text>
          </g>
        ))}

        <circle cx="300" cy="300" r="86" fill="none" stroke="#0052FF" strokeWidth="1" opacity="0.35" className="pulse-node" />
        <circle cx="300" cy="300" r="70" fill="none" stroke="#00D2FF" strokeWidth="1" opacity="0.3" className="pulse-node" style={{ animationDelay: '0.8s' }} />
        
        <rect x="238" y="268" width="124" height="64" rx="10" fill="#0A0D14" />
        <text x="300" y="296" textAnchor="middle" fill="#ffffff" fontSize="19" fontWeight="800" fontFamily="'Syne', sans-serif" letterSpacing="1">
          I8CW
        </text>
        <text x="300" y="316" textAnchor="middle" fill="#00D2FF" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" letterSpacing="2">
          NETSUITE CORE
        </text>
      </svg>
    </div>
  );
};
