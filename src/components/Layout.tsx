import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Mail, MapPin, Clock, X } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isTransparentOverDark = location.pathname === '/careers' && !isScrolled;

  const getNavLinkClass = (path: string) => {
    if (isTransparentOverDark) {
      return isActive(path) ? 'text-white' : 'text-slate-300 hover:text-white';
    }
    return isActive(path) ? 'text-obsidian' : 'text-mutedink hover:text-obsidian';
  };

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="App">
      <div className="grain-overlay" aria-hidden="true"></div>
      
      <header data-testid="site-header" className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-hairline shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-[76px] flex items-center justify-between">
          <Link data-testid="nav-logo-link" className="flex items-center group" to="/">
            <img alt="Integr8 Cloudware" className={`h-6 sm:h-7 w-auto transition-all duration-300 ${isTransparentOverDark ? 'invert mix-blend-screen' : 'mix-blend-multiply'}`} src="/i8cw_T.png" />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-9" data-testid="nav-desktop-menu">
            <Link data-testid="nav-link-services" className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${getNavLinkClass('/services')}`} to="/services">
              Services
              <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full bg-electric origin-left transition-transform duration-300 ${isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link data-testid="nav-link-case-studies" className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${getNavLinkClass('/case-studies')}`} to="/case-studies">
              Case Studies
              <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full bg-electric origin-left transition-transform duration-300 ${isActive('/case-studies') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link data-testid="nav-link-about" className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${getNavLinkClass('/about')}`} to="/about">
              About
              <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full bg-electric origin-left transition-transform duration-300 ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link data-testid="nav-link-blog" className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${getNavLinkClass('/blog')}`} to="/blog">
              Insights
              <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full bg-electric origin-left transition-transform duration-300 ${isActive('/blog') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link data-testid="nav-link-careers" className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${getNavLinkClass('/careers')}`} to="/careers">
              Careers
              <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full bg-electric origin-left transition-transform duration-300 ${isActive('/careers') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
            <Link data-testid="nav-link-contact" className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${getNavLinkClass('/contact')}`} to="/contact">
              Contact
              <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full bg-electric origin-left transition-transform duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link data-testid="nav-cta-button" className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 group ${isTransparentOverDark ? 'bg-white text-obsidian hover:bg-electric hover:text-white' : 'bg-obsidian text-white hover:bg-electric'}`} to="/contact">
              Book a Discovery Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            <button onClick={toggleMenu} data-testid="nav-mobile-toggle" className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full border ${isTransparentOverDark ? 'border-white/20 bg-white/10 text-white' : 'border-hairline bg-white/70 text-obsidian'}`} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[76px] left-0 w-full bg-white border-b border-hairline shadow-lg">
            <nav className="flex flex-col p-5 gap-4">
              <Link onClick={toggleMenu} className={`text-base font-medium ${isActive('/services') ? 'text-electric' : 'text-obsidian'}`} to="/services">Services</Link>
              <Link onClick={toggleMenu} className={`text-base font-medium ${isActive('/case-studies') ? 'text-electric' : 'text-obsidian'}`} to="/case-studies">Case Studies</Link>
              <Link onClick={toggleMenu} className={`text-base font-medium ${isActive('/about') ? 'text-electric' : 'text-obsidian'}`} to="/about">About</Link>
              <Link onClick={toggleMenu} className={`text-base font-medium ${isActive('/blog') ? 'text-electric' : 'text-obsidian'}`} to="/blog">Insights</Link>
              <Link onClick={toggleMenu} className={`text-base font-medium ${isActive('/careers') ? 'text-electric' : 'text-obsidian'}`} to="/careers">Careers</Link>
              <Link onClick={toggleMenu} className={`text-base font-medium ${isActive('/contact') ? 'text-electric' : 'text-obsidian'}`} to="/contact">Contact</Link>
              <Link onClick={toggleMenu} className="inline-flex items-center justify-center gap-2 bg-obsidian text-white text-sm font-semibold px-5 py-3 rounded-full mt-2" to="/contact">
                Book a Discovery Call
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        {children}
      </main>

      <footer data-testid="site-footer" className="bg-obsidian text-slate-300">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block">
                <img alt="Integr8 Cloudware" className="h-8 w-auto invert mix-blend-screen" src="/i8cw_T.png" />
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-sm">
                Enterprise integration consultancy for NetSuite, Celigo, and Oracle Integration Cloud. We connect any ERP to any marketplace, any 3PL, anywhere in the world — flawlessly.
              </p>
              <a href="mailto:hello@integr8cloudware.com" data-testid="footer-email-link" className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-electric-glow transition-colors group">
                <Mail className="w-4 h-4" /> hello@integr8cloudware.com
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 mb-5">Services</p>
              <ul className="space-y-3">
                <li><Link className="text-sm hover:text-white transition-colors duration-300" to="/services#netsuite">NetSuite Consultancy</Link></li>
                <li><Link className="text-sm hover:text-white transition-colors duration-300" to="/services#celigo">Celigo Integration</Link></li>
                <li><Link className="text-sm hover:text-white transition-colors duration-300" to="/services#oic">Oracle Integration Cloud</Link></li>
                <li><Link className="text-sm hover:text-white transition-colors duration-300" to="/services#marketplaces">Marketplace Connectors</Link></li>
                <li><Link className="text-sm hover:text-white transition-colors duration-300" to="/services#3pl">3PL & Logistics</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 mb-5">Company</p>
              <ul className="space-y-3">
                <li><Link data-testid="footer-link-about" className="text-sm hover:text-white transition-colors duration-300" to="/about">About Us</Link></li>
                <li><Link data-testid="footer-link-case-studies" className="text-sm hover:text-white transition-colors duration-300" to="/case-studies">Case Studies</Link></li>
                <li><Link data-testid="footer-link-careers" className="text-sm hover:text-white transition-colors duration-300" to="/careers">Careers</Link></li>
                <li><Link data-testid="footer-link-blog" className="text-sm hover:text-white transition-colors duration-300" to="/blog">Insights</Link></li>
                <li><Link data-testid="footer-link-contact" className="text-sm hover:text-white transition-colors duration-300" to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 mb-5">Global</p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-electric-glow shrink-0" />
                  <span>Serving enterprises across 6 continents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 mt-0.5 text-electric-glow shrink-0" />
                  <span>Response within one business day</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">© 2026 Integr8 Cloudware. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 text-center sm:text-right max-w-xl">
              NetSuite, Celigo, Oracle, Amazon, Walmart, Shopify, eBay and Target are trademarks of their respective owners. Integr8 Cloudware is an independent consultancy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
