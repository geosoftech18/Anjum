import { Link } from './link';
import { cn } from '@/lib/utils';

export function Text({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      data-slot="text"
      {...props}
      className={cn(
        'text-base/6 text-zinc-400 sm:text-sm/6 dark:text-zinc-400',
        className
      )}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        'text-white no-underline decoration-zinc-950/50 data-[hover]:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white',
        className
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'strong'>) {
  return (
    <strong
      {...props}
      className={cn(className, 'font-medium text-white dark:text-white')}
    />
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={cn(
        'rounded border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-white sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white',
        className
      )}
    />
  );
}
