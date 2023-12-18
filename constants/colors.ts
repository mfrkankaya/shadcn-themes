const light = {
  "--background": "0 0% 100%",
  "--foreground": "240 10% 10%",
  "--card": "240 17% 98%",
  "--card-foreground": "240 10% 10%",
  "--popover": "240 17% 98%",
  "--popover-foreground": "240 10% 10%",
  "--primary": "236 60% 41%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "236 29% 90%",
  "--secondary-foreground": "240 10% 10%",
  "--muted": "240 20% 95%",
  "--muted-foreground": "237 10% 40%",
  "--accent": "236 29% 90%",
  "--accent-foreground": "240 10% 10%",
  "--destructive": "0 84% 60%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "240 20% 95%",
  "--input": "234 26% 93%",
  "--ring": "235 34% 87%",
}

const dark = {
  "--background": "240 8% 8%",
  "--foreground": "0 0% 98%",
  "--card": "240 12% 12%",
  "--card-foreground": "0 0% 98%",
  "--popover": "240 12% 12%",
  "--popover-foreground": "0 0% 98%",
  "--primary": "235 50% 41%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "237 20% 20%",
  "--secondary-foreground": "0 0% 98%",
  "--muted": "235 16% 15%",
  "--muted-foreground": "236 8% 60%",
  "--accent": "235 22% 22%",
  "--accent-foreground": "0 0% 98%",
  "--destructive": "0 63% 31%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "236 17% 16%",
  "--input": "236 17% 16%",
  "--ring": "235 22% 22%",
}

export const colors = {
  light,
  dark,
} as const

export type ColorVariables = typeof colors.light
