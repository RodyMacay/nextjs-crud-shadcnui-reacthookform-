'use client'

import * as React from "react";
import { cn } from "@/lib/utils";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface FileInfo {
  name: string;
  size: number;
  type: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showPreview?: boolean;
}

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  ({ className, label = "Subir archivo", showPreview = true, ...props }, ref) => {
    const [preview, setPreview] = React.useState<string | null>(null);
    const [fileInfo, setFileInfo] = React.useState<FileInfo | null>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    const formatFileSize = (bytes: number) => {
      if (bytes < 1024) return bytes + ' bytes';
      else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / 1048576).toFixed(1) + ' MB';
    };

    const handleFile = React.useCallback((file: File) => {
      if (file.type.startsWith('image/') && showPreview) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result && typeof reader.result === 'string') {
            setPreview(reader.result);
            const img = new window.Image();
            img.onload = () => {
              setFileInfo({
                name: file.name,
                size: file.size,
                type: file.type,
                dimensions: {
                  width: img.width,
                  height: img.height
                }
              });
            };
            img.onerror = () => {
              setFileInfo({
                name: file.name,
                size: file.size,
                type: file.type
              });
            };
            img.src = reader.result;
          }
        };
        reader.onerror = () => {
          console.error("Error reading file");
          setPreview(null);
          setFileInfo(null);
        };
        reader.readAsDataURL(file);
      } else {
        setFileInfo({
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
    }, [showPreview]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) handleFile(file);
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
      const file = event.dataTransfer.files?.[0];
      if (file) handleFile(file);
    };

    const handleRemoveFile = (e: React.MouseEvent) => {
      e.stopPropagation();
      setPreview(null);
      setFileInfo(null);
      if (inputRef.current) inputRef.current.value = '';
    };

    return (
      <div className="w-full max-w-2xl">
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          {label}
        </label>
        <div
          className={cn(
            "relative border-2 border-dashed rounded-lg transition-colors",
            isDragging ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary",
            showPreview ? "h-64" : "h-12",
            className
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={(node) => {
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
              inputRef.current = node;
            }}
            id={props.id}
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
            {...props}
          />
          
          {preview && showPreview ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={preview}
                alt="Vista previa"
                width={fileInfo?.dimensions?.width || 400}
                height={fileInfo?.dimensions?.height || 300}
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={handleRemoveFile}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full gap-2">
              <Upload className={cn("h-4 w-4", showPreview && "h-12 w-12")} />
              <span className="text-sm">
                {showPreview 
                  ? "Arrastra y suelta una imagen aquí o haz clic para seleccionar"
                  : "Selecciona un archivo"}
              </span>
            </div>
          )}
        </div>

        {fileInfo && (
          <div className="mt-2 text-sm text-muted-foreground">
            <p><strong>Archivo:</strong> {fileInfo.name}</p>
            <p><strong>Tamaño:</strong> {formatFileSize(fileInfo.size)}</p>
            {fileInfo.dimensions && (
              <p><strong>Dimensiones:</strong> {fileInfo.dimensions.width} x {fileInfo.dimensions.height} px</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

InputFile.displayName = "InputFile";

export { InputFile };