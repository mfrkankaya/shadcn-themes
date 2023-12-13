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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

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
      <Select defaultValue="1">
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Viewer</SelectItem>
          <SelectItem value="2">Developer</SelectItem>
          <SelectItem value="3">Billing</SelectItem>
          <SelectItem value="4">Owner</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export function TeamMembersDemo() {
  return (
    <Card className="w-full sm:w-fit">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <TeamMember name="Sofia Davis" email="m@example.com" />
        <TeamMember name="Jackson Lee" email="p@example.com" />
        <TeamMember name="Isabella Nguyen" email="i@example.com" />
      </CardContent>
    </Card>
  )
}
