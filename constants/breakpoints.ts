export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

export const BREAKPOINTS: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}
