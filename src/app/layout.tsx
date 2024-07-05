import type { Metadata } from "next";
import { urbanist } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinTechX"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${urbanist.className}`}>{children}</body>
    </html>
  );
}
