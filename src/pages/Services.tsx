import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cog, 
  Users, 
  Search, 
  Wrench, 
  Smartphone, 
  Link as LinkIcon, 
  Database, 
  GraduationCap, 
  HeadphonesIcon,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MaskedHeading from '@/components/animations/MaskedHeading';
import AnimatedParagraph from '@/components/animations/AnimatedParagraph';
import { staggerCards } from '@/lib/gsap-animations';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      staggerCards(servicesRef.current);
    }
  }, []);

  const services = [
    {
      icon: Cog,
      title: 'Implementation',
      description: 'Our end-to-end implementation service is designed to get you up and running with ERPNext efficiently and with minimal disruption.',
      features: ['Full system setup', 'Data migration', 'User training', 'Go-live support'],
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Leverage our deep knowledge of business processes and ERPNext to make informed decisions.',
      features: ['Business analysis', 'Process optimization', 'Strategic planning', 'Best practices'],
    },
    {
      icon: Search,
      title: 'Assessment & Evaluation',
      description: 'We\'ll provide a detailed evaluation and a clear roadmap, helping you understand how ERPNext can solve your challenges and drive growth.',
      features: ['Current state analysis', 'Gap assessment', 'ROI calculation', 'Implementation roadmap'],
    },
    {
      icon: Wrench,
      title: 'Customization',
      description: 'We specialize in tailoring ERPNext to fit your specific requirements, building custom modules, reports, and features.',
      features: ['Custom modules', 'Report development', 'Workflow automation', 'UI/UX customization'],
    },
    {
      icon: Smartphone,
      title: 'App and Website Development',
      description: 'We also offer app and website development services to provide a comprehensive digital solution for your business.',
      features: ['Mobile apps', 'Web portals', 'E-commerce integration', 'API development'],
    },
    {
      icon: LinkIcon,
      title: 'Integration',
      description: 'We can seamlessly integrate ERPNext with third-party software like e-commerce platforms, payment gateways, and shipping APIs.',
      features: ['Third-party APIs', 'E-commerce platforms', 'Payment gateways', 'Legacy systems'],
    },
    {
      icon: Database,
      title: 'Migration',
      description: 'We provide a secure and reliable data migration service to safely transfer your information from legacy systems to ERPNext.',
      features: ['Data mapping', 'Secure transfer', 'Validation testing', 'Rollback planning'],
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'We offer customized training sessions and comprehensive documentation for all user levels.',
      features: ['User training', 'Admin training', 'Custom documentation', 'Video tutorials'],
    },
    {
      icon: HeadphonesIcon,
      title: 'Support',
      description: 'Our flexible support packages provide ongoing technical assistance and maintenance.',
      features: ['24/7 support', 'System maintenance', 'Bug fixes', 'Performance optimization'],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <MaskedHeading as="h1" className="text-5xl md:text-6xl font-bold">
              Our Services
            </MaskedHeading>
            <AnimatedParagraph className="text-xl text-muted-foreground">
              At Clariox Technologies, we specialize in delivering comprehensive ERPNext solutions 
              that streamline your operations, reduce costs, and accelerate growth. Our full-cycle 
              approach ensures your business thrives.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm font-heading">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground font-body flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 py-16 bg-gradient-subtle rounded-2xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold">
                Ready to Get Started?
              </MaskedHeading>
              <AnimatedParagraph className="text-lg text-muted-foreground">
                Let's discuss how our services can transform your business operations. 
                Schedule a free consultation with our experts today.
              </AnimatedParagraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group"
                >
                  <Link to="/contact">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/customers">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;