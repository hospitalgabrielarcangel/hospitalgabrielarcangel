import { cn } from "@/lib/utils"

export function LedIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "size-1.5 rounded-full bg-green-600 shadow-[0_0_5px_0_rgba(0_0_0/0.05)] shadow-green-600 dark:bg-green-500 dark:shadow-green-200",
        className
      )}
    />
  )
}
