import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';
import clariozLogo from '@/assets/clariox-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={clariozLogo} 
                alt="Clariox Technologies" 
                className="h-8 w-auto"
              />
              <div>
                <span className="font-heading font-bold text-lg text-foreground">
                  Clariox
                </span>
                <span className="font-heading font-normal text-base text-muted-foreground ml-1">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Innovating your business with cutting-edge ERPNext solutions. 
              One system, zero blind spots.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Industries', href: '/industries' },
                { name: 'Customers', href: '/customers' },
                { name: 'About Us', href: '/about' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Services</h4>
            <nav className="flex flex-col space-y-2">
              {[
                'ERPNext Implementation',
                'Consulting & Assessment',
                'Custom Development',
                'Migration Services',
                'Training & Support',
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-body text-sm">info@clariox.in</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-body text-sm">+91 9860824779</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm leading-relaxed">
                  Office No 301 & 302<br />
                  Krisala Elite 41<br />              
                  Tathawade<br />
                  PCMC Pune,
                  Maharashtra, India.
                  411033.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground font-body text-sm">
            © {currentYear} Clariox Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;