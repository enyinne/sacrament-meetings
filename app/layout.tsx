
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan and organize sacrament meetings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense
          fallback={
            <header className="border-b bg-white px-6 py-4">
              Loading header...
            </header>
          }
        >
          <Header />
        </Suspense>

        <main className="flex-1">{children}</main>

        <Suspense
          fallback={
            <footer className="border-t px-6 py-4 text-center">
              Loading footer...
            </footer>
          }
        >
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
