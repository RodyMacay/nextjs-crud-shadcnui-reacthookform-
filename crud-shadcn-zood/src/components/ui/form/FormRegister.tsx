'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "@/lib/validations";
import { LoginFormType, RegisterFormType } from "@/core/types";

type FormType = 'login' | 'register';

interface UseClientFormProps<T extends FormType> {
  formType: T;
  defaultValues?: T extends 'login' ? Partial<LoginFormType> : Partial<RegisterFormType>;
  mode?: 'onChange' | 'onBlur' | 'onSubmit';
}

export default function useClientForm<T extends FormType>({ 
  formType, 
  mode = 'onBlur',
  defaultValues = {} 
}: UseClientFormProps<T>) {
  const schema = formType === 'login' ? loginSchema : registerSchema;
  type SchemaType = z.infer<typeof schema>;

  return useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as SchemaType,
    mode,
  });
}