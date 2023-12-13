import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

import { Section } from "../section"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Section title="Slider">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
    </Section>
  )
}
