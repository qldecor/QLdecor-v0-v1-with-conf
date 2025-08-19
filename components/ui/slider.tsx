"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center h-6", className)}
    {...props}
  >
    {/* Track */}
    <SliderPrimitive.Track
      className={cn(
        "relative w-full grow overflow-hidden rounded-full",
        "h-2 bg-gray-200"                 // lighter base so it’s always visible
      )}
    >
      {/* Filled range */}
      <SliderPrimitive.Range
        className={cn(
          "absolute h-full rounded-full",
          "bg-gray-900"                    // dark, high-contrast fill
        )}
      />
    </SliderPrimitive.Track>

    {/* Thumb */}
    <SliderPrimitive.Thumb
      className={cn(
        "block rounded-full bg-white shadow-md transition-all",
        "h-5 w-5 border-2 border-gray-900 cursor-pointer",    // bigger, darker edge
        "hover:scale-110 hover:bg-gray-50",    // clearer hover affordance
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/70",
        "active:scale-95",
        "disabled:pointer-events-none disabled:opacity-50"
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }