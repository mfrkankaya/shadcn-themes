"use client"

import React from "react"

import Masonry, { ResponsiveMasonry } from "@/lib/masonry"

import { CardsActivityGoal } from "./activity-goal"
import { CardsCalendar } from "./calendar"
import { CardsChat } from "./chat-demo"
import { CardsCookieSettings } from "./cookie-settings"
import { CardsCreateAccount } from "./create-account"
import { CardsDataTable } from "./data-table"
import { CardsMetric } from "./metric"
import { CardsPaymentMethod } from "./payment-method"
import { CardsReportIssue } from "./report-issue"
import { CardsShare } from "./share"
import { RevenueCard, SubscriptionsCard } from "./stats"
import { CardsTeamMembers } from "./team-members"

export function ExampleHome() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2 }}>
        <Masonry gutter="1.5rem">
          <RevenueCard />
          <SubscriptionsCard />
          <CardsTeamMembers />
          <CardsChat />
          <CardsCookieSettings />
          <CardsCreateAccount />
          <CardsPaymentMethod />
          <CardsReportIssue />
        </Masonry>
      </ResponsiveMasonry>

      <div className="flex flex-col h-fit sm:flex-wrap sm:flex-row gap-6 sm:justify-start sm:items-start">
        <CardsCalendar />
        <CardsActivityGoal />
        <CardsMetric />
        <CardsDataTable />
        <CardsShare />
      </div>
    </div>
  )
}
