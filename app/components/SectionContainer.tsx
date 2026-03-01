import { ReactNode } from 'react';
import { cn } from '../utils/common';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        'w-full min-h-screen flex justify-center bg-gray-200',
        className
      )}
    >
      <div className="w-full max-w-[1200px] px-6 md:px-12">{children}</div>
    </section>
  );
}
