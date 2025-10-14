import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, HardHat, Heart, Milk, TrendingUp, Users, Building, ArrowRight, Filter
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
      image: 'https://www.shoutnhike.com/blog/wp-content/uploads/2024/02/Shoutnhike-6.jpg',
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
      image: 'https://konstelec.com/images/services/construction-commissioning.jpg',
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
      image: 'https://www.suttlecpas.com/wp-content/uploads/2019/01/Suttle-and-Stalnaker-Non-Profit-Organizations.jpg',
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Melkkarussell.jpg',
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
      image: 'https://staticlearn.shine.com/l/m/images/blog/mobile/sales_and_distribution_management_process.webp',
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
      image: 'https://assets.entrepreneur.com/content/3x2/2000/1730979225-ManufacturingThumbnail.jpg',
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
      image: 'https://static.everspring-kent.production.k2.m1.brightspot.cloud/dims4/default/ade1647/2147483647/strip/true/crop/1240x500+0+0/resize/1240x500!/quality/90/?url=https%3A%2F%2Fk2-prod-everspring-kent.s3.us-east-1.amazonaws.com%2Fbrightspot%2F3d%2F1a%2F177a6e6e4130a842a22f5018d9b5%2Fdifferences-between-the-private-and-public-sectors.webp',
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

    useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://www.shoutnhike.com/blog/wp-content/uploads/2024/02/Shoutnhike-6.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto p-8 md:p-12 rounded-xl space-y-6 md:space-y-8">
          <MaskedHeading as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Industries We Serve
          </MaskedHeading>
          <AnimatedParagraph className="text-lg md:text-xl text-white/90 leading-relaxed">
            We go beyond software implementation. We engineer specialized ERPNext solutions 
            that address your industry's unique demands, solving your biggest challenges 
            and driving new levels of efficiency.
          </AnimatedParagraph>
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
            {filters.map(filter => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                className={cn(
                  "transition-all duration-300",
                  selectedFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "border-primary/20 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
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
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                </div>

                {/* Title + short description */}
                <CardHeader className="px-5 pt-4 pb-3">
                  <CardTitle className="text-lg font-heading text-foreground text-center">
                    {industry.title}
                  </CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground font-body line-clamp-2 text-center">
                    {industry.description}
                  </p>
                </CardHeader>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center bg-background/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 px-6 py-5">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm font-heading text-foreground">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground font-body">
                          <div className="mt-1 mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary shadow-sm" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg bg-primary/5 p-3 group-hover:bg-primary/10 transition-colors">
                    <p className="text-xs font-semibold text-primary font-heading mb-1">
                      SUCCESS STORY
                    </p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                      {industry.caseStudy}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/40 transition-all duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body text-lg">
                No industries found for the selected filter.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <section
            className="relative py-24 md:py-32 text-center px-6 lg:px-20 mt-20 overflow-hidden rounded-xl"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dzhmpluhr/image/upload/v1759257422/luca-bravo-9l_326FISzk-unsplash_jeaidc.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 max-w-3xl mx-auto p-8 md:p-12 space-y-6 md:space-y-8 rounded-xl">
              <MaskedHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Your Industry, Our Expertise
              </MaskedHeading>
              <AnimatedParagraph className="text-base md:text-lg text-white/90 leading-relaxed">
                Don't see your industry listed? We've worked with businesses across diverse sectors. 
                Let's discuss how we can create a tailored solution for your specific needs.
              </AnimatedParagraph>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary font-semibold px-10 py-4 hover:text-white rounded-xl shadow-elegant hover:opacity-95 transition-all"
                >
                  <Link to="/contact">
                    Discuss Your Industry
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white text-black hover:bg-white/10 px-10 py-4 rounded-xl transition-all"
                >
                  <Link to="/customers">
                    View All Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Industries;
