"use client";

import {Form} from "@/components/ui/form/Form";
import {FormLabel} from "@/components/ui/form/FormLabel";
import {FormItem} from "@/components/ui/form/FormItem";
import {Input} from "@/components/ui/inputs/Input";
import {FormField} from "@/components/ui/form/FormField";
import {Select} from "@/components/ui/inputs/Select";
import {Checkbox} from "@/components/ui/inputs/Checkbox";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email("Por favor ingresa un email válido").min(1, "El email es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    name: z.string().min(1, "El nombre es obligatorio"),
    genre: z.enum(["M", "F"], { errorMap: () => ({ message: "Por favor selecciona un género" }) }),
    terms: z.boolean().refine((val) => val, {
        message: "Debes aceptar los términos y condiciones",
    }),
});

type FormValues = z.infer<typeof schema>;

export default function Prueba() {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            genre: undefined,
            terms: false,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Datos enviados:", data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Prueba de utilidades del formulario
                </h1>
                <Form {...form} onSubmitAction={onSubmit}>
                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input type="email" name="email"/>
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input type="password" name="password"/>
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="name">Nombre</FormLabel>
                            <Input type="text" name="name"/>
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="genre">Sexo</FormLabel>
                            <Select
                                name="genre"
                                options={[
                                    {value: "M", label: "Masculino"},
                                    {value: "F", label: "Femenino"},
                                ]}
                            />
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="terms">Términos y condiciones</FormLabel>
                            <Checkbox name="terms"/>
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Enviar
                            </button>
                        </FormItem>
                    </FormField>
                </Form>
            </div>
        </div>
    );
}
