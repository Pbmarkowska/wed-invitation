import { ReactNode } from 'react';
import { cn } from '../utils/common';
import { ptSerif } from '../utils/fonts';

type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeader({
  children,
  className,
}: SectionHeaderProps) {
  return (
    <h1
      className={cn(
        ptSerif.className,
        'text-6xl text-weddingRedDark flex items-center justify-center mb-0 pt-20',
        className
      )}
    >
      {children}
    </h1>
  );
}
