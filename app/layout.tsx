import "./globals.css"

import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Appheader from "@/components/app-header"
import { DevThemeToggler } from "@/components/dev-theme-toggler"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSync } from "@/components/theme-sync"

export const metadata: Metadata = {
  title: "Shadcn/ui theme generator",
  description: "Shadcn/ui theme generator",
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
      </body>
    </html>
  )
}
