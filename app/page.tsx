import React, { Fragment } from "react"

import { COMPONENT_DEMOS } from "@/constants/component-demos"
import { ThemeToggler } from "@/components/theme-toggler"

export default function HomePage() {
  return (
    <div className="container pt-16 pb-32 flex flex-col gap-16">
      <ThemeToggler />

      {COMPONENT_DEMOS.map(({ name, component }) => (
        <Fragment key={name}>{component}</Fragment>
      ))}
    </div>
  )
}
