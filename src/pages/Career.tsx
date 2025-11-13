import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Mail, Users, Clock, Award, Building, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LineMaskReveal, BlurFadeReveal } from '@/components/animations/ScrollReveal';
import { staggerCards } from '@/lib/gsap-animations';
import { useToast } from "@/hooks/use-toast";

const Career: React.FC = () => {
  const { toast } = useToast();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const jobsRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (jobsRef.current) {
      staggerCards(jobsRef.current);
    }
  }, []);

  const openModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob('');
    setName('');
    setEmail('');
    setPhone('');
    setExperience('');
    setMessage('');
  };

  const handleApplyJob = async () => {
    if (!name || !email || !phone || !experience) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("experience", experience);
      formData.append("job", selectedJob);
      formData.append("message", message);

      const response = await fetch("https://formspree.io/f/xnnogyan", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Application submitted",
          description: "Thanks for applying! We'll get back to you soon.",
        });
        closeModal();
        return;
      }

      triggerMailto();
    } catch (err) {
      triggerMailto();
    } finally {
      setLoading(false);
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Job Application for ${selectedJob} - ${name}`);
    const body = encodeURIComponent(
      `Hello Clariox Team,\n\nI am applying for the ${selectedJob} position.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nExperience: ${experience}\n\nMessage:\n${message}\n\nBest regards,\n${name}`
    );

    window.location.href = `mailto:info@clariox.in?subject=${subject}&body=${body}`;
    toast({
      title: "Email client opened",
      description: "Please complete your application via email.",
    });
    closeModal();
  };

  const jobOpenings = [
    {
      title: 'ERP Consultant',
      experience: '1+ Years',
      location: 'Pune/Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced ERP Consultant to join our team and help clients implement and optimize ERPNext solutions.',
      responsibilities: [
        'Analyze business requirements and design ERPNext solutions',
        'Configure and customize ERPNext modules',
        'Provide training and support to clients',
        'Manage project timelines and deliverables'
      ],
      requirements: [
        '1+ years of experience with ERPNext implementation',
        'Strong understanding of business processes',
        'Excellent communication and client management skills',
        'Ability to work independently and in a team'
      ]
    },
    {
      title: 'Developer',
      experience: '1+ Years',
      location: 'Pune/Remote',
      type: 'Full-time',
      description: 'Join our development team to build innovative ERPNext solutions and custom applications for our diverse client base.',
      responsibilities: [
        'Develop custom ERPNext modules and applications',
        'Integrate ERPNext with third-party systems',
        'Write clean, maintainable code following best practices',
        'Collaborate with the team to deliver high-quality solutions'
      ],
      requirements: [
        '1+ years of development experience',
        'Proficiency in Python, JavaScript, and web technologies',
        'Experience with ERPNext or similar ERP systems',
        'Strong problem-solving and analytical skills'
      ]
    }
  ];

  const benefits = [
    { icon: Award, title: 'Growth Opportunities', description: 'Continuous learning and career advancement' },
    { icon: Users, title: 'Great Team', description: 'Work with talented and supportive colleagues' },
    { icon: Clock, title: 'Flexible Work', description: 'Remote-friendly work environment' },
    { icon: Building, title: 'Modern Office', description: 'Well-equipped workspace in Pune' }
  ];

  return (
    <main>
      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
            >
              ✕
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Apply for {selectedJob}
              </h2>
              <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
                Fill in your details and we'll get back to you soon.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />

                <input
                  type="text"
                  placeholder="Years of Experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />

                <textarea
                  placeholder="Tell us about yourself (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />

                <Button
                  size="lg"
                  onClick={handleApplyJob}
                  disabled={!name || !email || !phone || !experience || loading}
                  className={`
                    w-full bg-gradient-primary text-white rounded-xl py-3 px-6 transition-all duration-300
                    ${!name || !email || !phone || !experience ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
                  `}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/de6u5kbiw/image/upload/v1763056421/clariox/austin-distel-wD1LRb9OeEo-unsplash_mhy19p.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl text-center space-y-8 text-white">
          <LineMaskReveal className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <h1>
              Join Our Team
            </h1>
          </LineMaskReveal>

          <LineMaskReveal
            delay={200}
            className="text-xl md:text-2xl lg:text-3xl font-light"
          >
            <h2>
              Build Your Career with Clariox
            </h2>
          </LineMaskReveal>

          <BlurFadeReveal
            delay={400}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            <p>
              Be part of a dynamic team that's transforming businesses with innovative ERPNext solutions. 
              Grow your skills, work on exciting projects, and make a real impact.
            </p>
          </BlurFadeReveal>

          {/* <BlurFadeReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-elegant text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                <Link to="#openings">
                  View Openings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </BlurFadeReveal> */}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h2>Why Join Clariox?</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>We offer more than just a job – we offer a platform for growth, innovation, and success.</p>
            </BlurFadeReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="card-item group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-0 shadow-card"
              >
                <CardContent className="p-6 md:p-8 space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="p-3 md:p-4 rounded-full bg-gradient-to-r from-primary to-violet-500 transition-colors">
                      <benefit.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold font-heading">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h2>Current Openings</h2>
            </LineMaskReveal>
            <BlurFadeReveal className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>We're looking for talented individuals to join our growing team. Check out our current openings below.</p>
            </BlurFadeReveal>
          </div>

          <div ref={jobsRef} className="space-y-8">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="card-item group hover:shadow-elegant transition-all duration-300 border border-border shadow-card"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:ml-6">
                      <Button
                        size="lg"
                        onClick={() => openModal(job.title)}
                        className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant transition-all duration-300 group"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href="mailto:info@clariox.in">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see the right fit? We're always looking for talented people.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="mailto:info@clariox.in?subject=General Inquiry">
                Send Your Resume
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 md:py-32 text-center px-6 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8 p-8 md:p-12 rounded-xl">
          <LineMaskReveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <h2>Ready to Grow With Us?</h2>
          </LineMaskReveal>

          <BlurFadeReveal className="text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              Join a team that values innovation, collaboration, and continuous learning. 
              Your next career adventure starts here.
            </p>
          </BlurFadeReveal>

          <BlurFadeReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
              {/* <Button
                asChild
                size="lg"
                className="bg-white text-primary font-semibold px-10 py-4 rounded-xl shadow-elegant hover:opacity-95 transition-all"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button> */}

              {/* <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10 px-10 py-4 rounded-xl transition-all"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button> */}
            </div>
          </BlurFadeReveal>
        </div>
      </section>
    </main>
  );
};

export default Career;