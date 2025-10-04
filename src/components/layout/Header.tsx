import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { initNavbarScroll } from '@/lib/gsap-animations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import clariozLogo from '@/assets/clariox-logo.png';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      const cleanup = initNavbarScroll(navRef.current);
      return cleanup;
    }
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Customers', href: '/customers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={clariozLogo} 
              alt="Clariox Technologies" 
              className="h-20 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-2xl text-white">
                Clariox
              </span>
              <span className="font-heading font-normal text-lg text-muted-foreground ml-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
     <div className="hidden md:flex items-center space-x-8">
  {navigation.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className={cn(
        "relative font-body font-medium hover:text-primary transition-colors duration-200",
        location.pathname === item.href
          ? "text-primary"
          : "text-white"
      )}
    >
      {item.name}
      {location.pathname === item.href && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
      )}
    </Link>
  ))}
</div>


          {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full text-white hover:text-primary transition-colors duration-200"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 text-white" />
                ) : (
                  <Sun className="h-4 w-4 text-white" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden w-9 h-9 rounded-full text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 text-white" />
                ) : (
                  <Menu className="h-4 w-4 text-white" />
                )}
              </Button>
            </div>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
            <div className="container-custom py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-3 font-body font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;