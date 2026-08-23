import React, { useState, useEffect } from 'react';
import { Clock3, ArrowUpRight, X } from 'lucide-react';

type Block = { type: 'paragraph' | 'heading' | 'image' | 'video'; text?: string; src?: string; alt?: string; };

const generateBlocks = (title: string, excerpt: string): Block[] => [
  { type: 'heading', text: 'Executive Summary' },
  { type: 'paragraph', text: excerpt },
  { type: 'paragraph', text: `When exploring the architectural considerations for "${title}", it's imperative to look beyond the immediate integration challenge and forecast the scalability requirements over the next 36 months.` },
  { type: 'image', src: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Engineering architecture' },
  { type: 'heading', text: 'The Core Challenge' },
  { type: 'paragraph', text: 'In our experience, most enterprise systems fail not during standard operational periods, but during highly concentrated burst events. Standard point-to-point connectors are brittle; they are not engineered to gracefully queue and retry payloads when the receiving system begins to aggressively rate limit.' },
  { type: 'video', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4e/B-roll_of_Wikimedia_Foundation_servers_at_CyrusOne_in_Carrollton%2C_Texas_-_photographed_in_2015.webm/B-roll_of_Wikimedia_Foundation_servers_at_CyrusOne_in_Carrollton%2C_Texas_-_photographed_in_2015.webm.1080p.vp9.webm' },
  { type: 'paragraph', text: 'By leveraging robust middleware patterns (like pub/sub architecture and token bucket algorithms), we decouple the ingestion of data from its processing. This ensures that no data is lost during transit, even if the destination endpoint experiences prolonged downtime.' },
  { type: 'heading', text: 'Technical Implementation' },
  { type: 'paragraph', text: 'To achieve this, we rely on a combination of persistent queues and stateless processing workers. This design means that if the target endpoint goes down for 45 minutes, your integration layer simply pauses, buffers the incoming webhooks or files, and seamlessly resumes processing the exact moment the endpoint is healthy again — without a single dropped order.' }
];

const posts = [
  { category: 'NetSuite Engineering', readTime: '8 min', title: 'SuiteScript 2.1 Patterns for High-Volume Order Syncs', excerpt: 'The exact Map/Reduce and queueing patterns we use to push 10M+ orders a month through NetSuite without governor-limit meltdowns.' },
  { category: 'Architecture', readTime: '6 min', title: 'Celigo vs Custom Middleware: An Honest Architect\'s Guide', excerpt: 'When integrator.io is the right answer, when it isn\'t, and the total-cost math nobody shows you before you sign.' },
  { category: 'Oracle Integration Cloud', readTime: '7 min', title: 'OIC Adapters: Best Practices for Fusion ERP Integrations', excerpt: 'Connection pooling, staging patterns and the monitoring setup that keeps Fusion integrations alive through quarterly patches.' },
  { category: '3PL & Logistics', readTime: '5 min', title: 'Webhooks vs Polling for 3PL Shipment Events', excerpt: 'Your 3PL says they have webhooks. Here\'s why you should poll anyway — and how to do both without duplicate chaos.' },
  { category: 'Marketplaces', readTime: '6 min', title: 'Surviving Amazon SP-API Rate Limits at Scale', excerpt: 'Token buckets, feed batching and the retry discipline that keeps million-order-a-month sellers in Amazon\'s good graces.' },
  { category: 'Business Case', readTime: '4 min', title: 'The Hidden Cost of Manual Order Entry (and the ROI of Killing It)', excerpt: 'Four minutes per order sounds harmless until you do the annual maths. Here\'s the model we walk CFOs through.' }
].map(p => ({ ...p, contentBlocks: generateBlocks(p.title, p.excerpt) }));

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPost]);

  return (
    <div data-testid="blog-page">
      <section className="pt-[76px] hero-grid-bg">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-faintink font-medium">Insights & Engineering Notes</p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase text-obsidian max-w-4xl">
            <span className="block">Notes from</span>
            <span className="block"><span className="text-electric">the engine room.</span></span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-mutedink leading-relaxed max-w-2xl">Deep-dives from the architects who build these systems daily. No fluff, no vendor pitches — just what actually works.</p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <div key={i}>
              <button onClick={() => setSelectedPost(p)} data-testid={`blog-card-${i}`} className="text-left w-full h-full bg-white border border-hairline rounded-2xl p-7 group hover:border-electric hover:shadow-[0_24px_60px_rgba(0,82,255,0.09)] hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-500 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">{p.category}</span>
                  <span className="font-mono text-[10px] text-faintink flex items-center gap-1">
                    <Clock3 className="w-3 h-3" /> {p.readTime}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-lg sm:text-xl font-bold text-obsidian leading-snug group-hover:text-electric transition-colors duration-300">{p.title}</h2>
                <p className="mt-3 text-sm text-mutedink leading-relaxed flex-1">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-obsidian group-hover:text-electric transition-colors">
                  Read article<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-obsidian/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPost(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-full bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Header / Actions */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline bg-white/90 backdrop-blur-md z-10 sticky top-0">
               <div>
                 <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric font-semibold">{selectedPost.category}</span>
               </div>
               <button 
                 onClick={() => setSelectedPost(null)} 
                 className="p-2 bg-paper hover:bg-hairline rounded-full transition-colors group"
                 aria-label="Close article"
               >
                  <X className="w-5 h-5 text-mutedink group-hover:text-obsidian" />
               </button>
            </div>
            
            {/* Scrollable Article Body */}
            <div className="overflow-y-auto p-6 sm:p-10 pb-20">
               <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-obsidian mb-6 leading-[1.1]">{selectedPost.title}</h1>
               <div className="flex items-center gap-4 text-faintink mb-10 border-b border-hairline pb-8">
                 <span className="flex items-center gap-1.5 text-sm font-mono uppercase tracking-[0.1em]">
                   <Clock3 className="w-4 h-4" /> {selectedPost.readTime} read
                 </span>
               </div>
               
               <div className="max-w-2xl mx-auto">
                  {selectedPost.contentBlocks.map((block, i) => (
                    <React.Fragment key={i}>
                      {block.type === 'heading' && (
                        <h3 className="font-display text-2xl font-bold text-obsidian mt-12 mb-5">{block.text}</h3>
                      )}
                      {block.type === 'paragraph' && (
                        <p className="text-base sm:text-lg text-mutedink leading-relaxed mb-6">{block.text}</p>
                      )}
                      {block.type === 'image' && (
                        <figure className="my-10">
                          <img src={block.src} alt={block.alt} className="w-full h-auto rounded-2xl border border-hairline object-cover max-h-[400px]" />
                        </figure>
                      )}
                      {block.type === 'video' && (
                        <figure className="my-10 rounded-2xl overflow-hidden border border-hairline bg-obsidian">
                          <video src={block.src} autoPlay muted loop playsInline controls={false} className="w-full h-auto max-h-[400px] object-cover" />
                        </figure>
                      )}
                    </React.Fragment>
                  ))}
               </div>
               
               {/* Footer of modal */}
               <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-hairline flex justify-end">
                 <button 
                   onClick={() => setSelectedPost(null)} 
                   className="inline-flex items-center gap-2.5 bg-obsidian text-white font-semibold px-7 py-3 rounded-full hover:bg-electric transition-colors"
                 >
                   Close Article
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
