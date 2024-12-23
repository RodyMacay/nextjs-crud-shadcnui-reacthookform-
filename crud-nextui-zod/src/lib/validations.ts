import { z } from "zod"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;


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
        .regex(passwordRegex, { message: "La contraseña debe contener al menos una mayúscula, una minuscula y un número " })
        .nonempty({ message : "La contraseña es requerida" }),
    confirmPassword : z
        .string()
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
        .nonempty({ message: "La confirmación de contraseña es requerida" }),
    birthDate: z
        .string()
        .optional()
        .refine((val) => !val || !isNaN(Date.parse(val)), {
          message: "Fecha de nacimiento no válida",
        }),
    gender : z
        .enum(["Masculino", "Femenino", "Otros", ""])
        .nullable()
        .optional(),
    country : z
        .string()
        .optional(),
    weight: z
        .number({ invalid_type_error: "El peso debe ser un número válido" })
        .min(0, { message: "El peso debe ser mayor o igual a 0" })
        .max(500, { message: "El peso debe ser menor o igual a 500 kg" }),

    image: z
        .any()
        .optional()
        .transform((val) => val?.[0] || null)
        .refine(
         (file) => !file || file instanceof File,
         { message: "El archivo debe ser válido" }
        )
        .refine(
         (file) => !file || file?.type.startsWith("image/"),
         { message: "El archivo debe ser una imagen" }
       )
       .refine(
        (file) => !file || file?.size <= 5 * 1024 * 1024,
        { message: "El tamaño de la imagen no puede superar los 5 MB" }
      )
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
})