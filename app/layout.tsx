import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from '@/components/SiteHeader'
import { inter } from './fonts'



export const metadata: Metadata = {
  title: 'Mindful Zone',
  description: 'Mindful Zone for multi app in one website, Todolist, CountDown timer, Notes, QuranPlayer and more...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
