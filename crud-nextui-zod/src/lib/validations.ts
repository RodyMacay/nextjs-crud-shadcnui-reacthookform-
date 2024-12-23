import { z } from "zod"

export const loginSchema = z.object({
    email : z
        .string()
        .email({ message: "Correo electronico inválido" })
        .nonempty({ message: "El correo es requerido" }),
    password : z
        .string()
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
        .nonempty({ message : "La contraseña es requerida" })
})

export const registerSchema = z.object({
    firstName : z
        .string()
        .min(3, { message: "El nombre debe ser mayor a 2 caracteres" })
        .nonempty({ message: "El nombre es requerido" }),
    lastName : z
        .string()
        .min(3, { message: "El apellido debe ser mayor a 2 caracteres" })
        .nonempty({ message: "El apellido es requerido" }),
    email : z
        .string()
        .email({ message: "Correo electronico inválido" })
        .nonempty({ message: "El correo es requerido" }),
    password : z
        .string()
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
        .nonempty({ message : "La contraseña es requerida" }),
    confirmPassword : z
        .string()
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
        .nonempty({ message : "La contraseña es requerida" }),
    birthDate : z
        .date()
        .optional(),
    gender : z
        .enum(["Masculino", "Femenino", "Otros"])
        .optional(),
    country : z
        .string()
        .optional(),
    weight : z
        .number()
        .min(0, { message: "El peso no puede ser negativo" })
        .max(500, { message: "El peso no puede ser mayor a 500 kg" })
        .refine(val => val >= 0 && val <= 500, {
            message: "El peso debe estar entre 0 y 500 kg"
        })
})