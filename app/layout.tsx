import type { Metadata } from 'next';

import { poppins400 } from '@/fonts';



import './globals.css';



import SiteFooter from '@/components/SiteFooter/MainFooter';
import MainSiteHeader from '@/components/SiteNav/Header';


export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    default: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  applicationName: process.env.NEXT_PUBLIC_APP_NAME,
  keywords: ['keywords'],
  generator: 'Next.js',
  authors: [{ name: 'Anthony Legg', url: 'https://github.com/leggant' }],
  creator: 'Anthony Legg',
  publisher: `${process.env.NEXT_PUBLIC_APP_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins400} grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
        <div className='flex min-h-screen flex-col'>
          <MainSiteHeader />
          <main className='container'>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}