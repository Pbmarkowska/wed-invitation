import { ReactNode } from 'react';
import { PT_Serif } from 'next/font/google';
import { cn } from '@/app/utils/common';

const mainFont = PT_Serif({
  weight: '400',
});

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn('min-h-screen flex flex-col', mainFont.className)}>
      {children}
    </div>
  );
};
