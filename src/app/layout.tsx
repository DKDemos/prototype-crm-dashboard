import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "./components/Menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] flex flex-row h-screen`}>

        <section className="w-2/12">
          <Menu />
        </section>

        <main className="w-10/12 bg-gray-600 flex flex-col overflow-y-auto">
          {/* <Header /> */}
          <div className="p-8">
          {children}
          </div>
          {/* <Footer /> */}
        </main>

      </body>
    </html>
  );
}
