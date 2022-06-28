import { Asserts, isNonEmptyString } from '@belgattitude/ts-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { getProjectFormSchema } from '@/features/poc/components/ProjectForm/getProjectFormSchema';
import { getFakeProjectData } from '@/features/poc/data/getFakeProjectData';
import { trpc } from '@/utils/trpc';

export type ProjectFormValues = z.infer<
  ReturnType<typeof getProjectFormSchema>
>;

const schema = getProjectFormSchema();

export const ProjectForm: FC = (props) => {
  const router = useRouter();
  const mutation = trpc.useMutation(['poc/create_project'], {
    ssr: false,
    onSettled: (data: ProjectFormValues & { slug: string }) => {
      if (!isNonEmptyString(data?.slug)) {
        console.error("Error: can't acquire the project slug");
      }
      router.push(`/poc/sortlist/project/${data.slug}`);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(schema),
    defaultValues: getFakeProjectData(),
  });

  const onSubmit = (formValues: ProjectFormValues) => {
    mutation.mutate(formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Project
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information won't be shared without your consent.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="py-5 px-4 space-y-6 bg-white sm:p-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project title
                  </label>
                  <input
                    type="text"
                    {...register('title', {
                      required: true,
                      minLength: 20,
                      maxLength: 120,
                    })}
                    placeholder="ie: Looking for a new website..."
                    autoComplete="off"
                    className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                  />
                  {errors?.title && (
                    <p className={'bg-amber-600'}>{errors.title.message}</p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Service
                  </label>
                  <select
                    {...register('service')}
                    autoComplete="service-name"
                    className="block py-2 px-3 mt-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm sm:text-sm"
                  >
                    <option>Advertising</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    About
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register('description')}
                      rows={3}
                      className="block mt-1 w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                      placeholder=""
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="py-5 px-4 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        {...register('firstName')}
                        autoComplete="given-name"
                        className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        {...register('lastName')}
                        autoComplete="family-name"
                        className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        {...register('email')}
                        autoComplete="email"
                        className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="gsm"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        {...register('gsm')}
                        autoComplete="tel"
                        className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-3 px-4 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
                  >
                    Submit project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
