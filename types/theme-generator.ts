import * as z from "zod"

import { isValidColor } from "@/lib/utils"

export const ThemeGeneratorSchema = z.object({
  primaryColor: z
    .string({ required_error: "Primary color is required." })
    .refine(isValidColor, "Primary color is not valid."),
  colorTheory: z
    .enum(["analogous", "monochromatic", "triad", "complementary"])
    .default("monochromatic"),
})

export type ThemeGeneratorParams = z.infer<typeof ThemeGeneratorSchema>
