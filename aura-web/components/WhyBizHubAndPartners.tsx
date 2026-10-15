'use client';

import React from 'react';
import {
  ArrowLeftRight,
  Layers,
  Users2,
  Globe2,
  HelpCircle,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Building,
  Flag,
  Award,
  Sparkles,
} from 'lucide-react';

export default function WhyBizHubAndPartners() {
  const whyPoints = [
    {
      title: 'India – Nigeria Cross Border Trade',
      desc: 'Direct bilateral clearing, reducing transaction friction and intermediaries.',
      icon: ArrowLeftRight,
    },
    {
      title: 'Multiple Business Categories Under One Platform',
      desc: '100 commercial sectors accessible seamlessly under one roof.',
      icon: Layers,
    },
    {
      title: 'Strong Network & Partnerships',
      desc: 'Verified chamber relationships, sovereign backing, and verified supplier credentials.',
      icon: Users2,
    },
    {
      title: 'Access to Global Markets',
      desc: 'Expanding enterprise footprints across 125+ emerging economies worldwide.',
      icon: Globe2,
    },
    {
      title: 'Business Support & Guidance',
      desc: 'Executive advisory directly from Co-Founders Kumud Ghameti & Akosa Chidozie.',
      icon: HelpCircle,
    },
    {
      title: 'Growth & Profit Opportunities',
      desc: 'Unlocking high-margin cross-border contracts, joint ventures, and FDI investments.',
      icon: TrendingUp,
    },
    {
      title: 'Community Development',
      desc: 'Fostering local youth employment, skills training, and IndiNiger FC athletic programs.',
      icon: HeartHandshake,
    },
  ];

  const partners = [
    { title: 'Indian Companies', desc: 'Leading manufacturers, EPC builders, pharmaceutical exporters, and IT service providers.', flag: '🇮🇳' },
    { title: 'Nigerian Companies', desc: 'Conglomerates, agricultural producers, mineral concession holders, and distributors.', flag: '🇳🇬' },
    { title: 'Global Brands', desc: 'Multinational corporations expanding market share in fast-growing emerging markets.', flag: '🌍' },
    { title: 'Suppliers & Distributors', desc: 'Accredited wholesale suppliers, cold-chain distributors, and logistics clearing agents.', flag: '📦' },
    { title: 'Investors & Sponsors', desc: 'Private equity firms, venture funds, family offices, and cross-border syndicates.', flag: '💼' },
    { title: 'Government & Trade Bodies', desc: 'Export promotion councils, bilateral chambers of commerce, and ministries of trade.', flag: '🏛️' },
    { title: 'International Organizations', desc: 'Multilateral trade development agencies, youth foundations, and industry alliances.', flag: '🌐' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
            STRATEGIC VALUE &amp; ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Why IndiNiger BizHub?{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              &amp; Our Business Partners
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Built on mutual trust, verifiable credentials, and deep commercial corridors connecting Asia, Africa, and global markets.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Why IndiNiger BizHub? */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-amber-400/40 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <h3 className="text-lg sm:text-xl font-black text-amber-300 uppercase tracking-wide">
                    WHY IndiNiger BizHub?
                  </h3>
                </div>
                <span className="text-[11px] text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                  7 Core Advantages
                </span>
              </div>

              <div className="space-y-3.5 mt-5">
                {whyPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-400/40 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-black text-white">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quote Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-400/40 text-center">
              <span className="text-base sm:text-lg font-black text-amber-300 italic tracking-wide">
                &ldquo;Together, We Build Bigger Dreams.&rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Our Business Partners */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-blue-400/40 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <h3 className="text-lg sm:text-xl font-black text-blue-300 uppercase tracking-wide">
                    OUR BUSINESS PARTNERS
                  </h3>
                </div>
                <span className="text-[11px] text-blue-400 font-bold bg-blue-400/10 px-2.5 py-1 rounded-full border border-blue-400/30">
                  Global Alliances
                </span>
              </div>

              <div className="space-y-3.5 mt-5">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-400/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 text-lg flex items-center justify-center shrink-0 shadow-sm">
                      {partner.flag}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-black text-white">{partner.title}</h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{partner.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bilateral Seal Showcase */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 border border-blue-400/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-400 bg-slate-950 shrink-0">
                  <img src="/co-founders-bilateral-seal.jpg" alt="Bilateral Seal" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-black text-white block">India &bull; Nigeria &bull; World</span>
                  <span className="text-[10px] text-slate-300">125+ Partner Countries Connected</span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase text-amber-400 border border-amber-400/40 px-2 py-1 rounded-lg">
                Official Corridor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
