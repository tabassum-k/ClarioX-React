import React, { useEffect, useRef } from 'react';
import { staggeredWordReveal, splitTextIntoWords } from '@/lib/gsap-animations';
import { cn } from '@/lib/utils';

interface StaggeredTextProps {
  children: string;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitTextIntoWords(ref.current);
      staggeredWordReveal(ref.current);
    }
  }, [children]);

  return (
    <Component
      ref={ref as any}
      className={cn('staggered-text', className)}
    >
      {children}
    </Component>
  );
};

export default StaggeredText;