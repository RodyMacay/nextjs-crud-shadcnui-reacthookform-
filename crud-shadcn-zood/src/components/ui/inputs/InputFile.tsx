import * as React from "react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  ({ className, label = "Subir archivo", ...props }, ref) => {
    const [fileName, setFileName] = React.useState<string | null>(null); // Estado para almacenar el nombre del archivo

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setFileName(file.name); // Almacena el nombre del archivo seleccionado
      } else {
        setFileName(null); // Si no hay archivo, resetear el nombre
      }
    };

    return (
      <div className="w-full max-w-sm">
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          {label}
        </label>
        <div className="relative flex items-center w-full">
          {/* Input file oculto */}
          <input
            type="file"
            ref={ref}
            id={props.id}
            className={cn(
              "absolute inset-0 opacity-0 cursor-pointer", // Input oculto y ocupa el mismo espacio
              className
            )}
            {...props}
            onChange={handleFileChange} // Maneja el cambio del archivo
          />
          {/* Área interactiva que reemplaza el input */}
          <label
            htmlFor={props.id}
            className="flex items-center justify-center gap-2 w-full h-12 bg-primary/10 text-primary rounded-md cursor-pointer hover:bg-primary/20 active:bg-primary/30"
          >
            <Upload className="h-4 w-4" />
            <span className="text-sm">Selecciona un archivo</span>
          </label>
        </div>

        {/* Mostrar el nombre del archivo seleccionado si existe */}
        {fileName && (
          <div className="mt-2 text-sm text-muted-foreground">
            <strong>Archivo seleccionado:</strong> {fileName}
          </div>
        )}
      </div>
    );
  }
);

InputFile.displayName = "InputFile";

export { InputFile };
