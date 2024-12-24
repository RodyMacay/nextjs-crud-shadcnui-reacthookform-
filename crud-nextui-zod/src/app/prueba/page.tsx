"use client";

import {Form} from "@/components/ui/form/Form";
import {FormLabel} from "@/components/ui/form/FormLabel";
import {FormItem} from "@/components/ui/form/FormItem";
import {Input} from "@/components/ui/inputs/Input";
import {FormField} from "@/components/ui/form/FormField";
import {useForm} from "react-hook-form";
import {Select} from "@/components/ui/inputs/Select";
import {Checkbox} from "@/components/ui/inputs/Checkbox";

export default function Prueba() {
    const {handleSubmit} = useForm();

    const onSubmit = () => {
        console.log("hola");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">
                    Prueba de utilidades del formulario
                </h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                            />
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                            />
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="name" className="text-gray-700 dark:text-gray-300">Nombre</FormLabel>
                            <Input
                                type="text"
                                name="name"
                            />
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="sexo" className="text-gray-700 dark:text-gray-300">Sexo</FormLabel>
                            <Select
                                name="sexo"
                                options={[
                                    {value: "M", label: "Masculino"},
                                    {value: "F", label: "Femenino"},
                                ]}
                            />
                        </FormItem>
                    </FormField>

                    <FormField>
                        <FormItem>
                            <FormLabel htmlFor="terminos" className="text-gray-700 dark:text-gray-300 mr-1">Acepta los términos</FormLabel>
                            <Checkbox
                                name="terminos"
                                label="Aceptar términos"
                                color="success"
                            />
                        </FormItem>
                    </FormField>
                </Form>
            </div>
        </div>
    );
}
