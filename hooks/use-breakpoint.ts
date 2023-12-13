import React from "react"

import { BREAKPOINTS, type Breakpoint } from "@/constants/breakpoints"

export default function useBreakpoint(
  breakpoint: Breakpoint,
  direction: "up" | "down" = "down"
) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(
      direction === "down"
        ? `(max-width: ${BREAKPOINTS[breakpoint]}px)`
        : `(min-width: ${BREAKPOINTS[breakpoint]}px)`
    )
    setMatches(mediaQuery.matches)

    const handler = () => setMatches(mediaQuery.matches)
    mediaQuery.addEventListener("change", handler)

    return () => mediaQuery.removeEventListener("change", handler)
  }, [breakpoint, direction])

  return matches
}
