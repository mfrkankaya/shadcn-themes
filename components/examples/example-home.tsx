"use client"

import React from "react"

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
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <RevenueCard />
      <SubscriptionsCard />
      <CardsTeamMembers />
      <CardsChat />
      <CardsCookieSettings />
      <CardsCreateAccount />
      <CardsPaymentMethod />
      <CardsReportIssue />
      <CardsCalendar />
      <CardsActivityGoal />
      <CardsMetric />
      <CardsDataTable />
      <CardsShare />
    </div>
  )
}
