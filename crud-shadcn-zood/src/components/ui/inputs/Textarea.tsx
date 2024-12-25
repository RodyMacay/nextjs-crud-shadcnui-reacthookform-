import { Textarea } from "@/components/ui/textarea";

interface TextareaWithTextProps {
    id: string;
    label: string;
    placeholder: string;
    helperText: string;
    errorMessage?: string;
    value: string;
    onChange: (value: string) => void;
  }
  
  export function TextareaWithText({
    id,
    placeholder,
    helperText,
    errorMessage,
    value,
    onChange,
  }: TextareaWithTextProps) {
    const hasError = !!errorMessage;
  
    return (
      <div className="w-full space-y-2">
  
        <Textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`resize-none w-full p-4 border-2 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all 
          ${hasError ? 'border-red-500' : 'border-gray-300'} 
          ${hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
          sm:text-base text-sm`}
        />
        
        <p className={`text-sm ${hasError ? 'text-red-500' : 'text-gray-500'}`}>
          {hasError ? errorMessage : helperText}
        </p>
      </div>
    );
  }
  