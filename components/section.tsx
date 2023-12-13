import React from "react"

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="w-full space-y-4">
      <h3 className="font-bold text-xl">{title}</h3>
      <div>{children}</div>
    </section>
  )
}
