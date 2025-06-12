import React from "react"
import Link from "next/link"
import { BsGithub, BsTwitterX } from "react-icons/bs"

import { ThemeToggler } from "./theme-toggler"
import { Button } from "./ui/button"

export default function Appheader() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between py-2">
        <Link href="/" className="font-bold">
          Shadcn UI Themes
        </Link>

        <div className="flex items-center gap-0.5 -mr-2">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/mfrkankaya/shadcn-themes"
              target="_blank"
            >
              <BsGithub size={16} />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://twitter.com/mfrkankaya" target="_blank">
              <BsTwitterX size={16} />
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </div>
    </div>
  )
}
