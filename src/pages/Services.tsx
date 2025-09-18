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
  ArrowRight,
  CheckCircle,
  Settings,
  BarChart3,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineMaskReveal, BlurFadeReveal } from '@/components/animations/ScrollReveal';
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
      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container-custom text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <LineMaskReveal className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <h1>Our Services</h1>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg lg:text-xl text-muted-foreground">
              <p>At Clariox Technologies, we specialize in delivering comprehensive ERPNext solutions that streamline your operations, reduce costs, and accelerate growth. Our full-cycle approach ensures your business thrives.</p>
            </BlurFadeReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container-custom px-4">
          <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 md:p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-xs md:text-sm font-heading">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs md:text-sm text-muted-foreground font-body flex items-center">
                          <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary mr-2 md:mr-3 flex-shrink-0" />
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
          <div className="text-center mt-16 md:mt-20 py-12 md:py-16 bg-gradient-subtle rounded-2xl">
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 px-4">
              <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <h2>Ready to Get Started?</h2>
              </LineMaskReveal>
              <BlurFadeReveal className="text-base md:text-lg text-muted-foreground">
                <p>Let's discuss how our services can transform your business operations. Schedule a free consultation with our experts today.</p>
              </BlurFadeReveal>
              <BlurFadeReveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
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
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                  >
                    <Link to="/customers">
                      View Case Studies
                    </Link>
                  </Button>
                </div>
              </BlurFadeReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;