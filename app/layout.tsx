import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";

export const metadata: Metadata = {
  title: {
    default: "Speical Hotel",
    template: "%s | Hotel",
  },
  description: "Created By Niroyan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full text-gray-800 font-mono relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
