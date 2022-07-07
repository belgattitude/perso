import { z } from 'zod';

export const getProjectFormSchema = () =>
  z.object({
    title: z.string().min(10, { message: 'Minimum 10 chars' }),
    description: z.string().min(10, { message: 'Minimum 10 chars' }),
    service: z.string().min(1, { message: 'Required' }),
    firstName: z.string().min(2, { message: 'Minimum 2 chars' }),
    lastName: z.string().min(2, { message: 'Minimum 2 chars' }),
    gsm: z.string().min(8, { message: 'Minimum 8 chars' }),
    email: z.string().email(),
    slug: z.string().optional(),
  });
