import React from 'react';
import { ArrowUpRight, ArrowRight, TrendingUp, Clock3, ShieldCheck, Quote, Database, Workflow, CloudCog, Store, Boxes, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Marquee } from '../components/Marquee';
import { HeroNetwork } from '../components/HeroNetwork';

import { ROICalculator } from '../components/ROICalculator';

const stats = [
  { value: '10M+', label: 'Records synced daily' },
  { value: '120+', label: 'Connectors deployed' },
  { value: '99.99%', label: 'Sync reliability' },
  { value: '6', label: 'Continents served' }
];

const chapters = [
  { n: '01', title: 'Precision', body: 'Every order, item, invoice and shipment mapped field-by-field. We engineer integrations like aviation systems — because your revenue flies on them.' },
  { n: '02', title: 'Velocity', body: 'Live in weeks, not quarters. Our pre-built accelerators for NetSuite, Celigo and OIC compress delivery timelines without cutting a single corner.' },
  { n: '03', title: 'Reliability', body: '99.99% sync reliability with self-healing error governance. When something breaks at 3 a.m., it resolves itself before your team wakes up.' }
];

const services = [
  { title: 'NetSuite Consultancy', body: 'Technical & functional expertise — SuiteScript 2.1, SuiteFlow, RESTlets, rescued implementations.', icon: <Database className="w-5 h-5" /> },
  { title: 'Celigo Integration', body: 'integrator.io flows, EDI, and error governance that scales.', icon: <Workflow className="w-5 h-5" /> },
  { title: 'Oracle Integration Cloud', body: 'OIC adapters, orchestration and Fusion ERP connectivity.', icon: <CloudCog className="w-5 h-5" /> },
  { title: 'Marketplace Connectors', body: 'Amazon, Walmart, Shopify, eBay, Target+ — every channel, one truth.', icon: <Store className="w-5 h-5" /> },
  { title: '3PL & Logistics', body: 'Any 3PL in the world. WMS, carriers, EDI 940/945/856 — connected.', icon: <Boxes className="w-5 h-5" /> },
  { title: 'Integration Products', body: 'Custom middleware and connectors engineered as products, not projects.', icon: <Package className="w-5 h-5" /> }
];

const casePreview = [
  { metric: '10M+', label: 'orders / month', client: 'Global fashion retailer', detail: 'Shopify + NetSuite + 3PL unification' },
  { metric: '0', label: 'dropped orders', client: 'Electronics distributor', detail: '14 marketplaces via Celigo' },
  { metric: '6 wks', label: 'to go-live', client: 'F&B manufacturer', detail: 'OIC + Oracle Fusion ERP' }
];

const testimonials = [
  { quote: 'Integr8 rebuilt our entire order pipeline. We went from daily firefighting to literally zero manual touches per order.', name: 'Daniel K.', role: 'VP Operations, Global Fashion Retailer' },
  { quote: 'The only partner we\'ve worked with who treats integrations as engineering, not configuration. Flawless delivery.', name: 'Priya S.', role: 'CIO, Electronics Distribution Group' },
  { quote: 'Our 3PL sync used to fail weekly. Since Integr8 took over, it hasn\'t failed once. Not once in fourteen months.', name: 'Marcus T.', role: 'Head of Supply Chain, D2C Brand' }
];

