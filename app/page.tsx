import React from "react"

import CopyButton from "@/components/copy-button"
import { CardsActivityGoal } from "@/components/examples/activity-goal"
import { CardsChat } from "@/components/examples/chat-demo"
import { CardsCreateAccount } from "@/components/examples/create-account"
import { CardsTeamMembers } from "@/components/examples/team-members"
import ThemeGeneratorForm from "@/components/theme-generator-form/theme-generator-form"

export default function HomePage() {
  return (
    <>
      <div className="container pt-16 pb-32 relative">
        <div className="mt-12 mb-8 flex flex-col items-center relative">
          <div className="mx-auto mb-8 text-center">
            <h1 className="font-bold text-4xl max-w-xs mx-auto">
              Shadcn/UI Theme Generator
            </h1>
            <p className="max-w-md mx-auto mt-2 text-muted-foreground">
              Generate a theme for your app by selecting a color and
              copy-pasting the generated css variables.
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
