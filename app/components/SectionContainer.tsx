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
        'w-full h-[1024px] flex flex-col items-center bg-gray-200',
        className
      )}
    >
      <div className="w-full max-w-[1024px] px-6 md:px-12">{children}</div>
    </section>
  );
}
