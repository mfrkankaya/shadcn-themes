import "./globals.css"

import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Appheader from "@/components/app-header"
import { DevThemeToggler } from "@/components/dev-theme-toggler"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSync } from "@/components/theme-sync"

export const metadata: Metadata = {
  title:
    "Shadcn UI Theme Generator | Create Custom Color Schemes for Your UI Components",
  description:
    "Create beautiful, customized themes for your shadcn/ui components instantly. Our powerful theme generator lets you select colors and automatically generates CSS variables. Perfect for React developers using shadcn/ui to build modern, accessible web applications. Try our free theme generator tool today.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Appheader />
          {children}
          <DevThemeToggler />
          <ThemeSync />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
