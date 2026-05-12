import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIC Studio · Gestión Meta Ads para Modulartess",
  description:
    "Gestión de campañas Meta Ads potenciada con 2 agentes IA · Propuesta AIC Studio para Modulartess",
  openGraph: {
    title: "AIC Studio · Gestión Meta Ads + IA",
    description:
      "Gestión de campañas publicitarias Meta Ads potenciada con dos agentes IA especializados.",
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
