"use client"

import { Checkbox } from "@/components/ui/checkbox"

type CheckboxItem = {
  id: string
  label: string
  description?: string
}

interface CheckboxWithTextProps {
  items: CheckboxItem[];
  onChange: (value: string) => void
}

export function CheckboxWithText({ items, ...props }: CheckboxWithTextProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="items-top flex space-x-2">
          <Checkbox id={item.id} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
