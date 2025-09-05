'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <ShadcnButton
        ref={ref}
        className={cn(className)}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };