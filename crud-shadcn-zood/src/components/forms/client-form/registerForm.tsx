'use client';
import { useClientForm } from '@/hooks/use-client-form';
import { RegisterFormType } from '@/core/types';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useClientForm({ formType: 'register' });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = (data: RegisterFormType) => {
    console.log('Datos del formulario de Registro:', data);
    // Aquí enviarías los datos a tu API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          {...register('firstName')}
          className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          {...register('lastName')}
          className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword')}
          className={`border ${
            errors.confirmPassword || password !== confirmPassword
              ? 'border-red-500'
              : 'border-gray-300'
          } p-2`}
        />
        {errors.confirmPassword || password !== confirmPassword ? (
          <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="birthDate">Fecha de Nacimiento (opcional):</label>
        <input
          type="date"
          id="birthDate"
          {...register('birthDate')}
          className={`border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.birthDate && (
          <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="gender">Género (opcional):</label>
        <select
          id="gender"
          {...register('gender')}
          className={`border ${errors.gender ? 'border-red-500' : 'border-gray-300'} p-2`}
        >
          <option value="">Seleccionar</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otros">Otros</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="country">País (opcional):</label>
        <input
          type="text"
          id="country"
          {...register('country')}
          className={`border ${errors.country ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="weight">Peso:</label>
        <input
          type="number"
          id="weight"
          {...register('weight', { valueAsNumber: true })}
          className={`border ${errors.weight ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.weight && (
          <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>
        )}
      </div>

      <div>
        <label>Imagen:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          {...register('image')}
          className={`border ${errors.image ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="socialNetwork">Red Social:</label>
        <input
          type="text"
          id="socialNetwork"
          {...register('socialNetwork')}
          className={`border ${errors.socialNetwork ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.socialNetwork && (
          <p className="text-red-500 text-sm mt-1">{errors.socialNetwork.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone">Teléfono (formato Ecuador):</label>
        <input
          type="text"
          id="phone"
          {...register('phone')}
          className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} p-2`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="termAccepted">
          <input
            type="checkbox"
            id="termAccepted"
            {...register('termAccepted')}
            className="mr-2"
          />
          Acepto los términos y condiciones
        </label>
        {errors.termAccepted && (
          <p className="text-red-500 text-sm mt-1">{errors.termAccepted.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 mt-4 rounded"
      >
        Registrarse
      </button>
    </form>
  );
};
export default RegisterForm
