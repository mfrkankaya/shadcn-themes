"use client"

import ReactGA from "react-ga"
import { useEffectOnce } from "react-use"

import { GTAG_ID } from "@/constants/config"

export function GtagPageView() {
  useEffectOnce(() => {
    ReactGA.initialize(GTAG_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  })

  return null
}
