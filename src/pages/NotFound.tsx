import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MaskedHeading from '@/components/animations/MaskedHeading';
import AnimatedParagraph from '@/components/animations/AnimatedParagraph';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-20">
      <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 font-heading mb-8">
              404
            </div>
            
            <MaskedHeading as="h1" className="text-4xl md:text-6xl font-bold">
              Page Not Found
            </MaskedHeading>
            
            <AnimatedParagraph className="text-xl text-muted-foreground">
              Sorry, the page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </AnimatedParagraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                onClick={() => window.history.back()}
              >
                <button type="button">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Go Back
                </button>
              </Button>
            </div>
            
            <div className="pt-8 text-sm text-muted-foreground">
              <p>Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
