import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineMaskReveal, BlurFadeReveal } from "@/components/animations/ScrollReveal";
import { staggerCards } from "@/lib/gsap-animations";

// Component for image fade-in + blur
const InViewImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl transition-all duration-1000 ease-out ${
        inView ? "opacity-100 blur-0" : "opacity-0 blur-sm"
      } ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl shadow-md" />
    </div>
  );
};

const Services: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionsRef.current) {
      staggerCards(sectionsRef.current);
    }
  }, []);

  const services = [
    {
      title: "ERPNext Implementation",
      description:
        "Get up and running with ERPNext efficiently. Full system setup, data migration, and go-live support tailored for your business.",
      image: "https://res.cloudinary.com/dzhmpluhr/image/upload/v1759257278/erp_xq2xkb.png",
    },
    {
      title: "Consulting & Assessment",
      description:
        "Leverage deep insights on business processes to make informed decisions and optimize operations effectively.",
      image: "https://res.cloudinary.com/dzhmpluhr/image/upload/v1759257282/scott-graham-5fNmWej4tAA-unsplash_mvoxbs.jpg",
    },
    {
      title: "Customization & Integration",
      description:
        "Tailor ERPNext to fit your requirements, with custom modules, reports, workflows, and integration with third-party software.",
      image: "https://res.cloudinary.com/dzhmpluhr/image/upload/v1759257279/team-nocoloco-w9jKH8ZnF7A-unsplash_vw5rud.jpg",
    },
    {
      title: "Support & Training",
      description:
        "Continuous support and training for your teams to maximize adoption and system efficiency across your organization.",
      image: "https://res.cloudinary.com/dzhmpluhr/image/upload/v1759257282/campaign-creators-gMsnXqILjp4-unsplash_mlv1tx.jpg",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center px-6 lg:px-20"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzhmpluhr/image/upload/v1759254802/kevin-matos-Nl_FMFpXo2g-unsplash_um7tgy.jpg')",
        }}
      >
        <div className="p-8 md:p-12 text-center max-w-3xl space-y-6">
          <LineMaskReveal className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            <h1>Our Services</h1>
          </LineMaskReveal>
          <BlurFadeReveal className="text-lg md:text-xl text-white/90 leading-relaxed">
            <p>
              We provide end-to-end ERPNext solutions designed to streamline operations, reduce costs,
              and accelerate business growth. Explore our core services below.
            </p>
          </BlurFadeReveal>
        </div>
      </section>

      {/* Services Sections */}
      <section ref={sectionsRef} className="space-y-32 lg:space-y-40 px-6 lg:px-20 mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-stretch gap-8 lg:gap-16`}
          >
            {/* Image with fade+blur */}
            <InViewImage
              src={service.image}
              alt={service.title}
              className={index % 2 !== 0 ? "md:order-2" : ""}
            />

            {/* Text with scroll animation */}
            <div className={`md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white rounded-xl shadow-md min-w-[50vw]`}>
              <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <h2>{service.title}</h2>
              </LineMaskReveal>
              <BlurFadeReveal className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                <p>{service.description}</p>
              </BlurFadeReveal>
              {/* <BlurFadeReveal delay={200}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-violet-800 text-white font-semibold px-10 py-4 rounded-xl shadow-elegant hover:opacity-95 transition-all mt-6"
                >
                  <Link to="/contact">Get Consultation</Link>
                </Button>
              </BlurFadeReveal> */}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
    <section
  className="relative py-24 md:py-32 text-center px-6 lg:px-20  mt-20 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dzhmpluhr/image/upload/v1759257422/luca-bravo-9l_326FISzk-unsplash_jeaidc.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // parallax effect
  }}
>
  <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8 p-8 md:p-12 rounded-xl">
    <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
      <h2>Ready to Transform Your Business?</h2>
    </LineMaskReveal>
    <BlurFadeReveal className="text-base md:text-lg text-white/90 leading-relaxed">
      <p>
        Join hundreds of successful businesses that have streamlined operations with our ERPNext solutions. 
        Get started with a free consultation today.
      </p>
    </BlurFadeReveal>
    <BlurFadeReveal delay={200}>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
        <Button
          asChild
          size="lg"
          className="bg-white text-primary font-semibold px-10 py-4 hover:text-white rounded-xl shadow-elegant hover:opacity-95 transition-all"
        >
          <Link to="/contact">Get Free Consultation</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white text-black hover:bg-white/10 px-10 py-4 rounded-xl transition-all"
        >
          <Link to="/customers">View Case Studies</Link>
        </Button>
      </div>
    </BlurFadeReveal>
  </div>

  {/* Optional overlay for better readability */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>
</section>

    </main>
  );
};

export default Services;
