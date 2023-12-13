"use client"

import React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

function TeamMember({ name, email }: { name: string; email: string }) {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Image
        width={32}
        height={32}
        src="https://picsum.photos/64"
        alt=""
        className="rounded-full"
      />
      <div className="flex-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div></div>
    </div>
  )
}

export function TeamMembersDemo() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <TeamMember name="Sofia Davis" email="m@example.com" />
        <TeamMember name="Sofia Davis" email="m@example.com" />
        <TeamMember name="Sofia Davis" email="m@example.com" />
      </CardContent>
    </Card>
  )
}
