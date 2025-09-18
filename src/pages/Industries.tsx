import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  HardHat, 
  Heart, 
  Milk, 
  TrendingUp, 
  Users, 
  Building, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MaskedHeading from '@/components/animations/MaskedHeading';
import AnimatedParagraph from '@/components/animations/AnimatedParagraph';
import { staggerCards } from '@/lib/gsap-animations';
import { cn } from '@/lib/utils';

const Industries: React.FC = () => {
  const industriesRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    if (industriesRef.current) {
      staggerCards(industriesRef.current);
    }
  }, [selectedFilter]);

  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      category: 'production',
      description: 'From managing Bills of Materials (BOM) and production planning to tracking work orders and maintaining inventory, our solutions provide complete visibility and control.',
      benefits: [
        'Production planning optimization',
        'Inventory management',
        'Quality control tracking',
        'Supply chain visibility'
      ],
      caseStudy: 'Reduced production costs by 30% for ABC Manufacturing'
    },
    {
      icon: HardHat,
      title: 'Engineering, Procurement & Construction (EPC)',
      category: 'construction',
      description: 'We help you manage complex projects by tracking progress, handling procurement, and ensuring projects stay on time and on budget.',
      benefits: [
        'Project management',
        'Procurement tracking',
        'Budget control',
        'Resource allocation'
      ],
      caseStudy: 'Delivered 15% faster project completion for XYZ Construction'
    },
    {
      icon: Heart,
      title: 'Non-Profit Organization',
      category: 'nonprofit',
      description: 'We help non-profits operate more efficiently by managing donations, tracking grants, and automating financial reporting.',
      benefits: [
        'Donation management',
        'Grant tracking',
        'Financial transparency',
        'Volunteer coordination'
      ],
      caseStudy: 'Increased operational efficiency by 40% for Global Aid Foundation'
    },
    {
      icon: Milk,
      title: 'Dairy Industry',
      category: 'food',
      description: 'Our specialized solutions for the dairy industry help manage milk procurement, quality control, production, and distribution, ensuring efficiency from farm to shelf.',
      benefits: [
        'Milk procurement tracking',
        'Quality control systems',
        'Production scheduling',
        'Distribution management'
      ],
      caseStudy: 'Improved supply chain efficiency by 25% for Fresh Dairy Co.'
    },
    {
      icon: TrendingUp,
      title: 'Sales & Distribution',
      category: 'sales',
      description: 'Our solutions enable you to manage your entire sales cycle, from lead generation and quotation to order management and CRM.',
      benefits: [
        'Lead management',
        'Sales pipeline tracking',
        'Order processing',
        'Customer relationship management'
      ],
      caseStudy: 'Boosted sales conversion by 35% for Metro Distributors'
    },
    {
      icon: Users,
      title: 'Services Industry',
      category: 'services',
      description: 'Improve project management and client delivery by tracking billable hours, managing project tasks, and handling client invoicing.',
      benefits: [
        'Project management',
        'Time tracking',
        'Client invoicing',
        'Resource planning'
      ],
      caseStudy: 'Increased profitability by 20% for Pro Services Ltd.'
    },
    {
      icon: Building,
      title: 'Public Sector',
      category: 'government',
      description: 'We provide reliable and secure solutions to help you manage procurement processes, track public funds, and ensure compliance.',
      benefits: [
        'Procurement management',
        'Budget tracking',
        'Compliance monitoring',
        'Transparency reporting'
      ],
      caseStudy: 'Enhanced transparency and efficiency for City Municipal Corporation'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'production', label: 'Production' },
    { id: 'construction', label: 'Construction' },
    { id: 'services', label: 'Services' },
    { id: 'food', label: 'Food & Agriculture' },
    { id: 'government', label: 'Government' },
    { id: 'nonprofit', label: 'Non-Profit' },
    { id: 'sales', label: 'Sales' },
  ];

  const filteredIndustries = selectedFilter === 'all' 
    ? industries 
    : industries.filter(industry => industry.category === selectedFilter);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <MaskedHeading as="h1" className="text-5xl md:text-6xl font-bold">
              Industries We Serve
            </MaskedHeading>
            <AnimatedParagraph className="text-xl text-muted-foreground">
              We go beyond software implementation. We engineer specialized ERPNext solutions 
              that address your industry's unique demands, solving your biggest challenges 
              and driving new levels of efficiency.
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <span className="font-heading font-medium text-foreground">Filter by Industry:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                className={cn(
                  "transition-all duration-300",
                  selectedFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "border-primary/20 text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div ref={industriesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((industry, index) => (
              <Card 
                key={`${industry.title}-${selectedFilter}`} 
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm font-heading">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-muted-foreground font-body flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-xs font-semibold text-primary font-heading mb-1">SUCCESS STORY</p>
                      <p className="text-sm text-muted-foreground font-body">{industry.caseStudy}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body text-lg">No industries found for the selected filter.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-20 py-16 bg-gradient-subtle rounded-2xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <MaskedHeading as="h2" className="text-4xl md:text-5xl font-bold">
                Your Industry, Our Expertise
              </MaskedHeading>
              <AnimatedParagraph className="text-lg text-muted-foreground">
                Don't see your industry listed? We've worked with businesses across diverse sectors. 
                Let's discuss how we can create a tailored solution for your specific needs.
              </AnimatedParagraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant hover:shadow-glow transition-all duration-300 group"
                >
                  <Link to="/contact">
                    Discuss Your Industry
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
                    View All Case Studies
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

export default Industries;