import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Extends clsx to ease tailwind classnames merging */
export function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
