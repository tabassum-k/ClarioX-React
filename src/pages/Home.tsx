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
    { number: '48+', label: 'Projects Delivered', icon: Award },
    { number: '162+', label: 'Happy Clients', icon: Users },
    { number: '47+', label: 'Industries Served', icon: Building },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <main>
      {/* Hero Section */}
 <section className="relative min-h-[100vh] flex items-center justify-center px-0 overflow-hidden pb-[10%]">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://res.cloudinary.com/dzhmpluhr/video/upload/v1759253966/22908-331768732_small_chvjla.mp4" type="video/mp4" />
  </video>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 w-full max-w-full text-center space-y-8 pb-20 px-4">
    
    {/* Heading */}
    <LineMaskReveal className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text drop-shadow-lg">
      <h1>
        Clariox Technology: Innovating Your Business with Cutting-Edge ERPNext Solutions
      </h1>
    </LineMaskReveal>

    {/* Subheading */}
    <LineMaskReveal
      delay={200}
      className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light drop-shadow"
    >
      <h2>
        Simplify your business, amplify your growth.
      </h2>
    </LineMaskReveal>

    {/* Description */}
    <BlurFadeReveal
      delay={400}
      className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto drop-shadow"
    >
      <p>
        At Clariox Technologies, we specialize in delivering comprehensive ERPNext
        solutions that streamline your operations, reduce costs, and accelerate
        growth. Our full-cycle approach ensures your business thrives.
      </p>
    </BlurFadeReveal>

    {/* Buttons */}
    <BlurFadeReveal delay={600}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
        
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
          <Link to="/services">Explore Services</Link>
        </Button>
      </div>
    </BlurFadeReveal>
  </div>
</section>

      {/* Stats Section */}
<section className="py-20 md:py-28 bg-background">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="relative border-none "
        >
          <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
            {/* Number */}
            <h3 className="text-7xl md:text-7xl font-light tracking-tight text-foreground">
              {stat.number}
            </h3>

            {/* Label */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {stat.label}
            </p>
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

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mr-20 ml-20">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardContent className="p-6 md:p-8 space-y-6">
                 <div className="flex justify-center">
                    <div className="p-3 md:p-4 rounded-full bg-gradient-to-r from-primary to-violet-500 transition-colors">
                      <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
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
<section
  className="relative py-24 md:py-32 text-center px-6 lg:px-20 overflow-hidden"
  style={{
    backgroundImage: "url('https://res.cloudinary.com/dzhmpluhr/image/upload/v1759254802/kevin-matos-Nl_FMFpXo2g-unsplash_um7tgy.jpg')",
    backgroundAttachment: "fixed", // parallax effect
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8 p-8 md:p-12 rounded-xl">
    <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
      <h2>Transform the Way You Work</h2>
    </LineMaskReveal>

    <BlurFadeReveal className="text-base md:text-lg text-white/90 leading-relaxed">
      <p>
        Unlock smarter operations and scale faster with our modern ERPNext solutions. Future-proof your business with tools that drive growth, efficiency, and success.
      </p>
    </BlurFadeReveal>

    <BlurFadeReveal delay={200}>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
        <Button
          asChild
          size="lg"
          className="bg-white text-primary font-semibold px-10 py-4 rounded-xl shadow-elegant hover:opacity-95 transition-all"
        >
          <Link to="/contact">Get Free Consultation</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white text-black hover:bg-white/10 px-10 py-4 rounded-xl transition-all"
        >
          <Link to="/customers">View Success Stories</Link>
        </Button>
      </div>
    </BlurFadeReveal>
  </div>
</section>



    </main>
  );
};

export default Home;