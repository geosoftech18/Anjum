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
        'text-base/6 text-text sm:text-sm/6 dark:text-text',
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
        'text-text no-underline decoration-text/50 data-[hover]:decoration-text dark:text-text dark:decoration-white/50 dark:data-[hover]:decoration-white',
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
      className={cn(className, 'font-medium text-text dark:text-text')}
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
        'rounded border border-text/10 bg-text/[2.5%] px-0.5 text-sm font-medium text-text sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-text',
        className
      )}
    />
  );
}
