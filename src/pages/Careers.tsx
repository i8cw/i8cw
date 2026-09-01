import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Briefcase } from 'lucide-react';
// import { jobPostings } from '../data/jobs';
import { jobPostings, careerSettings } from '../data/jobs';

export const Careers = () => {
    return (
        <div className="pt-[76px] min-h-screen bg-obsidian flex flex-col">
            {/* Hero Section */}
            <section className="relative px-5 sm:px-8 lg:px-12 pt-24 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent pointer-events-none" />
                <div className="max-w-[1440px] mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-electric text-sm font-medium mb-6"
                        >
                            <Briefcase className="w-4 h-4" />
                            <span>Join the Team</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-white leading-tight tracking-tight mb-8"
                        >
                            Build the future of enterprise integration.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-400 leading-relaxed max-w-2xl"
                        >
                            We are a team of problem solvers, architects, and engineers dedicated to connecting the world's most complex enterprise systems. Explore our open roles below.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="px-5 sm:px-8 lg:px-12 py-24 flex-grow bg-white text-obsidian">
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-display font-semibold tracking-tight">Open Positions</h2>
                        <p className="text-slate-600 mt-3">
                            Don't see a perfect fit? Send your resume to hello@integr8cloudware.com
                        </p>
                    </div>

                    {jobPostings.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6">
                            {jobPostings.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-electric/5 transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="px-3 py-1 text-xs font-medium bg-electric/10 text-electric rounded-full">
                                                    {job.department}
                                                </span>
                                                <span className="px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700 rounded-full">
                                                    {job.location}
                                                </span>
                                                <span className="px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700 rounded-full">
                                                    {job.type}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-electric transition-colors">
                                                {job.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
                                                {job.description}
                                            </p>

                                            <div>
                                                <h4 className="text-sm font-semibold text-obsidian uppercase tracking-wider mb-3">Requirements</h4>
                                                <ul className="list-disc list-inside text-slate-600 space-y-1.5">
                                                    {job.requirements.map((req, i) => (
                                                        <li key={i}>{req}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <a
                                                href="https://forms.gle/PuH5T3TbBqBeRUfR8"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-white rounded-full font-medium hover:bg-electric transition-colors duration-300 whitespace-nowrap"
                                            >
                                                Apply Now
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>

                                        {/* <div className="pt-2">
                      <a 
                        href={`mailto:hello@integr8cloudware.com?subject=Application for ${job.title}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-white rounded-full font-medium hover:bg-electric transition-colors duration-300 whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div> */}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                   ) : (
            <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-medium text-obsidian mb-2">{careerSettings.emptyStateTitle}</h3>
              <p className="text-slate-600">{careerSettings.emptyStateMessage}</p>
            </div>
          )}
                    
                </div>
            </section>
        </div>
    );
};
