import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remote",
  description: "Teste de protocolo de rede.",
  authors: [{ name: "Maicon Jacobsen Silveira" }],
  keywords: [
    "next",
    "typescript",
    "tailwind",
    "jest",
    "axios",
    "node",
    "react",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
