import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://indiniger-bizhub.vercel.app'),
  title: 'IndiNiger BizHub — Global Business Marketplace',
  description: 'One Global Platform. Endless Business Possibilities. Discover 62 industry sectors across 57 countries. Direct WhatsApp connect: +91 99901 55699.',
  keywords: [
    'IndiNiger BizHub',
    'Global Business Marketplace',
    'International Business Network',
    'Business Directory',
    'Global Trade Opportunities',
    'Business Networking Platform',
    'International Exhibitions',
    'Industry Directory',
    'India Niger Trade',
    'Kumud Gameti',
  ],
  authors: [{ name: 'Kumud Gameti' }, { name: 'IndiNiger BizHub Secretariat' }],
  openGraph: {
    title: 'IndiNiger BizHub — Global Business Marketplace',
    description: 'One Global Platform. Endless Business Possibilities. Connecting 62 industry categories across 57 countries with direct WhatsApp lead routing.',
    url: 'https://indiniger-bizhub.vercel.app',
    siteName: 'IndiNiger BizHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IndiNiger BizHub — Global Business Marketplace',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndiNiger BizHub — Global Business Marketplace',
    description: 'One Global Platform. Endless Business Possibilities. Connect with 57 global hubs.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bizhub-lightBg text-bizhub-black antialiased selection:bg-bizhub-gold selection:text-bizhub-black">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
