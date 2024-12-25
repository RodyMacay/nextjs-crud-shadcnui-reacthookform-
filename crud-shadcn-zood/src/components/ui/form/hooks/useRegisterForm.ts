import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validations";
import { z } from "zod";

export const useRegisterForm = (
  defaultValues: z.infer<typeof registerSchema>
) => {
  return useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });
};
