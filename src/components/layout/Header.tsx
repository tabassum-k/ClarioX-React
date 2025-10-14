import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import clariozLogo from '@/assets/clariox-logo.png';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Customers', href: '/customers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] lg:w-[70%] transition-all duration-500',
        'backdrop-blur-md bg-white/80 dark:bg-gray-900/70 rounded-3xl shadow-lg',
        isScrolled ? 'py-2' : 'py-4'
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={clariozLogo} alt="Clariox" className="h-10 w-auto md:h-12 transition-transform group-hover:scale-105" />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-lg md:text-xl text-gray-900 dark:text-white">
              Clariox
            </span>
            <span className="font-heading font-normal text-sm md:text-base text-gray-600 dark:text-gray-300 ml-1">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'relative font-medium transition-colors duration-200 hover:text-primary',
                location.pathname === item.href ? 'text-primary' : 'text-gray-800 dark:text-gray-200'
              )}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-9 h-9 rounded-full"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden w-9 h-9 rounded-full"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden mt-3 bg-white/95 dark:bg-gray-900/80 rounded-2xl shadow-lg py-4 px-6 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                'block font-medium transition-colors duration-200 hover:text-primary',
                location.pathname === item.href ? 'text-primary' : 'text-gray-800 dark:text-gray-200'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
