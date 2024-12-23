"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form/Form";
import { FormField } from "@/components/ui/form/FormField";
import { FormItem } from "@/components/ui/form/FormItem";
import { FormLabel } from "@/components/ui/form/FormLabel";
import { FormMessage } from "@/components/ui/form/FormMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputFile } from "@/components/ui/inputs/InputFile";
import { FormControl } from "@/components/ui/form";
import { User, Mail, Upload } from "lucide-react";
import { CheckboxWithText } from "@/components/ui/inputs/Checkbox";
import { termsItems } from "@/services/items";
import { SwitchWithLabel } from "@/components/ui/inputs/Switch";
import { TextareaWithText } from "@/components/ui/inputs/Textarea";

const schema = z.object({
  name: z.string().min(2, {
    message: "El nombre es obligatorio y debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({ message: "Debe ser un correo válido." }),
  picture: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Se requiere una imagen",
    })
    .refine((files) => files[0]?.type.startsWith("image/"), {
      message: "Debe ser un archivo de imagen",
    }),
  terms: z
    .array(z.string())
    .min(1, { message: "Debes aceptar al menos uno de los términos." }),
});

const HolaPage = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      picture: [],
      terms: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
    if (data.picture && data.picture[0]) {
      const pictureFile = data.picture[0];
      console.log("Archivo subido:", pictureFile.name);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary p-6">
          <h2 className="text-2xl font-bold text-primary-foreground text-center">
            Formulario de Registro
          </h2>
        </div>

        <div className="p-8">
          <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      <User className="h-4 w-4" />
                      Nombre
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ingresa tu nombre completo"
                        {...field}
                        className="h-11 border-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      <Mail className="h-4 w-4" />
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ejemplo@correo.com"
                        {...field}
                        className="h-11 border-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="picture"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      <Upload className="h-4 w-4" />
                      Fotografía
                    </FormLabel>
                    <FormControl>
                      <InputFile
                        id="picture"
                        onChange={(e) => {
                          field.onChange(e.target.files);
                        }}
                        className="border-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="terms"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      Acepta los siguientes términos
                    </FormLabel>
                    <FormControl>
                      <CheckboxWithText
                        items={termsItems}
                        onChange={(checkedValue) => {
                          const updatedTerms = checkedValue
                            ? [...field.value, checkedValue]
                            : field.value.filter(
                                (id: string) => id !== checkedValue
                              );
                          form.setValue("terms", updatedTerms);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="airplaneMode"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      Airplane Mode
                    </FormLabel>
                    <FormControl>
                      <SwitchWithLabel
                        id="airplane-mode"
                        label="Activate Airplane Mode"
                        checked={field.value}
                        onChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <TextareaWithText
                        id="message-1"
                        label="Your Message"
                        placeholder="Type your message here."
                        helperText="Your message will be copied to the support team."
                        errorMessage={fieldState?.error?.message}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-11 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Completar Registro
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HolaPage;
