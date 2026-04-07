import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna | Product Designer",
  description: "Simplifying complex SaaS products into intuitive, high-converting experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
