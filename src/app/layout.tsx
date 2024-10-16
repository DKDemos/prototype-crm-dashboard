import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';
import Menu from '@/app/components/Menu';
import Header from '@/app/components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'CRM',
  description: 'New CRM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-row font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <section className='w-2/12'>
          <Menu />
        </section>

        <main className='flex w-10/12 flex-col overflow-y-auto bg-gray-600'>
          <Header />
          <div className='px-8 pb-6 pt-20'>{children}</div>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
