'use client';

import React, { useState } from 'react';
import { Phone, ChevronUp, X, Sparkles } from 'lucide-react';
import { KUMUD_WHATSAPP_NUMBER, AKOSA_WHATSAPP_NUMBER } from '@/lib/whatsapp';

export default function FloatingWhatsAppButton() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const kumudWhatsAppUrl = `https://wa.me/${KUMUD_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Kumud Gameti, I am reaching out through IndiNiger BizHub to discuss business opportunities with the India Secretariat.'
  )}`;

  const akosaWhatsAppUrl = `https://wa.me/${AKOSA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Akosa Chidozie Okwuchukwu, I am reaching out through IndiNiger BizHub to discuss business opportunities with the Nigeria Hub.'
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp contact with Co-Founders"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Popover Card for Bilateral Desks */}
      {popoverOpen && (
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl p-4 w-72 sm:w-80 space-y-3 mb-2 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Direct WhatsApp Desks
              </span>
            </div>
            <button
              onClick={() => setPopoverOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-500">
            Select a regional Co-Founder desk to open direct verified WhatsApp communication:
          </p>

          <div className="space-y-2">
            {/* India Hub Desk */}
            <a
              href={kumudWhatsAppUrl}
              target="_top"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-400 bg-slate-900 shrink-0">
                <img src="/kumud-gameti.jpg" alt="Kumud Gameti" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span className="text-[10px] font-extrabold uppercase text-amber-700 block">
                  🇮🇳 India Hub &middot; Founder
                </span>
                <span className="text-xs font-black text-slate-900 block truncate group-hover:text-emerald-700">
                  Kumud Gameti
                </span>
                <span className="text-[10px] text-slate-500 font-mono">+91 99901 55699</span>
              </div>
            </a>

            {/* Nigeria Hub Desk */}
            <a
              href={akosaWhatsAppUrl}
              target="_top"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-400 bg-slate-900 shrink-0">
                <img src="/akosa-chidozie.jpg" alt="Akosa Chidozie Okwuchukwu" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span className="text-[10px] font-extrabold uppercase text-emerald-700 block">
                  🇳🇬 Nigeria Hub &middot; Co-Founder
                </span>
                <span className="text-xs font-black text-slate-900 block truncate group-hover:text-teal-700">
                  Akosa Chidozie Okwuchukwu
                </span>
                <span className="text-[10px] text-slate-500 font-mono">+234 916 535 5448</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Button Row */}
      <div className="flex items-center gap-3">
        {/* Desktop Quick Hint */}
        {!popoverOpen && (
          <div
            onClick={() => setPopoverOpen(true)}
            className="hidden sm:flex flex-col items-end bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-200 text-xs cursor-pointer hover:border-emerald-400 transition-all"
          >
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online on WhatsApp</span>
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              🇮🇳 Kumud (+91) &middot; 🇳🇬 Akosa (+234)
            </span>
          </div>
        )}

        {/* Floating CTA Button */}
        <button
          onClick={() => setPopoverOpen(!popoverOpen)}
          aria-label="Direct WhatsApp chat with Co-Founders"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
          </span>
          <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
    </aside>
  );
}
