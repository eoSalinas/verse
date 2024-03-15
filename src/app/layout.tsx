import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Versículo do dia',
    'Fé diária',
    'Versículo',
    'Bíblia',
    'Palavra diária da Bíblia',
    'Mensagem da Bíblia',
    'Encorajamento diário',
    'Palavra de Deus diária',
    'Sabedoria bíblica diária',
    'Versículo diário',
    'Palavra de vida diária',
    'Versículo para reflexão diária',
  ],
  authors: [
    {
      name: 'salinas',
      url: 'https://github.com/eoSalinas/',
    },
  ],
  creator: 'salinas',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@_eosalinas',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
