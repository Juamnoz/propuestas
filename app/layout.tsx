import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIC Studio · Propuesta Modulartess",
  description:
    "Propuesta comercial AIC Studio para Modulartess · Meta Ads · Agentes IA · Métricas 24h",
  openGraph: {
    title: "AIC Studio · Propuesta Modulartess",
    description: "IA para tus campañas. Meta Ads optimizado en vivo.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
