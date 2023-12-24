import "./globals.css"

import type { Metadata } from "next"
import Script from "next/script"
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
      <head>
        <Script id="google-tag-manager">
          {`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRCZHWB4');</script>
<!-- End Google Tag Manager -->`}
        </Script>
      </head>
      <body>
        <Script id="google-tag-manager-noscript">
          {`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRCZHWB4"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`}
        </Script>
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
