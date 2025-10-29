import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  Target,
  Code,
  Cpu,
  Rocket,
  ArrowRight,
} from "lucide-react";

const About: React.FC = () => {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
  return (
    <main className="pt-20 font-[Inter] text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building Smarter Businesses with ERPNext
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            At Clariox Technologies, we combine technology, design, and strategy
            to help organizations automate, scale, and innovate.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Clariox Technologies is a technology consulting
              company specializing in ERPNext implementation, customization, and
              automation. Our mission is to simplify operations for growing
              businesses through intelligent, scalable, and human-centric
              digital systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a passionate team of certified professionals, we’ve helped
              enterprises across 7+ industries transform their workflows and
              unlock efficiency.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1200&q=80"
              alt="Our Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            From startups to enterprises, we empower organizations to run smarter with
            tailored ERPNext systems and business automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "ERPNext Implementation",
                desc: "End-to-end deployment and customization to match your workflows.",
              },
              {
                icon: Code,
                title: "Custom App Development",
                desc: "We build custom modules and integrations to expand ERPNext’s power.",
              },
              {
                icon: Rocket,
                title: "Digital Transformation",
                desc: "Helping businesses evolve with cloud solutions and automation tools.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
              >
                <CardContent className="text-center py-10">
                  <div className="flex justify-center mb-5">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Expertise"
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Expertise You Can Trust
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our experienced team includes ERPNext developers, business analysts,
              and functional consultants who understand your domain deeply.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                <span>42+ successful ERPNext deployments</span>
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span>7+ Happy Clients</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                <span>Serving 15+ industries </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
  <section className="py-20 bg-gray-50 text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      A Strong Footprint
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      Clariox Technologies partners with clients across Multiple regions, delivering solutions that scale globally.
    </p>
    <div className="relative w-full overflow-hidden rounded-xl shadow-md max-h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80"
        alt="Global presence"
        className="w-full h-auto object-cover sm:rounded-xl"
      />
    </div>
  </div>
</section>


      {/* ===== CTA ===== */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-4">
            Let’s Build Your Success Story
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            From implementation to ongoing support, Clariox Technologies is your
            trusted ERPNext partner. Let’s bring efficiency and clarity to your business.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
