import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

/**
 * Creative Modern-Art Contact Page
 * - no icons, image-driven
 * - glassmorphism, animated gradients, framer-motion
 * - uses your Button and useToast
 *
 * Swap the Unsplash image URLs for brand shots if desired.
 */

const heroImage =
  "https://images.unsplash.com/photo-1625296278775-c0ccc86b9338?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"; // abstract creative light
const tileA =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"; // desk/dev
const tileB =
  "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"; // sketching
const tileC =
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80"; // light reflections
const studioImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80"; // creative studio

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, ease: "easeOut", duration: 0.5 },
  },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.45 } },
};

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    // subtle accessibility: focus name on mount for keyboard users
    const el = formRef.current?.querySelector<HTMLInputElement>("#name");
    el?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // simulate send
      await new Promise((r) => setTimeout(r, 1400));
      toast({
        title: "Message sent",
        description: "Thanks — we’ll respond within 24 hours.",
      });
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      toast({
        title: "Send failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20 font-inter text-gray-900">
      {/* ---------------- HERO ---------------- */}
      <section
        className="relative h-[68vh] flex items-center"
        aria-label="Contact hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10,10,15,0.45), rgba(20,18,30,0.45)), url(${heroImage})`,
            filter: "saturate(0.95)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

        <div className="container-custom relative z-10 max-w-5xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Let’s Create Something Extraordinary
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We combine craft, code and care to transform ideas into memorable
              products. Tell us about your project and we’ll help you shape the
              next chapter.
            </p>

            <div className="mx-auto mt-8 inline-flex rounded-full bg-white/10 py-1 px-3 backdrop-blur-sm">
              <div className="h-1 w-36 rounded-full bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 animate-[pulse_6s_infinite]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- VISUAL STORY ---------------- */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            <motion.figure variants={item} className="rounded-xl overflow-hidden">
              <img
                src={tileA}
                alt="Workspace - creative"
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />
              <figcaption className="mt-4 text-sm text-gray-600">
                Ideas sketched, then refined — where strategy meets craft.
              </figcaption>
            </motion.figure>

            <motion.figure variants={item} className="lg:col-span-2 grid grid-rows-2 gap-6">
              <img
                src={tileB}
                alt="Sketching"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
              <div className="grid grid-cols-2 gap-6">
                <img
                  src={tileC}
                  alt="Light reflections"
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
                <div className="rounded-xl p-6 bg-gradient-to-tr from-white/80 to-white/60 shadow-inner backdrop-blur-sm flex flex-col justify-center">
                  <p className="text-gray-900 font-medium">
                    Ideas become designs.
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    Designs become product experiences that people love.
                  </p>
                </div>
              </div>
            </motion.figure>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FORM + STUDIO PREVIEW ---------------- */}
      <section className="py-16 bg-[#fbfbfd]">
        <div className="container-custom px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* left: studio image + quote */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={studioImage}
              alt="Studio preview"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-sm uppercase tracking-wider text-white/80">
                Studio
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                "Every great project begins with a simple hello."
              </h3>
              <p className="mt-3 text-sm text-white/90 max-w-[38ch]">
                Invite us for a conversation — we listen first, then co-create.
              </p>
            </div>

            {/* decorative shapes */}
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-gradient-to-br from-pink-300 to-indigo-300 opacity-30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -left-12 -bottom-10 w-36 h-36 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 opacity-20 blur-2xl"
            />
          </motion.div>

          {/* right: floating glass form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative"
          >
            <div
              className="rounded-2xl p-8 shadow-2xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.60))",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <h4 className="text-lg font-semibold">Let's talk</h4>
              <p className="mt-2 text-sm text-gray-600">
                Share a little about your challenge — timelines, goals, and a
                preferred contact method. We’ll propose the best next step.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name" className="text-sm text-gray-700">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Asha Patel"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="asha@example.com"
                      type="email"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="phone" className="text-sm text-gray-700">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98xxxx xxxx"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm text-gray-700">
                      Company (optional)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline & budget (if any)..."
                    required
                    className="mt-1"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white font-medium"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            {/* small note */}
            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. We will never share your details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FINAL CTA / FOOTER BANNER ---------------- */}
      <section className="py-16">
        <div className="container-custom px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80"
              alt="Creative meeting"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="rounded-xl p-8 bg-gradient-to-b from-white/95 to-white/80 shadow-xl">
            <h3 className="text-2xl font-bold">Visit our studio or invite us over</h3>
            <p className="mt-3 text-sm text-gray-600">
              We love in-person conversations. If remote is better, we’ll bring the studio to you.
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-black text-white hover:opacity-95 px-5 py-2"
              >
                <a href="/contact">Schedule a visit</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
