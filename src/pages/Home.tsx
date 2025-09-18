import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Building, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MaskedHeading from '@/components/animations/MaskedHeading';
import AnimatedParagraph from '@/components/animations/AnimatedParagraph';
import StaggeredText from '@/components/animations/StaggeredText';
import { staggerCards } from '@/lib/gsap-animations';

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      staggerCards(servicesRef.current);
    }
    if (statsRef.current) {
      staggerCards(statsRef.current);
    }
  }, []);

  const services = [
    {
      title: 'ERPNext Implementation',
      description: 'End-to-end implementation with minimal disruption to your business operations.',
      icon: CheckCircle,
    },
    {
      title: 'Consulting & Assessment',
      description: 'Deep knowledge of business processes to help make informed decisions.',
      icon: Users,
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions with custom modules, reports, and features.',
      icon: Building,
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Industries Served', icon: Building },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-subtle py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <MaskedHeading as="h1" className="text-5xl md:text-7xl font-bold gradient-text">
              Innovating Your Business with Cutting-Edge ERPNext Solutions
            </MaskedHeading>
            
            <StaggeredText 
              as="p" 
              className="text-xl md:text-2xl text-muted-foreground font-light"
            >
              One System, Zero Blind Spots. Simplify your business, amplify your growth.
            </StaggeredText>
            
            <AnimatedParagraph 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              delay={0.5}
            >
              Transform your organization with our comprehensive ERPNext solutions. 
              We deliver end-to-end implementation, customization, and support services 
              that streamline operations and accelerate growth.
            </AnimatedParagraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                <Link to="/contact">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-item text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-heading text-primary">{stat.number}</h3>
                    <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-16">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold">
              Our Core Services
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in delivering comprehensive ERPNext solutions that streamline 
              operations, reduce costs, and accelerate growth across all industries.
            </AnimatedParagraph>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold font-heading">{service.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-primary-foreground/90">
              Join hundreds of successful businesses that have transformed their operations 
              with our ERPNext solutions. Get started with a free consultation today.
            </AnimatedParagraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/customers">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;