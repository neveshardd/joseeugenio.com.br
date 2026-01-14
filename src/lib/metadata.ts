import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://joseeugenio.com.br"),
  title: {
    default: "José Eugênio | Portfólio de Arquitetura",
    template: "%s | José Eugênio",
  },
  description: "Portfólio de José Eugênio - Arquitetura Moderna, BIM e Visualização Arquitetônica.",
  keywords: ["Arquitetura", "BIM", "Revit", "Render", "ArchViz", "José Eugênio", "Portfólio"],
  authors: [{ name: "José Eugênio" }],
  creator: "José Eugênio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joseeugenio.com.br",
    title: "José Eugênio | Portfólio de Arquitetura",
    description: "Portfólio de José Eugênio - Arquitetura Moderna, BIM e Visualização Arquitetônica.",
    siteName: "José Eugênio Arquiteto",
    images: [
      {
        url: "/og-image.jpg", // Needs to be created or mapped to a real image
        width: 1200,
        height: 630,
        alt: "José Eugênio Portfólio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};
