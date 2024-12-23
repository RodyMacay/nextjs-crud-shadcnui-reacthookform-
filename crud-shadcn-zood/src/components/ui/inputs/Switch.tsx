"use client"

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SwitchWithLabelProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function SwitchWithLabel({ id, label, checked, onChange }: SwitchWithLabelProps) {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
      <Label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 transition-colors duration-200"
      >
        {label}
      </Label>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        className="h-6 w-12 rounded-full bg-gray-300 border-2 border-gray-300 checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />
    </div>
  );
}
