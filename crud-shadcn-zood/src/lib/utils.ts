
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
// Contraseña con al menos una mayúscula, una minúscula, un número y mínimo 6 caracteres.

export const phoneEcuadorRegex = /^(?:\+593\s?|0)([9][0-9]{8})$/;
// Número de teléfono en formato nacional.

export const phoneRegex = /^\+?[1-9]\d{1,14}$/;
// Número de teléfono en formato internacional.

export const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
// URL.

export const postalCodeRegex = /^[0-9]{5}$/;
// Código postal (Ej. 12345).

export const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
// Nombre de usuario (solo letras, números y guiones bajos, entre 3 y 20 caracteres).

export const nameRegex = /^[a-zA-Z\s]{3,30}$/;
// Nombre y apellido (solo letras y espacios, entre 3 y 30 caracteres).
