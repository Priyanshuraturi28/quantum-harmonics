import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quantm Harmonics",
  description:
    "Quantm Harmonics designs and manufactures world-class high-end audio systems focused on true musical realism.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50`}
      >
        {/* GLOBAL NAVBAR */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
