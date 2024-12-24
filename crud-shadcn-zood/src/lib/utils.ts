
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

//validación de la fecha de nacimiento
export const validateBirthDate = (val: string | undefined): boolean => {
  if (!val) return true

  // validacion del formato YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(val)) {
    return false
  }

  // Validacion de la edad mínima (18 años)
  const today = new Date();
  const birthDate = new Date(val);
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18
  }

  return age >= 18;
}

//validacion de una imagen
export const validateImage = (val: any): boolean => {
  if (!val) return true

  const file = val[0]

  console.log(file)

  if (!(file instanceof File)) {
    console.log("No es un archivo válido.");
    return false
  }

  // Validar que el archivo sea una imagen
  if (!file.type.startsWith("image/")) {
    console.log("El archivo no es una imagen.");
    return false
  }

  // Validar el tamaño de la imagen (no mayor a 5 MB)
  if (file.size > 5 * 1024 * 1024) {
    console.log("El archivo es muy grande.");
    return false
  }

  return true;
};
