import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Endodoncia en Viña del Mar - Dra. María Ignacia Moenne | Tratamiento de Conducto",
  description:
    "Especialista en endodoncia en Viña del Mar. Tratamiento de conducto sin dolor con tecnología avanzada. Agenda tu hora.",
  keywords: "endodoncia, tratamiento de conducto, dentista Viña del Mar, dolor de muelas, especialista endodoncia",
  openGraph: {
    title: "Endodoncia en Viña del Mar - Dra. María Ignacia Moenne",
    description: "Especialista en endodoncia con tecnología avanzada. Consulta sin costo online.",
    type: "website",
    locale: "es_CL",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
}

export default function HomePage() {
  return <ClientPage />
}
