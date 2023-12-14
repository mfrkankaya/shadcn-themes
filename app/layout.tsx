import "./globals.css"

import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { DevThemeToggler } from "@/components/dev-theme-toggler"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSync } from "@/components/theme-sync"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          {children}
          <DevThemeToggler />
          <ThemeSync />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
