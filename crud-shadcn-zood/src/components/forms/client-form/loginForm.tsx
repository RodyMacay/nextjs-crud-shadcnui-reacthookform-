'use client'
import { useClientForm } from '@/hooks/use-client-form';
import { LoginFormType } from '@/core/types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useClientForm({ formType: 'login' });

  const onSubmit = (data: LoginFormType) => {
    console.log('Datos del formulario de Login:', data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 mt-4 rounded"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
