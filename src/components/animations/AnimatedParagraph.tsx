import React, { useEffect, useRef } from 'react';
import { blurReveal } from '@/lib/gsap-animations';
import { cn } from '@/lib/utils';

interface AnimatedParagraphProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ 
  children, 
  className, 
  delay = 0 
}) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      const timer = setTimeout(() => {
        if (ref.current) {
          blurReveal(ref.current);
        }
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  return (
    <p
      ref={ref}
      className={cn('blur-reveal font-body leading-relaxed', className)}
    >
      {children}
    </p>
  );
};

export default AnimatedParagraph;