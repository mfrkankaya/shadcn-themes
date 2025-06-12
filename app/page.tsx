import React from "react"

import { CardsActivityGoal } from "@/components/examples/activity-goal"
import { CardsChat } from "@/components/examples/chat-demo"
import { CardsCreateAccount } from "@/components/examples/create-account"
import { CardsTeamMembers } from "@/components/examples/team-members"
import ThemeGeneratorForm from "@/components/theme-generator-form/theme-generator-form"

export default function HomePage() {
  return (
    <>
      <div className="container pt-16 pb-32 relative">
        <div className="mt-4 md:mt-12 mb-8 md:mb-16 flex flex-col items-center relative">
          <div className="mx-auto text-left sm:text-center">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mx-auto max-w-2xl mb-4">
              Create Custom Themes for Shadcn/UI Components
            </h1>
            <p className="max-w-xl mx-auto mt-2 text-muted-foreground">
              Create beautiful, customized themes for your shadcn/ui components instantly. 
              Select your brand colors and get ready-to-use CSS variables for a consistent, 
              professional design system that matches your brand identity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CardsCreateAccount />
          <CardsActivityGoal />
          <CardsTeamMembers />
          <CardsChat />
        </div>
        <div className="sticky bottom-12 mt-12">
          <ThemeGeneratorForm />
        </div>
      </div>
    </>
  )
}
