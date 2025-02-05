import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Countdown } from '@/components/countdown'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toogle'
import { VerseLogo } from '@/components/VerseLogo'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], fallback: ['sans-serif'] })

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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('h-screen antialiased', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="absolute top-0 z-50 flex h-16 w-full items-center justify-between px-4">
            <VerseLogo className="h-auto w-8" />
            <div className="space-x-4 md:space-x-12">
              <Countdown />
              <ThemeToggle />
            </div>
          </header>

          {children}

          <footer className="absolute bottom-0 left-0 right-0 flex h-10 w-full items-center justify-center px-4 py-2 text-sm text-gray-500 sm:px-6">
            &copy; {new Date().getFullYear()} | Verse
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
