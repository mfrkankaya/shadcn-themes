import React from "react"

import { ExampleHome } from "@/components/examples/example-home"
import { Gtag } from "@/components/gtag"
import { ThemeGeneratorForm } from "@/features/theme-generator-form"

export default function HomePage() {
  return (
    <>
      <Gtag
        data={[
          "event",
          "page_view",
          { page_title: "Home", page_location: "/", page_path: "/" },
        ]}
      />
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
