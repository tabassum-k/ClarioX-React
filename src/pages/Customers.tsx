import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MaskedHeading from "@/components/animations/MaskedHeading";
import AnimatedParagraph from "@/components/animations/AnimatedParagraph";
import { staggerCards } from "@/lib/gsap-animations";

/**
 * Customers.tsx — Creative Modern Art / Image-first Testimonials & Case Studies
 * - No icons; image-driven design
 * - Carousel for testimonials (auto-play & manual)
 * - Alternating split-case-studies with metrics
 * - Reuses staggerCards for animated reveal of case studies
 *
 * Customize: replace Unsplash URLs with real client images or brand assets.
 */

/* -------------------------
   Placeholder image assets
   (swap these with your brand images)
   ------------------------- */
const heroImage =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80";
const clientPhotoA =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80";
const clientPhotoB =
  "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070";
const clientPhotoC =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80";
const caseImage1 =
  "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80";
const caseImage2 =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80";
const caseImage3 =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2015";

/* -------------------------
   Data
   ------------------------- */
const testimonials = [
  {
    name: "Sitaram Appa",
    title: "CEO, Rudram Enterprises",
    company: "Rudram Enterprises",
    industry: "Electrical Retail & Wholesale",
    quote:
      "Clariox modernized our operations — real-time inventory and smarter order flow. Our margins and speed improved within months.",
    photo: clientPhotoA,
  },
  {
    name: "Hardik Patel",
    title: "Managing Director, Hardik Chemicals",
    company: "Hardik Chemicals",
    industry: "Chemicals & Manufacturing",
    quote:
      "From planning to compliance, Clariox delivered a tailored ERPNext solution that reduced errors and improved production throughput.",
    photo: clientPhotoB,
  },
  {
    name: "Riya Mehta",
    title: "Owner, Royal Salon",
    company: "Royal Salon",
    industry: "Beauty & Personal Care",
    quote:
      "They automated scheduling and inventory with empathy for our process. Our guests notice the difference, and so do we.",
    photo: clientPhotoC,
  },
];

const caseStudies = [
  {
    client: "Rudram Enterprises",
    industry: "Manufacturing",
    image: caseImage1,
    challenge:
      "Disparate stock records across locations causing stockouts and overstocks.",
    solution:
      "Custom multi-location inventory module and auto-reorder flows in ERPNext.",
    results: [
      { value: "40%", label: "Inventory cost reduction" },
      { value: "95%", label: "Inventory accuracy" },
      { value: "60%", label: "Faster order processing" },
    ],
  },
  {
    client: "Maaisa Traders",
    industry: "Trading & Distribution",
    image: caseImage2,
    challenge:
      "Slow manual order processing and no real-time sales visibility.",
    solution:
      "Real-time dashboards, integrated POS & CRM connectors driving sales visibility.",
    results: [
      { value: "35%", label: "Sales productivity increase" },
      { value: "50%", label: "Processing error reduction" },
      { value: "30%", label: "Improved response time" },
    ],
  },
  {
    client: "Krisala Builders",
    industry: "Construction",
    image: caseImage3,
    challenge:
      "Lack of traceability across projects leading to quality and compliance issues.",
    solution:
      "Project management module with checkpoints, materials traceability, and quality logs.",
    results: [
      { value: "99.8%", label: "Quality compliance" },
      { value: "45%", label: "Faster testing cycles" },
      { value: "25%", label: "Operational efficiency uplift" },
    ],
  },
];

/* -------------------------
   Animations
   ------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* -------------------------
   Component
   ------------------------- */
