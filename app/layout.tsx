import "./globals.css"

import type { Metadata } from "next"
import Script from "next/script"
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
  title: "Generate Theme - Shadcn/UI Theme Generator",
  description:
    "Theme generator for shadcn/ui components. Generate a theme for your app by selecting a color and copy-pasting the generated css variables.",
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
        <Script
          src="https://ingest.useturtle.com/script/turtle.min.js"
          data-tid="THFKAYA"
          defer
        />
      </body>
    </html>
  )
}
