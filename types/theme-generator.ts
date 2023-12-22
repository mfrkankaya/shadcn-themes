import * as z from "zod"

import { isValidColor } from "@/lib/utils"

export const ThemeGeneratorSchema = z.object({
  primaryColor: z
    .string({ required_error: "Primary color is required." })
    .refine(isValidColor, "Primary color is not valid."),
  darkModeBgStyle: z.enum([
    "black",
    "gray",
    "grayish",
    "slightly-saturated",
    "saturated",
  ]),
})

export type ThemeGeneratorParams = z.infer<typeof ThemeGeneratorSchema>
