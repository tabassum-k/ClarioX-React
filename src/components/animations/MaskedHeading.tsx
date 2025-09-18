import React, { useEffect, useRef } from 'react';
import { maskedReveal } from '@/lib/gsap-animations';
import { cn } from '@/lib/utils';

interface MaskedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const MaskedHeading: React.FC<MaskedHeadingProps> = ({ 
  children, 
  className, 
  as: Component = 'h2' 
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      maskedReveal(ref.current);
    }
  }, []);

  return (
    <Component
      ref={ref as any}
      className={cn('mask-reveal relative overflow-hidden', className)}
    >
      <span className="reveal-text relative z-10 font-heading">
        {children}
      </span>
      <div className="mask-overlay absolute inset-0 bg-primary z-20" />
    </Component>
  );
};

export default MaskedHeading;