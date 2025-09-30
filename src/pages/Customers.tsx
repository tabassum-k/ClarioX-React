import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import MaskedHeading from '@/components/animations/MaskedHeading';
import AnimatedParagraph from '@/components/animations/AnimatedParagraph';
import { staggerCards } from '@/lib/gsap-animations';

const Customers: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      staggerCards(testimonialsRef.current);
    }
    if (caseStudiesRef.current) {
      staggerCards(caseStudiesRef.current);
    }
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, Rudram Enterprises',
      company: 'Rudram Enterprises',
      rating: 5,
      content: 'Clariox Technologies transformed our entire supply chain management. Their ERPNext implementation was seamless, and the results exceeded our expectations. We now have complete visibility across all operations.',
      industry: 'Manufacturing'
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Director, Maaisa Traders',
      company: 'Maaisa Traders',
      rating: 5,
      content: 'The team at Clariox delivered exceptional results. We achieved a 20% reduction in order processing time within just 3 months of implementation. Their ongoing support has been outstanding.',
      industry: 'Trading'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      rating: 5,
      content: 'Working with Clariox was a game-changer for our business. Their expertise in ERPNext customization helped us create a solution that perfectly fits our unique requirements.',
      industry: 'Technology'
    },
    {
      name: 'Sarah Johnson',
      position: 'Finance Manager, GreenLeaf Industries',
      company: 'GreenLeaf Industries',
      rating: 5,
      content: 'The financial reporting capabilities they implemented have given us insights we never had before. Our decision-making process is now data-driven and much more efficient.',
      industry: 'Manufacturing'
    },
  ];

  const caseStudies = [
    {
      client: 'Rudram Enterprises',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain management and inventory tracking across multiple locations',
      solution: 'Implemented comprehensive ERPNext solution with custom modules for multi-location inventory management',
      results: [
        { metric: '40%', description: 'Reduction in inventory costs' },
        { metric: '60%', description: 'Faster order processing' },
        { metric: '95%', description: 'Inventory accuracy improvement' },
        { metric: '25%', description: 'Increase in customer satisfaction' }
      ],
      icon: TrendingUp
    },
    {
      client: 'Maaisa Traders',
      industry: 'Trading & Distribution',
      challenge: 'Manual order processing and lack of real-time sales visibility',
      solution: 'Automated sales processes with integrated CRM and real-time reporting dashboards',
      results: [
        { metric: '20%', description: 'Faster order processing' },
        { metric: '35%', description: 'Increase in sales productivity' },
        { metric: '50%', description: 'Reduction in processing errors' },
        { metric: '30%', description: 'Improvement in customer response time' }
      ],
      icon: Clock
    },
    {
      client: 'Krisala Builders',
      industry: 'Construction',
      challenge: 'Quality control and traceability in construction projects',
      solution: 'Custom project management system with full traceability from planning to execution',
      results: [
        { metric: '99.8%', description: 'Quality compliance rate' },
        { metric: '45%', description: 'Faster quality testing' },
        { metric: '30%', description: 'Reduction in product recalls' },
        { metric: '25%', description: 'Improvement in operational efficiency' }
      ],
      icon: Users
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
<section
  className="relative w-full flex items-center justify-center"
  style={{
    height: '90vh',
    backgroundImage: "url('https://res.cloudinary.com/dzhmpluhr/image/upload/v1759259063/sigmund-eTgMFFzroGc-unsplash_kb8e3p.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 container-custom text-center px-6">
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
      <MaskedHeading as="h1" className="text-5xl md:text-6xl font-bold text-white">
        Our Customers
      </MaskedHeading>
      <AnimatedParagraph className="text-xl text-white/90">
        We are proud to have partnered with leading businesses to deliver transformative 
        ERPNext solutions. Discover how we've helped organizations streamline operations, 
        reduce costs, and accelerate growth.
      </AnimatedParagraph>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center space-y-2 mb-16">
            <MaskedHeading as="h2" className="text-5xl md:text-6xl font-extralight">
              What Our Clients Say
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Don't just take our word for it. Here's what our clients have to say about 
              working with Clariox Technologies.
            </AnimatedParagraph>
          </div>

       <div 
  ref={testimonialsRef} 
  className="grid md:grid-cols-2 gap-8 px-4 md:px-8"
>
  {testimonials.slice(0, 3).map((testimonial, index) => (
    <Card 
      key={index} 
      className="group relative flex overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-lg transition-transform duration-400 hover:-translate-y-1 bg-white"
    >
      {/* Left gradient strip (5%) */}
      <div className="w-[5%] bg-gradient-to-b from-violet-500 to-blue-500"></div>

      {/* Content area */}
      <div className="flex-1 p-4 md:p-6">

        {/* Client info */}
        <div className="mb-2">
          <h4 className="text-md md:text-lg font-light font-heading text-gray-900">{testimonial.name}</h4>
          <p className="text-xs md:text-sm text-gray-600 font-body">{testimonial.position}</p>
          <p className="text-xs text-gray-400 font-body">{testimonial.industry}</p>
        </div>

        {/* Testimonial text */}
        <blockquote className="text-gray-800 font-light leading-relaxed italic text-sm md:text-base line-clamp-4">
          "{testimonial.content}"
        </blockquote>
      </div>

      {/* Optional subtle hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>
    </Card>
  ))}
</div>

        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-16">
            <MaskedHeading as="h2" className="text-5xl md:text-6xl font-extralight">
              Success Stories
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Detailed case studies showcasing how we've helped businesses transform 
              their operations and achieve measurable results.
            </AnimatedParagraph>
          </div>

          <div ref={caseStudiesRef} className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="card-item hover:shadow-elegant transition-all duration-300 border-0 shadow-card"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="text-2xl font-bold font-heading">{study.client}</h3>
                          <p className="text-primary font-body font-medium">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold font-heading text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground font-body leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold font-heading text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground font-body leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold font-heading text-foreground text-center">Results Achieved</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-primary/5 rounded-lg">
                            <div className="text-3xl font-bold text-primary font-heading mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground font-body">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold text-white">
              Ready to Join Our Success Stories?
            </MaskedHeading>
            <AnimatedParagraph className="text-lg text-primary-foreground/90">
              Your business could be our next success story. Let's discuss how we can help 
              you achieve similar transformational results with our ERPNext solutions.
            </AnimatedParagraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
              >
                <Link to="/contact">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-[rgba(255,255,255,0.1)] hover:text-primary-foreground text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Customers;