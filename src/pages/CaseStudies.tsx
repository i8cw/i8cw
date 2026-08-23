import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studies = [
  {
    industry: 'Retail & Fashion',
    stack: 'Shopify + NetSuite + 3PL (Celigo)',
    client: 'Global Fashion Retailer',
    headline: '10M+ orders a month, zero manual touches',
    challenge: 'Nine regional storefronts, three warehouses and a patchwork of scripts that collapsed every peak season.',
    outcome: 'A unified Celigo architecture syncing orders, inventory and fulfilment in near real-time. Peak season came and went without a single war room.',
    metrics: [
      { value: '10M+', label: 'orders / month' },
      { value: '-78%', label: 'manual effort' },
      { value: '99.99%', label: 'sync accuracy' }
    ]
  },
  {
    industry: 'Electronics & Wholesale',
    stack: 'Amazon + Walmart + eBay + 11 more (Celigo + NetSuite)',
    client: 'Fortune 500 Electronics Distributor',
    headline: '14 marketplaces, one version of the truth',
    challenge: 'Every marketplace had its own spreadsheet, its own errors, and its own month-end reconciliation nightmare.',
    outcome: 'One governed integration layer across all 14 channels. Settlement reconciliation dropped from 6 days to 4 hours.',
    metrics: [
      { value: '14', label: 'marketplaces unified' },
      { value: '0', label: 'dropped orders in 12 mo' },
      { value: '-94%', label: 'reconciliation time' }
    ]
  },
  {
    industry: 'Food & Beverage',
    stack: 'Oracle Fusion + OIC + DHL',
    client: 'Food & Beverage Manufacturer',
    headline: 'Live in six weeks, 40% under budget',
    challenge: 'A stalled Oracle programme and a carrier integration that had defeated two previous consultancies.',
    outcome: 'Our OIC accelerator library delivered the full Fusion-to-3PL pipeline in six weeks — with error governance the client\'s team now runs themselves.',
    metrics: [
      { value: '6 wks', label: 'to go-live' },
      { value: '-40%', label: 'integration cost' },
      { value: '24/7', label: 'self-healing ops' }
    ]
  },
  {
    industry: 'D2C & E-Commerce',
    stack: 'Custom middleware product + 9 3PLs',
    client: 'Hypergrowth D2C Brand',
    headline: 'One product, nine countries, infinite scale',
    challenge: 'Off-the-shelf connectors couldn\'t handle their bundling logic, and every new 3PL took months to onboard.',
    outcome: 'We engineered a custom middleware product they now own outright. New 3PL onboarding: under two weeks, anywhere in the world.',
    metrics: [
      { value: '9', label: 'countries covered' },
      { value: '<2 wks', label: 'new 3PL onboarding' },
      { value: '3.2x', label: 'order volume growth' }
    ]
  }
];

const industries = [
  'Retail & Fashion', 'Electronics', 'Food & Beverage', 'Health & Beauty',
  'Automotive', 'D2C & E-Commerce', 'Wholesale & Distribution', 'Furniture & Home',
  'Pharma & Medical', 'Industrial Manufacturing'
];

export const CaseStudies = () => {
  return (
    <div data-testid="case-studies-page">
      <section className="pt-[76px] hero-grid-bg">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Case Studies & Industries</p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase text-obsidian max-w-4xl">
            <span className="block">Proof over</span>
            <span className="block"><span className="text-electric">promises.</span></span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-mutedink leading-relaxed max-w-2xl">Client names are confidential — their results are not. Every metric below is measured, not estimated.</p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
          {studies.map((s, i) => (
            <article key={i} className="bg-white border border-hairline rounded-3xl p-8 sm:p-12 hover:border-electric/60 hover:shadow-[0_32px_80px_rgba(0,82,255,0.08)] transition-[border-color,box-shadow] duration-500">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-electric/10 text-electric px-3 py-1.5 rounded-full font-semibold">{s.industry}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faintink">{s.stack}</span>
              </div>
              <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                <div>
                  <p className="font-mono text-sm text-faintink">0{i + 1} — {s.client}</p>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-obsidian">{s.headline}</h2>
                  <div className="mt-7 space-y-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">The challenge</p>
                      <p className="mt-2 text-sm sm:text-base text-mutedink leading-relaxed">{s.challenge}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">The outcome</p>
                      <p className="mt-2 text-sm sm:text-base text-mutedink leading-relaxed">{s.outcome}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-5">
                  {s.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-baseline gap-5 border-b border-hairline pb-5 last:border-0">
                      <p className="font-display text-3xl sm:text-4xl font-extrabold text-electric min-w-[130px]">{m.value}</p>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-faintink">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-white border-y border-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Industries we serve</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">Wherever orders flow, we've been there</h2>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <span key={i} className="inline-block border border-hairline bg-paper rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-electric hover:text-electric transition-colors duration-300 cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-obsidian rounded-3xl px-8 sm:px-14 py-14 sm:py-16 relative overflow-hidden">
            <p className="absolute -bottom-8 right-4 font-display font-extrabold text-[14vw] leading-none text-outline-light select-none pointer-events-none">NEXT</p>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-xl leading-[1.1]">Your story could be the next one on this page.</h2>
              <Link data-testid="cases-final-cta-button" className="inline-flex items-center gap-2.5 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-obsidian transition-colors duration-300 shrink-0" to="/contact">
                Become the Next Case Study <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
