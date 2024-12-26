"use client";

import { useClientForm } from "@/components/ui/form/hooks/useFormField";
import { Form } from "@/components/ui/form/Form";
import { FormField } from "@/components/ui/form/FormField";
import { FormItem } from "@/components/ui/form/FormItem";
import { FormLabel } from "@/components/ui/form/FormLabel";
import { FormMessage } from "@/components/ui/form/FormMessage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export type LoginFormType = {
  email: string;
  password: string;
};
export default function LoginPage() {
  const form = useClientForm<LoginFormType>({
    formType: 'login',
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormType) => {
    console.log('Login data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
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

              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}