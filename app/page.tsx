import React from "react"
import { useEffectOnce } from "react-use"

import { gtag } from "@/lib/utils"
import { ExampleHome } from "@/components/examples/example-home"
import { ThemeGeneratorForm } from "@/features/theme-generator-form"

export default function HomePage() {
  useEffectOnce(() => {
    gtag("event", "page_view", {
      page_title: "Home",
      page_location: "/",
      page_path: "/",
    })
  })

  return (
    <>
      <div className="container pt-16 pb-32">
        <div className="mt-12 mb-8 sm:mb-20 flex flex-col items-center">
          <div className="mx-auto mb-8 text-center">
            <h1 className="font-bold text-4xl max-w-xs mx-auto">
              Shadcn/UI Theme Generator
            </h1>
            <p className="max-w-md mx-auto mt-2 text-muted-foreground">
              Generate a theme for your app by selecting a color and
              copy-pasting the generated css variables.
            </p>
          </div>
          <ThemeGeneratorForm />
        </div>

        <ExampleHome />
      </div>
    </>
  )
}
