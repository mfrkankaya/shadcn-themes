import React from "react"
import Link from "next/link"

import { ThemeToggler } from "./theme-toggler"

export default function Appheader() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between py-2">
        <Link href="/" className="font-bold">
          shadcn/ui themes
        </Link>

        <div className="flex items-center gap-1">
          <ThemeToggler />
        </div>
      </div>
    </div>
  )
}
