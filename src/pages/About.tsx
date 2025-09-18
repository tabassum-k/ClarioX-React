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
import MaskedHeading from '@/components/animations/MaskedHeading';
import AnimatedParagraph from '@/components/animations/AnimatedParagraph';
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
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <MaskedHeading as="h1" className="text-5xl md:text-6xl font-bold">
              About Clariox Technologies
            </MaskedHeading>
            <AnimatedParagraph className="text-xl text-muted-foreground">
              We are more than consultants—we are your partners in success. With diverse 
              expertise and a passion for problem-solving, our team is dedicated to 
              empowering your business to thrive.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading">Our Mission</h2>
                </div>
                <AnimatedParagraph className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes to achieve operational excellence through 
                  innovative ERPNext solutions. We believe that every organization deserves access 
                  to world-class enterprise resource planning tools, regardless of their size or industry.
                </AnimatedParagraph>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading">Our Vision</h2>
                </div>
                <AnimatedParagraph className="text-lg text-muted-foreground leading-relaxed">
                  To become the global leader in ERPNext implementation and consulting, known for 
                  our technical excellence, client dedication, and transformative business impact. 
                  We envision a world where every business operates at peak efficiency.
                </AnimatedParagraph>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                'Precision and clarity in every solution',
                'Client success is our primary measure',
                'Innovation drives our approach',
                'Excellence is our standard'
              ].map((principle, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-subtle rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-body text-foreground font-medium">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-16">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold">
              Our Values
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we work with our clients.
            </AnimatedParagraph>
          </div>

          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-item text-center hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-16">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold">
              Why Choose Our Team
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified ERPNext professionals bring together technical expertise, 
              industry knowledge, and a commitment to your success.
            </AnimatedParagraph>
          </div>

          <div ref={teamRef} className="grid md:grid-cols-3 gap-8">
            {teamHighlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-item group text-center hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{highlight.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary font-heading mt-2">{highlight.stats}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-16">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold">
              Our Journey
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a leading ERPNext consulting firm, here's how we've grown 
              and evolved over the years.
            </AnimatedParagraph>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="text-2xl font-bold text-primary font-heading">{milestone.year}</div>
                          <h3 className="text-xl font-semibold font-heading">{milestone.title}</h3>
                          <p className="text-muted-foreground font-body leading-relaxed">{milestone.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold text-white">
              Partner with Us Today
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-primary-foreground/90">
              Ready to experience the Clariox difference? Let's discuss how our expertise 
              and dedication can help transform your business operations.
            </AnimatedParagraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
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
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/customers">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;