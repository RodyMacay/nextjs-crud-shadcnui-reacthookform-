"use client";
import { Form } from "@/components/ui/form/Form";
import { FormField } from "@/components/ui/form/FormField";
import { FormItem } from "@/components/ui/form/FormItem";
import { FormLabel } from "@/components/ui/form/FormLabel";
import { FormMessage } from "@/components/ui/form/FormMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputFile } from "@/components/ui/inputs/InputFile";
import { CheckboxWithText } from "@/components/ui/inputs/Checkbox";
import { RegisterFormType } from "@/core/types/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubmitHandler } from "react-hook-form";
import { useRegisterForm } from "@/components/ui/form/hooks/useRegisterForm";

export default function RegisterPage() {
  const form = useRegisterForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    country: "",
    weight: 0,
    termAccepted: false,
    socialNetwork: "",
    phone: "",
    image: null,
  });
  console.log(form.formState.errors)

  const OnSubmit: SubmitHandler<RegisterFormType> = (data) => {
    console.log("Register data:" + data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Registro</CardTitle>
        </CardHeader>
        <CardContent>
          <Form
            form={form}
            onSubmit={(e) => {
              console.log("handleSubmit invoked");
              form.handleSubmit(OnSubmit, (errors) => {
                console.log("Errores del formulario:", errors);
              })(e);
            }}
          >
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem >

                      <FormLabel>Nombre</FormLabel>
                      <Input {...field} />
                      <FormMessage error={form.formState.errors.firstName?.message} />
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>

                      <FormLabel>Apellido</FormLabel>
                      <Input {...field} />
                      <FormMessage error={form.formState.errors.lastName?.message} />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} type="email" />
                    <FormMessage error={form.formState.errors.email?.message} />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <Input {...field} type="password" />
                      <FormMessage error={form.formState.errors.password?.message} />
                    </FormItem>
                  )}
                />
                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Contraseña</FormLabel>
                      <Input {...field} type="password" />
                      <FormMessage error={form.formState.errors.confirmPassword?.message} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="birthDate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de Nacimiento</FormLabel>
                      <Input {...field} type="date" />
                      <FormMessage error={form.formState.errors.birthDate?.message} />
                    </FormItem>
                  )}
                />
                <FormField
                  name="gender"
                  control={form.control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem>
                      <FormLabel>Género</FormLabel>
                      <select
                        {...field}
                        value={value || ""}
                        onChange={(e) => onChange(e.target.value || null)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otros">Otros</option>
                      </select>
                      <FormMessage error={form.formState.errors.gender?.message} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="country"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>País</FormLabel>
                      <Input {...field} placeholder="Ingrese su país" />
                      <FormMessage error={form.formState.errors.country?.message} />
                    </FormItem>
                  )}
                />

                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <Input {...field} placeholder="+593..." />
                      <FormMessage error={form.formState.errors.phone?.message} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="weight"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso (kg)</FormLabel>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                      <FormMessage error={form.formState.errors.weight?.message} />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="socialNetwork"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Red Social</FormLabel>
                    <Input {...field} placeholder="https://..." />
                    <FormMessage error={form.formState.errors.socialNetwork?.message} />
                  </FormItem>
                )}
              />

              <FormField
                name="image"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foto de Perfil</FormLabel>
                    <InputFile
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                      }}
                    />
                    <FormMessage error={form.formState.errors.image?.message} />
                  </FormItem>
                )}
              />

              <FormField
                name="termAccepted"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Términos y Condiciones</FormLabel>
                    <div className="items-top flex space-x-2">
                      <CheckboxWithText
                        items={[
                          {
                            id: "terms",
                            label: "Acepto los términos y condiciones",
                            description: "Al registrarte, aceptas nuestros términos de servicio y política de privacidad.",
                          },
                        ]}
                        value={field.value} // Vincula el valor actual del formulario
                        onChange={field.onChange} // Actualiza el estado del formulario
                      />
                    </div>
                    <FormMessage error={form.formState.errors.termAccepted?.message} />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Registrarse
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
