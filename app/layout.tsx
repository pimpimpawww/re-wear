import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RE WEAR RI - Fashion Marketplace",
  description: "Your sustainable fashion marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-md mx-auto bg-white">{children}</body>
    </html>
  );
}
