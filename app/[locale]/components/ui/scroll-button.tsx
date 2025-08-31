"use client"

import { Button } from "@/app/[locale]/components/ui/button"

interface ScrollButtonProps {
  targetId: string
  children: React.ReactNode
  variant?: "default" | "outline"
  className?: string
}

export function ScrollButton({
  targetId,
  children,
  variant = "default",
  className,
}: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}