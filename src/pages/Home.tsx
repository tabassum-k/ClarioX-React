import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Globe, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LineMaskReveal, BlurFadeReveal } from '@/components/animations/ScrollReveal';
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
      description: 'Our end-to-end implementation service is designed to get you up and running with ERPNext efficiently and with minimal disruption.',
      icon: CheckCircle,
    },
    {
      title: 'Consulting & Assessment',
      description: 'Leverage our deep knowledge of business processes and ERPNext to make informed decisions.',
      icon: Users,
    },
    {
      title: 'Customization & Integration',
      description: 'We specialize in tailoring ERPNext to fit your specific requirements, building custom modules, reports, and features.',
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
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-subtle ">
        <div className="container-custom text-center px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <LineMaskReveal className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">
              <h1>Clariox Technology: Innovating Your Business with Cutting-Edge ERPNext Solutions</h1>
            </LineMaskReveal>
            
            <LineMaskReveal delay={200} className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
              <h2>One System, Zero Blind Spots. Simplify your business, amplify your growth.</h2>
            </LineMaskReveal>
            
            <BlurFadeReveal delay={400} className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>At Clariox Technologies, we specialize in delivering comprehensive ERPNext solutions that streamline your operations, reduce costs, and accelerate growth. Our full-cycle approach ensures your business thrives.</p>
            </BlurFadeReveal>
            
            <BlurFadeReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
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
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </BlurFadeReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom px-4">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-item text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex justify-center">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-full">
                      <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold font-heading text-primary">{stat.number}</h3>
                    <p className="text-muted-foreground font-body text-xs md:text-sm">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container-custom px-4">
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h2>Our Core Services</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>We specialize in delivering comprehensive ERPNext solutions that streamline operations, reduce costs, and accelerate growth across all industries.</p>
            </BlurFadeReveal>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-center">
                    <div className="p-3 md:p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold font-heading">{service.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center px-4">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <h2>Ready to Transform Your Business?</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-primary-foreground/90">
              <p>Join hundreds of successful businesses that have transformed their operations with our ERPNext solutions. Get started with a free consultation today.</p>
            </BlurFadeReveal>
            <BlurFadeReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary" 
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-elegant text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
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
                  className="w-full sm:w-auto border-primary text-primary hover:bg-[rgba(255,255,255,0.1)] hover:text-primary-foreground text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <Link to="/customers">
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </BlurFadeReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;