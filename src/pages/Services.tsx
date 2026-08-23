import React from 'react';
import { Database, Workflow, CloudCog, Store, Boxes, Package, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'netsuite',
    tag: 'ERP Core',
    title: 'NetSuite Consultancy — Technical & Functional',
    body: 'From greenfield implementations to rescuing failed rollouts, our certified NetSuite architects own both sides of the table: the functional process design and the deep technical engineering that makes it sing.',
    bullets: [
      'SuiteScript 2.1, SuiteFlow, SuiteTalk & RESTlet engineering',
      'Saved searches, custom records & workflow optimisation',
      'ERP reimplementation & performance rescue',
      'Finance, inventory, order & fulfilment process design'
    ],
    image: 'https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    icon: <Database className="w-4 h-4 text-electric" />
  },
  {
    id: 'celigo',
    tag: 'iPaaS',
    title: 'Celigo Integration Services',
    body: 'We build Celigo flows the way Celigo wishes everyone did — governed, observable, and self-healing. From integrator.io design to EDI onboarding, your data moves with military precision.',
    bullets: [
      'integrator.io flow architecture & optimisation',
      'EDI partner onboarding (850/856/810/846)',
      'Error governance dashboards & auto-retry frameworks',
      'Migration from legacy middleware to Celigo'
    ],
    image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwY2xvdWQlMjBzb2Z0d2FyZSUyMHRlYW0lMjBvZmZpY2UlMjBhYnN0cmFjdCUyMGRpZ2l0YWwlMjBuZXR3b3JrfGVufDB8fHx8MTc4NzQwMDM5MXww&ixlib=rb-4.1.0&q=85',
    icon: <Workflow className="w-4 h-4 text-electric" />,
    reverse: true
  },
  {
    id: 'oic',
    tag: 'Oracle Stack',
    title: 'Oracle Integration Cloud (OIC) Services',
    body: 'Enterprise-grade orchestration for the Oracle ecosystem. We design OIC integrations that connect Fusion ERP, SCM and HCM to everything outside the Oracle walls — cleanly and at scale.',
    bullets: [
      'OIC adapter engineering (REST, SOAP, FTP, DB)',
      'Fusion ERP / SCM / HCM connectivity',
      'Complex orchestration & B2B integrations',
      'OIC monitoring, alerting & lifecycle management'
    ],
    image: 'https://images.pexels.com/photos/1583391/pexels-photo-1583391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    icon: <CloudCog className="w-4 h-4 text-electric" />
  },
  {
    id: 'marketplaces',
    tag: 'Omnichannel',
    title: 'Marketplace Integrations — Every Channel on Earth',
    body: 'Amazon SP-API, Walmart, Shopify, eBay, Target+, TikTok Shop — and any marketplace you\'ve never heard of yet. Listings, orders, inventory, pricing and returns, unified into one NetSuite truth.',
    bullets: [
      'Amazon SP-API at scale (rate-limit proof)',
      'Walmart, eBay, Target+, Shopify & 40+ more',
      'Real-time inventory & pricing synchronisation',
      'Order routing, returns & settlement reconciliation'
    ],
    image: 'https://images.pexels.com/photos/36522028/pexels-photo-36522028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    icon: <Store className="w-4 h-4 text-electric" />,
    reverse: true
  },
  {
    id: '3pl',
    tag: 'Fulfilment',
    title: '3PL & Logistics — Any Partner, Anywhere',
    body: 'If your 3PL has an API, a file drop, or even just an email inbox — we\'ll integrate it. DHL, FedEx, ShipStation and hundreds of regional warehouses across the globe, synced to the second.',
    bullets: [
      'Any 3PL in the world — API, EDI, SFTP or flat file',
      'WMS connectivity & warehouse event streaming',
      'EDI 940/945/856 shipment lifecycle automation',
      'Carrier aggregation (DHL, FedEx, UPS, ShipStation)'
    ],
    image: 'https://images.pexels.com/photos/6572434/pexels-photo-6572434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    icon: <Boxes className="w-4 h-4 text-electric" />
  },
  {
    id: 'engineering',
    tag: 'Engineering',
    title: 'Integration Product Development',
    body: 'When off-the-shelf connectors fall short, we build the product. Custom middleware, connector-as-a-service platforms and integration tooling engineered with product discipline — versioned, documented, supported.',
    bullets: [
      'Custom middleware & connector development',
      'Connector-as-a-product platforms with SLAs',
      'Webhook gateways, event buses & sync engines',
      'White-label integration tooling for SaaS companies'
    ],
    image: 'https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    icon: <Package className="w-4 h-4 text-electric" />,
    reverse: true
  }
];

export const Services = () => {
  return (
    <div data-testid="services-page">
      <section className="pt-[76px] hero-grid-bg">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Services & Integration Products</p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase text-obsidian max-w-4xl">
            <span className="block">We connect</span>
            <span className="block"><span className="text-electric">what others can't.</span></span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-mutedink leading-relaxed max-w-2xl">Six practices. One obsession: data that arrives where it should, when it should, every single time.</p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
          {services.map((s, i) => (
            <div key={i} id={s.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28">
              <div className={s.reverse ? "lg:order-2" : ""}>
                <div className="relative group overflow-hidden rounded-2xl border border-hairline">
                  <img alt={s.title} loading="lazy" className="w-full h-[300px] sm:h-[380px] object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out" src={s.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                    {s.icon}
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-obsidian font-semibold">{s.tag}</span>
                  </div>
                </div>
              </div>
              <div className={s.reverse ? "lg:order-1" : ""}>
                <p className="font-mono text-sm text-electric font-semibold">0{i + 1}</p>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-obsidian">{s.title}</h2>
                <p className="mt-5 text-base text-mutedink leading-relaxed">{s.body}</p>
                <ul className="mt-7 space-y-3.5">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-electric/10 text-electric flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric group" to="/contact">
                  Discuss this service<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-obsidian rounded-3xl px-8 sm:px-14 py-14 sm:py-16 relative overflow-hidden">
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-electric/25 blur-3xl pointer-events-none"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-xl leading-[1.1]">Not sure which service fits? That's what the discovery call is for.</h2>
              <Link data-testid="services-final-cta-button" className="inline-flex items-center gap-2.5 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-obsidian transition-colors duration-300 shrink-0" to="/contact">
                Talk to an Architect <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
