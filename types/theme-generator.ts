import * as z from "zod"

import { isValidColor } from "@/lib/utils"

export const ThemeGeneratorSchema = z.object({
  primaryColor: z
    .string({ required_error: "Primary color is required." })
    .refine(isValidColor, "Primary color is not valid."),
  lightModeBgStyle: z.enum(["white", "grayish", "slightly-saturated"]),
  darkModeBgStyle: z.enum([
    "black",
    "gray",
    "grayish",
    "slightly-saturated",
    "saturated",
  ]),
  lightModeCardSameBg: z.boolean(),
  darkModeCardSameBg: z.boolean(),
})

export type ThemeGeneratorParams = z.infer<typeof ThemeGeneratorSchema>
