import * as z from "zod"

import { isValidColor } from "@/lib/utils"

export const ThemeGeneratorSchema = z.object({
  color: z
    .string({ required_error: "Primary color is required." })
    .refine(isValidColor, "Primary color is not valid."),

  lightModeBgStyle: z.enum(["white", "grayish", "slightly-saturated"]),
  lightModeCardSameBg: z.boolean(),
  lightModePrimaryForeground: z.string(),
  lightModeOptimizePrimaryColor: z.boolean(),

  darkModeBgStyle: z.enum([
    "black",
    "gray",
    "grayish",
    "slightly-saturated",
    "saturated",
  ]),
  darkModeCardSameBg: z.boolean(),
  darkModePrimaryForeground: z.string(),
  darkModeOptimizePrimaryColor: z.boolean(),
})

export type ThemeGeneratorParams = z.infer<typeof ThemeGeneratorSchema>
