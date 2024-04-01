import z from 'zod';

export const getLinkFormSchema = z.object({
  link: z.string().url({ message: 'Digite uma URL válida' }).min(1, {message: "Insira o link para continuar..."})
})

export type GetLinkFormData = z.infer<typeof getLinkFormSchema>