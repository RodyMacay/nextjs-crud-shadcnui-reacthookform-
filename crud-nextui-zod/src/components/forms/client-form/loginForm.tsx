import {useClientForm} from "@/hooks/use-client-form";
import {useEffect} from "react";


const LoginForm = () => {
  const { handleSubmit, register, formState: { errors } } = useClientForm({ formType: 'login' });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.error("Errores de validación:", errors);
    }
  }, [errors]);

  return (
    <div>
      <button type="button" onClick={() => {
        // Provocar errores de validación intencionalmente
        handleSubmit({} as any)();
      }}>
        Validar Login (Errores)
      </button>
      <button type="button" onClick={() => {
        // Enviar datos válidos
        handleSubmit({ email: 'test@example.com', password: 'password123' })();
      }}>
        Validar Login (Correcto)
      </button>
    </div>
  );
};

export default LoginForm