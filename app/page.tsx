import React from "react"

import { AccordionDemo } from "@/components/demos/accordion-demo"
import { AlertDemo } from "@/components/demos/alert-demo"
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo"
import { AvatarDemo } from "@/components/demos/avatar-demo"
import { BadgeDemo } from "@/components/demos/badge-demo"
import { ButtonDemo } from "@/components/demos/button-demo"
import { CalendarDemo } from "@/components/demos/calendar-demo"
import { CardDemo } from "@/components/demos/card-demo"
import { CheckboxDemo } from "@/components/demos/checkbox-demo"
import { CollapsibleDemo } from "@/components/demos/collapsible-demo"
import { ComboboxDemo } from "@/components/demos/combobox-demo"
import { CommandDemo } from "@/components/demos/command-demo"
import { ContextMenuDemo } from "@/components/demos/context-menu-demo"
import { DataTableDemo } from "@/components/demos/data-table-demo"
import { DatePickerDemo } from "@/components/demos/date-picker-demo"
import { DialogDemo } from "@/components/demos/dialog-demo"
import { DropdownMenuDemo } from "@/components/demos/dropdown-menu-demo"
import { HoverCardDemo } from "@/components/demos/hover-card-demo"
import { InputDemo } from "@/components/demos/input-demo"
import { MenubarDemo } from "@/components/demos/menubar-demo"
import { NavigationMenuDemo } from "@/components/demos/navigation-menu-demo"
import { PopoverDemo } from "@/components/demos/popover-demo"
import { ProgressDemo } from "@/components/demos/progress-demo"
import { RadioGroupDemo } from "@/components/demos/radio-group-menu"
import { ScrollAreaDemo } from "@/components/demos/scroll-area-demo"
import { SelectDemo } from "@/components/demos/select-demo"
import { SeparatorDemo } from "@/components/demos/separator-demo"
import { SheetDemo } from "@/components/demos/sheet-demo"
import { SkeletonDemo } from "@/components/demos/skeleton-demo"
import { SliderDemo } from "@/components/demos/slider-demo"
import { SwitchDemo } from "@/components/demos/switch-demo"
import { TableDemo } from "@/components/demos/table-demo"
import { TabsDemo } from "@/components/demos/tabs-demo"
import { TextareaDemo } from "@/components/demos/textarea-demo"
import { ToastDemo } from "@/components/demos/toast-demo"
import { ToggleDemo } from "@/components/demos/toggle-demo"
import { ToggleGroupDemo } from "@/components/demos/toggle-group-demo"
import { TooltipDemo } from "@/components/demos/tooltip-demo"
import { ThemeToggler } from "@/components/theme-toggler"

export default function HomePage() {
  return (
    <div className="container pt-16 pb-32 flex flex-col gap-16">
      <ThemeToggler />
      <AccordionDemo />
      <AlertDemo />
      <AlertDialogDemo />
      <AvatarDemo />
      <BadgeDemo />
      <ButtonDemo />
      <CalendarDemo />
      <CardDemo />
      <CheckboxDemo />
      <CollapsibleDemo />
      <ComboboxDemo />
      <CommandDemo />
      <ContextMenuDemo />
      <DataTableDemo />
      <DatePickerDemo />
      <DialogDemo />
      <DropdownMenuDemo />
      <HoverCardDemo />
      <InputDemo />
      <MenubarDemo />
      <NavigationMenuDemo />
      <PopoverDemo />
      <ProgressDemo />
      <RadioGroupDemo />
      <ScrollAreaDemo />
      <SelectDemo />
      <SeparatorDemo />
      <SheetDemo />
      <SkeletonDemo />
      <SliderDemo />
      <SwitchDemo />
      <TableDemo />
      <TabsDemo />
      <TextareaDemo />
      <ToastDemo />
      <ToggleDemo />
      <ToggleGroupDemo />
      <TooltipDemo />
    </div>
  )
}
