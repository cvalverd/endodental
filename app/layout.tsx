import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Endodoncia en Viña del Mar - Dra. María Ignacia Moenne",
  description: "Especialista en endodoncia en Viña del Mar. Tratamiento de conducto sin dolor con tecnología avanzada.",
  keywords: "endodoncia, tratamiento de conducto, dentista Viña del Mar, dolor de muelas",
  authors: [{ name: "Dra. María Ignacia Moenne" }],
  creator: "Endodoncia Viña",
  publisher: "Endodoncia Viña",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://endodoncia-vina.vercel.app",
    siteName: "Endodoncia Viña",
    title: "Endodoncia en Viña del Mar - Dra. María Ignacia Moenne",
    description: "Especialista en endodoncia con tecnología avanzada. Consulta sin costo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Endodoncia Viña del Mar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endodoncia en Viña del Mar - Dra. María Ignacia Moenne",
    description: "Especialista en endodoncia con tecnología avanzada. Consulta sin costo.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#2563eb",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://endodoncia-vina.vercel.app" />
        <meta name="geo.region" content="CL-VS" />
        <meta name="geo.placename" content="Viña del Mar" />
        <meta name="geo.position" content="-33.0245;-71.5518" />
        <meta name="ICBM" content="-33.0245, -71.5518" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
