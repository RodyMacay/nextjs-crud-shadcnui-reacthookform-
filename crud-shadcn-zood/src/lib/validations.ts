import { z } from "zod";
import {
  passwordRegex,
  phoneEcuadorRegex,
  urlRegex,
  validateBirthDate,
  validateImage,
} from "@/lib/zod-utils";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Correo electronico inválido" })
    .nonempty({ message: "El correo es requerido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .nonempty({ message: "La contraseña es requerida" }),
});

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    lastName: z
      .string()
      .min(3, { message: "El apellido debe tener al menos 3 caracteres" }),
    email: z
      .string()
      .email({ message: "Correo electrónico inválido" }),
    password: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
      .regex(passwordRegex, {
        message:
          "La contraseña debe contener al menos una mayúscula, una minúscula y un número",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "La confirmación de contraseña debe tener al menos 6 caracteres" }),
    birthDate: z
      .string()
      .optional()
      .refine((val) => !val || validateBirthDate(val), {
        message: "Fecha de nacimiento no válida",
      }),
    gender: z
      .enum(["Masculino", "Femenino", "Otros", ""])
      .nullable()
      .optional(),
    country: z.string().optional(),
    weight: z
      .number({ invalid_type_error: "El peso debe ser un número válido" })
      .min(0, { message: "El peso debe ser mayor o igual a 0" })
      .max(500, { message: "El peso debe ser menor o igual a 500 kg" }),
    image: z
      .custom<File | null>((file) => file === null || file instanceof File, {
        message: "Debe ser un archivo válido o null",
      })
      .refine((file) => !file || validateImage(file), {
        message: "El archivo debe ser una imagen válida de no más de 5 MB",
      }),
    termAccepted: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    }),
    socialNetwork: z
      .string()
      .regex(urlRegex, {
        message: "La URL no es válida. Asegúrate de usar http:// o https://",
      }),
    phone: z
      .string()
      .regex(phoneEcuadorRegex, {
        message: "Número de teléfono inválido. Debe ser +593 o con código de área local",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });