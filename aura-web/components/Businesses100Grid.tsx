'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  Phone,
  ArrowRight,
  Filter,
  CheckCircle2,
  ExternalLink,
  Layers,
  Building2,
  Globe,
  Maximize2,
  X,
} from 'lucide-react';
import { BUSINESSES_100, BUSINESS_CLUSTERS, BusinessSector } from '@/data/businesses100';
import { KUMUD_WHATSAPP_NUMBER, AKOSA_WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { useModals } from '@/components/ClientLayoutWrapper';

interface Businesses100GridProps {
  initialLimit?: number;
  showAllByDefault?: boolean;
}

export default function Businesses100Grid({
  initialLimit = 100,
  showAllByDefault = true,
}: Businesses100GridProps) {
  const { openEnquiryModal } = useModals();
  const [selectedCluster, setSelectedCluster] = useState<string>('All 100 Businesses');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);
  const [selectedSector, setSelectedSector] = useState<BusinessSector | null>(null);

  const filteredBusinesses = useMemo(() => {
    return BUSINESSES_100.filter((item) => {
      const matchesCluster =
        selectedCluster === 'All 100 Businesses' || item.cluster === selectedCluster;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.cluster.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.sampleOfferings.some((offering) => offering.toLowerCase().includes(q)) ||
        item.id.toString() === q;

      return matchesCluster && matchesSearch;
    });
  }, [selectedCluster, searchQuery]);

  const handleWhatsAppEnquiry = (sector: BusinessSector, director: 'kumud' | 'akosa' = 'kumud') => {
    const number = director === 'kumud' ? KUMUD_WHATSAPP_NUMBER : AKOSA_WHATSAPP_NUMBER;
    const recipient = director === 'kumud' ? 'Kumud Ghameti' : 'Akosa Chidozie Okwuchukwu';
    const message = `🌟 *BUSINESS OPPORTUNITY ENQUIRY — INDINIGER BIZHUB* 🌟\n\nHello ${recipient},\nI am interested in connecting regarding Sector #${sector.id}: *${sector.name}* (${sector.cluster}).\n\n📌 *Corridor Focus:* ${sector.bilateralFocus}\n📦 *Sample Interests:* ${sector.sampleOfferings.join(', ')}\n\nPlease connect me with verified suppliers, exporters, and investment partners in this sector.`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_top');
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden" id="100-businesses">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>ONE WEBSITE &middot; 100 BUSINESSES &middot; COUNTLESS OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Explore All{' '}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              100 Commercial Verticals
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From Agriculture, Heavy Steel, and Renewable Energy to Pharmaceuticals, Defense, IT, and International Shipping &mdash; discover certified cross-border business opportunities spanning{' '}
            <strong className="text-white">India 🇮🇳, Nigeria 🇳🇬, and 125+ Global Markets</strong>.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setPosterModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-amber-300 text-xs font-bold flex items-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>View Official 100 Businesses Poster</span>
            </button>

            <a
              href="#indiniger-fc"
              className="px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <span>⚽ IndiNiger FC Movement</span>
            </a>
          </div>
        </div>

        {/* Search & Cluster Filter Bar */}
        <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-5 border border-slate-800 shadow-2xl space-y-4">
          {/* Top Search Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by sector (e.g. Agriculture, Steel, Solar, Pharma, 3D Printing, #45)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-slate-400 font-mono px-3 py-2 bg-slate-900 rounded-xl border border-slate-800 whitespace-nowrap self-stretch sm:self-auto flex items-center justify-center">
              Showing <strong className="text-amber-400 mx-1">{filteredBusinesses.length}</strong> of 100
            </div>
          </div>

          {/* Cluster Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            {BUSINESS_CLUSTERS.map((cluster) => {
              const isActive = selectedCluster === cluster;
              return (
                <button
                  key={cluster}
                  onClick={() => setSelectedCluster(cluster)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 border-amber-400 shadow-md font-black'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800 hover:text-white'
                  }`}
                >
                  {cluster}
                </button>
              );
            })}
          </div>
        </div>

        {/* 100 Businesses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredBusinesses.map((biz) => (
            <div
              key={biz.id}
              className="bg-slate-950/70 hover:bg-slate-950 border border-slate-800/80 hover:border-amber-400/60 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent border line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                style={{
                  background: `linear-gradient(to right, ${biz.themeColor}, #F59E0B)`,
                }}
              />

              <div className="space-y-3">
                {/* Header row: Number badge & cluster */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white shadow-md font-mono shrink-0"
                    style={{ backgroundColor: biz.themeColor }}
                  >
                    #{biz.id}
                  </span>

                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 truncate">
                    {biz.cluster}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                    {biz.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {biz.shortDesc}
                  </p>
                </div>

                {/* Bilateral focus highlight */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-amber-200/90 leading-snug">
                  <span className="text-[9px] uppercase font-bold text-amber-400 block mb-0.5">
                    🇮🇳 🇳🇬 Corridor Focus:
                  </span>
                  {biz.bilateralFocus}
                </div>

                {/* Sample Offerings Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {biz.sampleOfferings.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                  {biz.sampleOfferings.length > 3 && (
                    <span className="text-[10px] text-slate-500 font-mono self-center">
                      +{biz.sampleOfferings.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center gap-2">
                {/* Direct WhatsApp button (India Hub default) */}
                <button
                  onClick={() => handleWhatsAppEnquiry(biz, 'kumud')}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                  title="Enquire on WhatsApp with Kumud Ghameti"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Enquire</span>
                </button>

                {/* RFP / Proposal button */}
                <button
                  onClick={() =>
                    openEnquiryModal({
                      title: `Enquiry: Sector #${biz.id} — ${biz.name}`,
                      subtitle: `Submit direct trade or investment proposal for ${biz.name} in the India-Nigeria corridor.`,
                      targetEntity: biz.name,
                      type: 'business_inquiry',
                    })
                  }
                  className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer"
                  title="Send Detailed Proposal"
                >
                  <span>RFQ</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-16 bg-slate-950 rounded-3xl border border-slate-800 p-8 space-y-4">
            <Layers className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No businesses match your search</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try searching for broader keywords like &quot;Food&quot;, &quot;Steel&quot;, &quot;Solar&quot;, &quot;Pharma&quot;, or click &quot;All 100 Businesses&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCluster('All 100 Businesses');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Official 100 Businesses Poster Lightbox Modal */}
      {posterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-6xl w-full max-h-[92vh] bg-slate-950 rounded-3xl border-2 border-amber-400/80 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="text-xs sm:text-sm font-black text-white">
                  IndiNiger BizHub — Official 100 Businesses Master Poster
                </span>
              </div>
              <button
                onClick={() => setPosterModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image Viewer */}
            <div className="overflow-auto flex-1 p-2 sm:p-4 flex items-center justify-center bg-black">
              <img
                src="/100-businesses-poster.jpg"
                alt="IndiNiger BizHub 100 Businesses Master Poster"
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                100 Businesses &middot; Global Trade &middot; Investment &middot; Property &middot; Growth
              </span>
              <a
                href={`https://wa.me/${KUMUD_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Hello Kumud Ghameti, I viewed the 100 Businesses Master Poster on IndiNiger BizHub and want to discuss opportunities.'
                )}`}
                target="_top"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Desk: +91 99901 55699</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