const Customers: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const caseStudiesRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      staggerCards(testimonialsRef.current);
    }
    if (caseStudiesRef.current) {
      // We'll still allow GSAP to animate results grid if needed
      staggerCards(caseStudiesRef.current);
    }

    // Autoplay carousel (every 6s)
    autoplayRef.current = window.setInterval(() => {
      setIndex((n) => (n + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <main className="pt-20 font-inter text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[72vh] flex items-center"
        aria-label="Customers hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(8,10,12,0.45), rgba(10,10,12,0.65)), url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
        <div className="relative z-10 container-custom px-6 mx-auto text-white max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-center"
          >
            <MaskedHeading as="h1" className="text-5xl md:text-6xl font-extrabold leading-tight">
              Our Partners in Progress
            </MaskedHeading>
            <AnimatedParagraph className="mt-5 text-lg text-white/90 max-w-3xl mx-auto">
              We partner with organisations that want measurable transformation. Below are stories of operational change, reduced cost, and stronger teams.
            </AnimatedParagraph>

            <div className="mt-8 flex items-center justify-center gap-4">
              {/* Floating client cards (names + industry) */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-white/8 backdrop-blur-sm text-sm text-white/90 shadow-sm">
                  <div className="font-semibold">Rudram</div>
                  <div className="text-xs mt-1 text-white/70">Electrical</div>
                </div>
                <div className="p-3 rounded-xl bg-white/8 backdrop-blur-sm text-sm text-white/90 shadow-sm">
                  <div className="font-semibold">Hardik Chemicals</div>
                  <div className="text-xs mt-1 text-white/70">Manufacturing</div>
                </div>
                <div className="p-3 rounded-xl bg-white/8 backdrop-blur-sm text-sm text-white/90 shadow-sm">
                  <div className="font-semibold">Royal Salon</div>
                  <div className="text-xs mt-1 text-white/70">Hospitality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Success Stories & Testimonials
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Real feedback from leaders who trusted us to transform operations with ERPNext.
            </p>
          </div>

          <div
            ref={testimonialsRef}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left: Image - show current client's photo with subtle overlay */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence initial={false}>
                <motion.img
                  key={testimonials[index].photo}
                  src={testimonials[index].photo}
                  alt={`${testimonials[index].name} photo`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[420px] object-cover"
                />
              </AnimatePresence>

              <div className="p-6 bg-white">
                <div className="text-sm text-gray-500">{testimonials[index].industry}</div>
                <div className="mt-2 text-lg font-semibold text-gray-900">{testimonials[index].company}</div>
                <div className="mt-3 text-sm text-gray-600 max-w-xl">
                  {testimonials[index].title}
                </div>
              </div>
            </div>

            {/* Right: Quote */}
            <div className="space-y-6">
              <AnimatePresence initial={false}>
                <motion.div
                  key={testimonials[index].name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-tr from-white to-gray-50 p-8 rounded-2xl shadow-xl"
                >
                  <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    “{testimonials[index].quote}”
                  </blockquote>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[index].name}</div>
                      <div className="text-sm text-gray-600">{testimonials[index].title}</div>
                    </div>

                    {/* Simple rating visual (text-based) */}
                    <div className="text-sm text-yellow-500 font-medium">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} aria-hidden>
                          ★
                        </span>
                      ))}
                      <span className="sr-only">{testimonials[index].name} rating 5 of 5</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrev}
                  className="px-4 py-2 rounded-md bg-black/5 hover:bg-black/8 text-sm"
                  aria-label="Previous testimonial"
                >
                  ‹ Previous
                </button>
                <div className="flex-1 flex items-center gap-2 justify-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-3 h-3 rounded-full ${i === index ? "bg-primary" : "bg-gray-300"}`}
                      aria-label={`Show testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={goNext}
                  className="px-4 py-2 rounded-md bg-black/5 hover:bg-black/8 text-sm"
                  aria-label="Next testimonial"
                >
                  Next ›
                </button>
              </div>

              <div className="mt-4">
                <Button className="bg-primary text-white m-3">
                  <Link to="/contact">Talk to our team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — alternating split layout */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold">In-depth Case Studies</h3>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Selected stories showcasing the challenge, our approach, and clear results.
            </p>
          </div>

          <div ref={caseStudiesRef} className="space-y-12">
            {caseStudies.map((cs, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article
                  key={cs.client}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`grid gap-6 lg:gap-10 items-center ${
                    isEven ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:grid-flow-dense"
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={cs.image}
                        alt={`${cs.client} case study`}
                        className="w-full h-[360px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "" : "lg:col-start-1"}`}>
                    <Card className="rounded-2xl shadow-xl border-0">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <div className="text-xs text-primary font-semibold">{cs.industry}</div>
                            <h4 className="mt-2 text-2xl font-bold">{cs.client}</h4>
                          </div>
                        </div>

                        <div className="mt-6 space-y-4 text-gray-700">
                          <div>
                            <h5 className="font-semibold">Challenge</h5>
                            <p className="mt-1 text-sm">{cs.challenge}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold">Solution</h5>
                            <p className="mt-1 text-sm">{cs.solution}</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h5 className="font-semibold">Results</h5>
                          <div className="mt-3 grid grid-cols-3 gap-3">
                            {cs.results.map((r) => (
                              <div
                                key={r.label}
                                className="p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 text-center shadow-inner"
                              >
                                <div className="text-xl font-bold text-primary">{r.value}</div>
                                <div className="text-xs text-gray-600 mt-1">{r.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-tr from-primary/95 to-indigo-600 text-white">
        <div className="container-custom px-6 max-w-4xl mx-auto text-center">
          <MaskedHeading as="h2" className="text-3xl md:text-4xl font-extrabold">
            Ready to join our success stories?
          </MaskedHeading>
          <AnimatedParagraph className="mt-4 text-white/90">
            Let’s craft a measurable outcome for your business — discover how ERPNext and Clariox can change the way you operate.
          </AnimatedParagraph>

          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary px-6 hover:text-white border-white ">
              <Link to="/contact">Start Your Success Story</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-primary px-6">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Customers;
