import React from 'react';

const partners = [
  'NetSuite', 'Celigo', 'Oracle Integration Cloud', 'Amazon', 'Walmart',
  'Shopify', 'eBay', 'Target+', 'DHL', 'FedEx', 'ShipStation', 'BigCommerce', 'Any 3PL Worldwide'
];

export const Marquee = () => {
  return (
    <section data-testid="partner-marquee" className="border-y border-hairline bg-white py-7 overflow-hidden">
      <div className="marquee-track items-center">
        {[...partners, ...partners].map((p, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className={`font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight whitespace-nowrap px-6 ${i % 2 === 0 ? 'text-obsidian/75' : 'text-outline'}`}>
              {p}
            </span>
            <span className="w-2 h-2 rotate-45 bg-electric shrink-0"></span>
          </div>
        ))}
      </div>
    </section>
  );
};