export const Home = () => {
  return (
    <div data-testid="home-page">
      <section className="relative min-h-screen flex items-center overflow-hidden hero-grid-bg pt-[76px]">
        <div className="absolute inset-0 pointer-events-none">
          <p className="absolute -bottom-10 -left-6 font-display font-extrabold text-[26vw] leading-none text-outline-faint select-none">I8CW</p>
        </div>
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">
          <div>
            <span className="block overflow-hidden"><span className="block"><p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">NetSuite · Celigo · OIC · Marketplaces · 3PL</p></span></span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase text-obsidian">
              <span className="block overflow-hidden"><span className="block">Every system.</span></span>
              <span className="block overflow-hidden"><span className="block">Every channel.</span></span>
              <span className="block overflow-hidden"><span className="block"><span className="text-electric">Moving in sync.</span></span></span>
            </h1>
            <span className="block overflow-hidden"><span className="block"><p className="mt-7 text-base sm:text-lg text-mutedink leading-relaxed max-w-xl">Integr8 Cloudware connects your NetSuite core to any marketplace and any 3PL in the world — Amazon, Walmart, Shopify, eBay, Target and beyond — with integrations so reliable you'll forget they exist.</p></span></span>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link data-testid="hero-cta-contact-button" className="inline-flex items-center gap-2.5 bg-obsidian text-white font-semibold px-7 py-3.5 rounded-full hover:bg-electric transition-colors duration-300 group" to="/contact">
                Book a Discovery Call<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link data-testid="hero-cta-services-button" className="inline-flex items-center gap-2.5 border border-obsidian/20 text-obsidian font-semibold px-7 py-3.5 rounded-full hover:border-electric hover:text-electric transition-colors duration-300 group" to="/services">
                Explore Services<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-hairline pt-7">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-obsidian">{s.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faintink">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <HeroNetwork />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">The Integr8 Manifesto</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian max-w-2xl">Three principles behind every connection we ship</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {chapters.map((c, i) => (
              <div key={i} className="bg-paper">
                <div className="p-8 sm:p-10 h-full group hover:bg-white transition-colors duration-500">
                  <p className="font-mono text-sm text-electric font-semibold">{c.n}</p>
                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-obsidian group-hover:text-electric transition-colors duration-300">{c.title}</h3>
                  <p className="mt-4 text-sm text-mutedink leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white border-y border-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">What we do</p>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">Integration, engineered end-to-end</h2>
            </div>
            <Link data-testid="home-services-link" className="inline-flex items-center gap-2 text-sm font-semibold text-electric group shrink-0" to="/services">
              All services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className={i === 0 || i === 5 ? "md:col-span-2" : ""}>
                <Link data-testid={`home-service-card-${i}`} className="block h-full bg-paper border border-hairline rounded-2xl p-8 group hover:border-electric hover:shadow-[0_24px_60px_rgba(0,82,255,0.1)] hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-500" to="/services">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-obsidian text-white flex items-center justify-center group-hover:bg-electric transition-colors duration-300">
                      {s.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-faintink group-hover:text-electric group-hover:translate-x-1 group-hover:-translate-y-1 transition-[transform,color] duration-300" />
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-obsidian">{s.title}</h3>
                  <p className="mt-3 text-sm text-mutedink leading-relaxed">{s.body}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">The cost of doing nothing</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">What is manual order entry really costing you?</h2>
            <p className="mt-4 text-base text-mutedink leading-relaxed">Drag the sliders. Most operations leaders are surprised — then they call us.</p>
          </div>
          <div className="mt-12">
            <ROICalculator />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-obsidian text-white relative overflow-hidden">
        <p className="absolute top-8 right-0 font-display font-extrabold text-[18vw] leading-none text-outline-light select-none pointer-events-none">PROOF</p>
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-electric-glow font-medium">Proof, not promises</p>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Results our clients measure in millions</h2>
            </div>
            <Link data-testid="home-cases-link" className="inline-flex items-center gap-2 text-sm font-semibold text-electric-glow group shrink-0" to="/case-studies">
              All case studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {casePreview.map((c, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-8 h-full hover:border-electric-glow/50 hover:bg-white/[0.03] transition-[border-color,background-color] duration-500">
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-electric-glow">{c.metric}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{c.label}</p>
                <p className="mt-6 text-sm font-semibold text-white">{c.client}</p>
                <p className="mt-1.5 text-sm text-slate-400">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Client voices</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">Leaders who stopped worrying about integration</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-white border border-hairline rounded-2xl p-8 h-full flex flex-col hover:shadow-[0_24px_60px_rgba(10,13,20,0.07)] hover:-translate-y-1 transition-[transform,box-shadow] duration-500">
                <Quote className="w-6 h-6 text-electric" />
                <blockquote className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-7 pt-5 border-t border-hairline">
                  <p className="text-sm font-semibold text-obsidian">{t.name}</p>
                  <p className="text-xs text-faintink mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="relative bg-obsidian rounded-3xl px-8 sm:px-14 py-16 sm:py-20 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-electric/25 blur-3xl pointer-events-none"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">Let's make your systems speak one language.</h2>
                <p className="mt-5 text-slate-400 text-base leading-relaxed">A 30-minute discovery call. Zero obligation. You'll leave with a clear integration roadmap whether you work with us or not.</p>
              </div>
              <Link data-testid="home-final-cta-button" className="inline-flex items-center gap-2.5 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-obsidian transition-colors duration-300 group shrink-0" to="/contact">
                Start the Conversation<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
