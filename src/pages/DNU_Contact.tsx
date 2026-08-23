import React from 'react';
import { Mail, Clock3, ShieldCheck, ArrowUpRight } from 'lucide-react';

const services = [
  'NetSuite Consultancy (Technical / Functional)',
  'Celigo Integration Services',
  'Oracle Integration Cloud (OIC)',
  'Marketplace Integration (Amazon, Walmart, Shopify…)',
  '3PL / Logistics Integration',
  'Custom Integration Product Development',
  'Something else / not sure yet'
];

const volumes = [
  'Under 1k orders / month',
  '1k – 10k / month',
  '10k – 100k / month',
  '100k+ / month'
];

const steps = [
  { n: '01', title: 'Discovery call within 24h', body: 'A senior architect — never a salesperson — reviews your stack and goals.' },
  { n: '02', title: 'Solution blueprint in 5 days', body: 'Architecture, approach, and honest trade-offs, in writing.' },
  { n: '03', title: 'Fixed-scope proposal', body: 'Timeline and price you can hold us to. No surprises later.' }
];

export const Contact = () => {
  return (
    <div data-testid="contact-page">
      <section className="pt-[76px] hero-grid-bg">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-24 sm:pt-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Contact Us</p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase text-obsidian max-w-4xl">
            <span className="block">Tell us where</span>
            <span className="block"><span className="text-electric">it hurts.</span></span>
          </h1>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-mutedink leading-relaxed max-w-md">Whether it's a marketplace that won't sync, a 3PL running on spreadsheets, or a NetSuite instance held together with hope — we've untangled worse. Start with a 30-minute discovery call. Zero obligation, genuinely useful.</p>
              <div className="mt-10 space-y-5">
                <a href="mailto:hello@integr8cloudware.com" data-testid="contact-email-link" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-xl bg-obsidian text-white flex items-center justify-center group-hover:bg-electric transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink">Email</span>
                    <span className="block text-sm font-semibold text-obsidian group-hover:text-electric transition-colors">hello@integr8cloudware.com</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-obsidian text-white flex items-center justify-center">
                    <Clock3 className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink">Response time</span>
                    <span className="block text-sm font-semibold text-obsidian">Within one business day — usually faster</span>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl bg-obsidian text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink">Confidentiality</span>
                    <span className="block text-sm font-semibold text-obsidian">NDA-friendly. Your stack stays your secret.</span>
                  </span>
                </div>
              </div>
              <div className="mt-12 border-t border-hairline pt-10">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">What happens next</p>
                <div className="mt-6 space-y-6">
                  {steps.map((s, i) => (
                    <div key={i} className="flex gap-5">
                      <p className="font-mono text-sm text-electric font-semibold shrink-0">{s.n}</p>
                      <div>
                        <p className="text-sm font-bold text-obsidian">{s.title}</p>
                        <p className="mt-1 text-sm text-mutedink leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <form data-testid="contact-form" className="bg-white border border-hairline rounded-3xl p-7 sm:p-10 shadow-[0_24px_70px_rgba(10,13,20,0.06)] space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink mb-2.5">Full name *</label>
                    <input data-testid="contact-name-input" required placeholder="Jane Cooper" className="w-full text-sm sm:text-base border border-hairline rounded-xl px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-[box-shadow,border-color] duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink mb-2.5">Work email *</label>
                    <input data-testid="contact-email-input" required type="email" placeholder="jane@company.com" className="w-full text-sm sm:text-base border border-hairline rounded-xl px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-[box-shadow,border-color] duration-300" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink mb-2.5">Company</label>
                    <input data-testid="contact-company-input" placeholder="Company Inc." className="w-full text-sm sm:text-base border border-hairline rounded-xl px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-[box-shadow,border-color] duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink mb-2.5">Monthly order volume</label>
                    <select data-testid="contact-volume-select" className="w-full text-sm sm:text-base border border-hairline rounded-xl px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-[box-shadow,border-color] duration-300">
                      {volumes.map((v, i) => <option key={i}>{v}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink mb-2.5">What do you need?</label>
                  <select data-testid="contact-service-select" className="w-full text-sm sm:text-base border border-hairline rounded-xl px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-[box-shadow,border-color] duration-300">
                    {services.map((s, i) => <option key={i}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-faintink mb-2.5">Tell us about the project *</label>
                  <textarea data-testid="contact-message-input" required rows={5} placeholder="Which systems are involved? What's breaking, or what are you trying to achieve?" className="w-full text-sm sm:text-base border border-hairline rounded-xl px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-[box-shadow,border-color] duration-300 resize-none"></textarea>
                </div>
                <button data-testid="contact-form-submit-button" type="submit" className="w-full inline-flex items-center justify-center gap-2.5 bg-obsidian text-white font-semibold px-8 py-4 rounded-full hover:bg-electric transition-colors duration-300 disabled:opacity-60 group">
                  Send Enquiry<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <p className="text-xs text-faintink text-center">No newsletters. No spam. A human architect replies, not a sequence.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
