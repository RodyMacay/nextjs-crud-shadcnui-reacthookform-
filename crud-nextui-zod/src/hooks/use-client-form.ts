import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema, registerSchema} from "@/lib/validations";
import {LoginFormType, RegisterFormType} from "@/core/types";

type FormType = 'login' | 'register'

interface UseClientFormProps {
  formType: FormType;
  defaultValues?: LoginFormType | RegisterFormType;
}

export const useClientForm = ({ formType, defaultValues = {} }: UseClientFormProps) => {
  const schema = formType === 'login' ? loginSchema : registerSchema;

  return useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues
  });
}