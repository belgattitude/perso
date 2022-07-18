import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  /** Something */
};

const loginFormSchema = z.object({
  username: z.string().min(2, { message: 'Minimum 2 chars' }),
  password: z.string().min(4, { message: 'Minimum 4 chars' }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const LoginForm: FC<Props> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (formValues: LoginFormValues) => {
    const { username, password } = formValues;
    signIn('credentials', { username, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username
        <input
          type="text"
          {...register('username', {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
          placeholder="Username or email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors?.username && (
          <p className={'bg-amber-600'}>{errors.username.message}</p>
        )}
      </label>
      <label>
        Password
        <input
          type="text"
          {...register('password', {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
          placeholder="Password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors?.password && (
          <p className={'bg-amber-600'}>{errors.password.message}</p>
        )}
      </label>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Login
      </button>
    </form>
  );
};
