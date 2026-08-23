import React from 'react';
import { ArrowUpRight, Target, Zap, Eye, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '200+', label: 'Integration programmes delivered' },
  { value: '10M+', label: 'Records synced every day' },
  { value: '99.99%', label: 'Synchronisation reliability' },
  { value: '40%', label: 'Average integration cost reduction' }
];

const principles = [
  { n: '01', title: 'Integration is engineering, not configuration', body: 'Anyone can drag connectors onto a canvas. We design data contracts, failure modes, and recovery paths — the invisible architecture that decides whether your business runs or stalls.' },
  { n: '02', title: 'Your 3 a.m. is our 3 a.m.', body: 'We build self-healing systems because we refuse to let clients babysit software. Error governance, automated retries, and alerting that reaches a human before your customers notice a thing.' },
  { n: '03', title: 'Weeks beat quarters', body: 'Enterprise doesn\'t have to mean slow. Our accelerators — pre-built NetSuite, Celigo and OIC patterns refined over hundreds of deployments — compress timelines without compressing quality.' },
  { n: '04', title: 'We say no', body: 'If a design won\'t scale, we say so. If you don\'t need custom middleware, we\'ll tell you. Our reputation compounds the same way our clients\' trust does — one honest call at a time.' }
];

const values = [
  { title: 'Precision', body: 'Field-level accuracy across millions of records. Close enough is never enough.', icon: <Target className="w-6 h-6 text-electric" /> },
  { title: 'Velocity', body: 'Fast delivery, faster syncs. Momentum is a feature.', icon: <Zap className="w-6 h-6 text-electric" /> },
  { title: 'Transparency', body: 'Fixed scopes, honest timelines, dashboards that show everything.', icon: <Eye className="w-6 h-6 text-electric" /> },
  { title: 'Ownership', body: 'We treat your data flows like our own revenue depends on them — because it does.', icon: <HeartHandshake className="w-6 h-6 text-electric" /> }
];

const team = [
  { name: 'Alex Vance', role: 'Founder & Chief Integration Architect', note: '7+ years across NetSuite, Celigo & Oracle ecosystems', initials: 'AV' },
  // { name: 'Sarah Whitfield', role: 'Head of NetSuite Practice', note: 'Former Big-4 ERP lead, 60+ implementations', initials: 'SW' },
  // { name: 'Diego Alvarez', role: 'Director, Middleware Engineering', note: 'Built connector platforms processing billions of records', initials: 'DA' },
  // { name: 'Priya Nair', role: 'Head of Delivery & SLA Governance', note: 'Keeper of the 99.99% reliability standard', initials: 'PN' }
];

export const About = () => {
  return (
    <div data-testid="about-page">
      <section className="pt-[76px] hero-grid-bg">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">About Integr8 Cloudware</p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase text-obsidian max-w-4xl">
            <span className="block">Built by integrators.</span>
            <span className="block"><span className="text-electric">Trusted by enterprises.</span></span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-mutedink leading-relaxed max-w-3xl">Integr8 Cloudware exists because of a pattern we kept seeing: brilliant companies held hostage by brittle integrations. Orders vanishing between Shopify and NetSuite. 3PL shipments that "should have synced." Marketplace settlements nobody could reconcile. We founded I8CW to end that — permanently.</p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Who we are</p>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">The team enterprises call when "good enough" failed</h2>
              <p className="mt-6 text-base text-mutedink leading-relaxed">We are integration architects, NetSuite engineers, and middleware craftspeople who have spent our careers inside the world's most demanding supply chains and e-commerce operations. We've rescued implementations others abandoned. We've rebuilt pipelines that processed more orders in a day than most see in a year.</p>
              <p className="mt-5 text-base text-mutedink leading-relaxed">Today, our systems quietly move over ten million records a day for retailers, distributors, manufacturers and D2C brands across six continents. You have never heard of most of our work — that's the point. Perfect integration is invisible.</p>
              <p className="mt-5 text-base text-obsidian font-medium leading-relaxed">When you work with us, you don't get a vendor. You get the team that treats your revenue pipeline with the seriousness it deserves.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-hairline h-[360px] sm:h-[480px]">
              <img alt="Integr8 Cloudware engineering team" loading="lazy" className="w-full h-[120%] object-cover -translate-y-[40px]" src="https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-obsidian text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-electric-glow">{s.value}</p>
              <p className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Our operating principles</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian max-w-2xl">Four convictions we will not negotiate</h2>
          </div>
          <div className="mt-14 border-t border-hairline">
            {principles.map((p, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-hairline group">
                <p className="md:col-span-2 font-mono text-sm text-electric font-semibold">{p.n}</p>
                <h3 className="md:col-span-4 font-display text-xl sm:text-2xl font-bold text-obsidian group-hover:text-electric transition-colors duration-300">{p.title}</h3>
                <p className="md:col-span-6 text-sm sm:text-base text-mutedink leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white border-y border-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">What we value</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">How we work, every single day</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="bg-paper border border-hairline rounded-2xl p-7 h-full hover:border-electric hover:-translate-y-1 transition-[transform,border-color] duration-500">
                {v.icon}
                <h3 className="mt-5 font-display text-lg font-bold text-obsidian">{v.title}</h3>
                <p className="mt-3 text-sm text-mutedink leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Leadership</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-obsidian">The people accountable for your outcome</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((t, i) => (
              <div key={i} className="border border-hairline rounded-2xl p-7 h-full bg-white hover:shadow-[0_24px_60px_rgba(10,13,20,0.07)] hover:-translate-y-1 transition-[transform,box-shadow] duration-500">
                <div className="w-12 h-12 rounded-full bg-obsidian text-white font-display font-bold flex items-center justify-center text-sm">{t.initials}</div>
                <h3 className="mt-5 font-display text-lg font-bold text-obsidian">{t.name}</h3>
                <p className="mt-1 text-xs font-semibold text-electric">{t.role}</p>
                <p className="mt-3 text-sm text-mutedink leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-obsidian rounded-3xl px-8 sm:px-14 py-14 sm:py-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-electric/25 blur-3xl pointer-events-none"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-xl leading-[1.1]">Your systems should be an asset, not an anxiety.</h2>
              <Link data-testid="about-final-cta-button" className="inline-flex items-center gap-2.5 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-obsidian transition-colors duration-300 shrink-0" to="/contact">
                Meet the Team <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
