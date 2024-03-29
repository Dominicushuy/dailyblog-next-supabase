import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/nav/Navbar'
import Container from '@/components/@core/Container'
import SessisonProvider from '@/components/SessisonProvider'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://dailyblog-next-supabase.vercel.app/"),

  title: {
    template: "%s | Daily Blog",
    default: "Daily Blog",
  },
  authors: {
    name: "Dominicushuy",
  },

  description:
    "Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
  openGraph: {
    title: "Daily Blog",
    description:
      "Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
    url: "https://dailyblog-next-supabase.vercel.app/",
    siteName: "Daily Blog",
    images: "/og.png",
    type: "website",
  },
  keywords: ['Dominicushuy', 'nextjs', 'supabase', 'blog'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <Container>
            <Navbar />
            {children}
          </Container>
        </ThemeProvider>
        <Toaster />
        <SessisonProvider />
      </body>
    </html>
  )
}
