import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineMaskReveal, BlurFadeReveal } from '@/components/animations/ScrollReveal';
import { staggerCards } from '@/lib/gsap-animations';

const About: React.FC = () => {
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (valuesRef.current) {
      staggerCards(valuesRef.current);
    }
    if (teamRef.current) {
      staggerCards(teamRef.current);
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Our clients\' success is our success. We build lasting partnerships based on trust, transparency, and mutual respect.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of the curve, continuously learning and adapting to bring you the latest ERPNext innovations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with your team to ensure seamless integration and adoption.',
    },
  ];

  const teamHighlights = [
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Our team consists of certified ERPNext developers and consultants with years of hands-on experience.',
      stats: '50+ Certifications'
    },
    {
      icon: Users,
      title: 'Industry Expertise',
      description: 'We have worked across diverse industries, understanding unique challenges and requirements.',
      stats: '15+ Industries'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 500 successful implementations and countless satisfied clients speak to our expertise.',
      stats: '500+ Projects'
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Clariox Technologies was established with a vision to simplify business operations through ERPNext.'
    },
    {
      year: '2019',
      title: 'First 50 Clients',
      description: 'Reached our first major milestone of serving 50 clients across various industries.'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Received recognition as a leading ERPNext implementation partner in the region.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our services globally, serving clients across multiple continents.'
    },
    {
      year: '2024',
      title: '500+ Projects',
      description: 'Celebrated the successful completion of over 500 ERPNext implementation projects.'
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container-custom text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <LineMaskReveal className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <h1>About Clariox Technologies</h1>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg lg:text-xl text-muted-foreground">
              <p>At Clariox Technologies, our certified ERPNext professionals are more than consultants—they are your partners in success. With diverse expertise and a passion for problem-solving, our team is dedicated to empowering your business to thrive.</p>
            </BlurFadeReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full">
                    <Target className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <LineMaskReveal className="text-2xl md:text-3xl font-bold font-heading">
                    <h2>Our Mission</h2>
                  </LineMaskReveal>
                </div>
                <BlurFadeReveal className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>To empower businesses of all sizes to achieve operational excellence through innovative ERPNext solutions. We believe that every organization deserves access to world-class enterprise resource planning tools, regardless of their size or industry.</p>
                </BlurFadeReveal>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-full">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <LineMaskReveal delay={200} className="text-2xl md:text-3xl font-bold font-heading">
                    <h2>Our Vision</h2>
                  </LineMaskReveal>
                </div>
                <BlurFadeReveal delay={400} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>To become the global leader in ERPNext implementation and consulting, known for our technical excellence, client dedication, and transformative business impact. We envision a world where every business operates at peak efficiency.</p>
                </BlurFadeReveal>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {[
                'Precision and clarity in every solution',
                'Client success is our primary measure',
                'Innovation drives our approach',
                'Excellence is our standard'
              ].map((principle, index) => (
                <BlurFadeReveal key={index} delay={index * 100} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gradient-subtle rounded-lg">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                  <p className="font-body text-foreground font-medium text-sm md:text-base">{principle}</p>
                </BlurFadeReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container-custom px-4">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h2>Our Values</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>These core values guide everything we do and shape the way we work with our clients.</p>
            </BlurFadeReveal>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-item text-center hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardHeader className="pb-3 md:pb-4">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="p-3 md:p-4 bg-primary/10 rounded-full">
                      <value.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-heading">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 md:px-6">
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 md:py-20">
        <div className="container-custom px-4">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h2>Why Choose Our Team</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>Our certified ERPNext professionals bring together technical expertise, industry knowledge, and a commitment to your success.</p>
            </BlurFadeReveal>
          </div>

          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {teamHighlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-item group text-center hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardHeader className="pb-3 md:pb-4">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="p-3 md:p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-heading">{highlight.title}</CardTitle>
                  <div className="text-xl md:text-2xl font-bold text-primary font-heading mt-2">{highlight.stats}</div>
                </CardHeader>
                <CardContent className="px-4 md:px-6">
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center px-4">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <h2>Partner with Us Today</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-primary-foreground/90">
              <p>Ready to experience the Clariox difference? Let's discuss how our expertise and dedication can help transform your business operations.</p>
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
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <Link to="/customers">
                    See Our Work
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

export default About;