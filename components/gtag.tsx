"use client"

import { useEffectOnce } from "react-use"

import { gtag } from "@/lib/utils"

export function Gtag({ data }: { data: any[] }) {
  useEffectOnce(() => {
    gtag(data)
  })

  return null
}
