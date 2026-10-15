'use client';

import React from 'react';
import {
  Trophy,
  Users2,
  Sparkles,
  Heart,
  Globe2,
  Medal,
  ArrowRight,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { KUMUD_WHATSAPP_NUMBER, AKOSA_WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { useModals } from '@/components/ClientLayoutWrapper';

export default function IndiNigerFCSection() {
  const { openEnquiryModal } = useModals();

  const movementPoints = [
    {
      title: 'Youth Development',
      desc: 'Grassroots football academies providing professional coaching and life skills.',
      icon: Users2,
      color: 'from-amber-400 to-yellow-500',
    },
    {
      title: 'Sports & Fitness',
      desc: 'Promoting athletic discipline, health, and wellness across communities.',
      icon: Medal,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Talent Discovery',
      desc: 'Scouting raw talent in Nigeria and India for international club trials.',
      icon: Sparkles,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Community Engagement',
      desc: 'Uniting local neighborhoods through sports clinics and exhibition matches.',
      icon: Heart,
      color: 'from-rose-400 to-pink-500',
    },
    {
      title: 'India - Nigeria Friendship',
      desc: 'Cultural diplomacy strengthening ties between Asian and African nations.',
      icon: Globe2,
      color: 'from-indigo-400 to-purple-500',
    },
    {
      title: 'International Tournaments',
      desc: 'Competing in prestigious youth conclaves, global friendly cups, and showcases.',
      icon: Trophy,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="indiniger-fc">
      {/* Decorative Stadium Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-600/15 via-amber-500/10 to-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Header Badge */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider shadow-lg">
            <span>⚽ SPORTS DIPLOMACY &middot; COMMUNITY IMPACT &middot; YOUTH EMPOWERMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            IndiNiger FC &mdash;{' '}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              My Own Football Team
            </span>
          </h2>

          <p className="text-base sm:text-xl font-bold text-amber-200">
            &ldquo;Sports Brings People Together, Business Builds Nations.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded by <strong>Kumud Ghameti</strong> as an integral social pillar of IndiNiger BizHub, IndiNiger FC uses the unifying power of football to discover athletic talent, foster youth employment, and cement fraternal bonds between India and Nigeria.
          </p>
        </div>

        {/* Master Showcase Banner Grid */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 rounded-3xl p-6 sm:p-10 border-2 border-amber-400/50 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Team Photo & Emblem */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl group bg-slate-950">
                <img
                  src="/indiniger-fc-ecosystem.jpg"
                  alt="IndiNiger FC Team & Movement"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/60 text-amber-300 text-[11px] font-black tracking-wider uppercase">
                  ⚽ PLAY FOR UNITY &middot; PLAY FOR A BETTER TOMORROW
                </div>
              </div>
              <p className="text-xs text-slate-400 text-center sm:text-left italic">
                IndiNiger FC Squad with Founder &amp; CEO Kumud Ghameti &mdash; Bridging communities through athletic excellence.
              </p>
            </div>

            {/* Right: Movement Box */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                  MORE THAN A TEAM
                </span>
                <h3 className="text-2xl font-black text-white">IT&apos;S A MOVEMENT</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Empowering the next generation of leaders, athletes, and global ambassadors.
                </p>
              </div>

              {/* 6 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {movementPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-all space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-tr ${item.color} text-slate-950 flex items-center justify-center shrink-0 shadow-xs`}
                        >
                          <Icon className="w-3.5 h-3.5 font-black" />
                        </div>
                        <h4 className="text-xs font-black text-white">{item.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${KUMUD_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    'Hello Kumud Ghameti, I am interested in partnering / supporting IndiNiger FC sports movement.'
                  )}`}
                  target="_top"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Sponsor or Support IndiNiger FC</span>
                </a>

                <button
                  onClick={() =>
                    openEnquiryModal({
                      title: 'IndiNiger FC Partnership & Sponsorship',
                      subtitle: 'Connect with Kumud Ghameti regarding youth academy and sports diplomacy programs.',
                      targetEntity: 'IndiNiger FC Sports',
                      type: 'business_inquiry',
                    })
                  }
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
