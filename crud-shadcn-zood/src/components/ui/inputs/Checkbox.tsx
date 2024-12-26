"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useCallback } from "react";

type CheckboxItem = {
  id: string;
  label: string;
  description?: string;
};

interface CheckboxWithTextProps {
  items: CheckboxItem[];
  value: boolean; // Valor actual del formulario para este checkbox
  onChange: (value: boolean) => void; // Actualizador del estado del formulario
}

export function CheckboxWithText({ items, value, onChange }: CheckboxWithTextProps) {
  const handleCheckboxChange = useCallback(() => {
    onChange(!value);
  }, [value, onChange]);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="items-top flex space-x-2">
          <Checkbox id={item.id} checked={value} onCheckedChange={handleCheckboxChange} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
            {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
