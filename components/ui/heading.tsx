import { cn } from '@/lib/utils';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        'text-2xl/8 font-heading font-normal text-white sm:text-xl/8 dark:text-white',
        className,
      )}
    />
  );
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(
        'text-base/7 font-heading font-semibold text-zinc-950 sm:text-sm/6 dark:text-white',
        className,
      )}
    />
  );
}
