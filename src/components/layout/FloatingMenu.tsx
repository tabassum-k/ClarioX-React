import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { 
  Home, 
  Settings, 
  Users, 
  Building, 
  Phone, 
  Info,
  Plus,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: Settings, href: '/services', label: 'Services' },
    { icon: Building, href: '/industries', label: 'Industries' },
    { icon: Users, href: '/customers', label: 'Customers' },
    { icon: Info, href: '/about', label: 'About' },
    { icon: Phone, href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (itemsRef.current) {
      const items = itemsRef.current.querySelectorAll('.menu-item');
      
      if (isOpen) {
        gsap.fromTo(items, 
          {
            scale: 0,
            opacity: 0,
            y: 20
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.7)"
          }
        );
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Menu Items */}
      {isOpen && (
        <div 
          ref={itemsRef}
          className="absolute bottom-16 right-0 flex flex-col-reverse items-end space-y-reverse space-y-3"
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="menu-item group flex items-center space-x-3 bg-background/90 backdrop-blur-md border border-border rounded-full py-2 px-4 shadow-elegant hover:shadow-glow hover:bg-primary/5 transition-all duration-300"
            >
              <item.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm text-foreground group-hover:text-primary whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={toggleMenu}
        className={cn(
          "w-14 h-14 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 group",
          isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"
        )}
        size="sm"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Plus className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
        )}
      </Button>
    </div>
  );
};

export default FloatingMenu;