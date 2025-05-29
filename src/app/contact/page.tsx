"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/components/blocks/team-section';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from 'react';

// Extended team member interface
interface ExtendedTeamMember {
  quote: string;
  name: string;
  designation: string;
  src: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  bio?: string;
  skills?: string[];
  projects?: { name: string; description: string; }[];
}

// Extended team member data with additional details
const extendedTeamMembers: ExtendedTeamMember[] = [
  {
    ...teamMembers[0], // Mikki Aalto-Ylevä
    phone: '+35840 869 8887',
    email: 'mikki@goodside.fi',
    linkedin: 'https://linkedin.com/in/mikki-aalto-yleva',
    bio: "Mikki is the founder of The Good Side with over 8 years of experience in SaaS product development and strategy. He specializes in helping businesses scale their software products and optimize user experiences for maximum growth and retention.",
    skills: ['SaaS Strategy', 'Product Management', 'Business Development', 'User Experience', 'Growth Hacking'],
    projects: [
      { name: 'Seppo Learning Platform', description: 'Led the UX redesign that increased user engagement by 40%' },
      { name: 'Elisa Digital Services', description: 'Developed product strategy for new digital service offerings' },
      { name: 'Paytrail Integration Suite', description: 'Designed seamless payment integration experience' }
    ]
  },
  {
    ...teamMembers[1], // Tuomas Kaartoluoma
    email: 'tuomas@goodside.fi',
    linkedin: 'https://linkedin.com/in/tuomas-kaartoluoma',
    bio: "Tuomas is a fullstack designer with a passion for creating intuitive and beautiful user experiences. He focuses on user-centered design principles to craft interfaces that are both functional and delightful to use.",
    skills: ['UI/UX Design', 'Frontend Development', 'Design Systems', 'User Research', 'Prototyping'],
    projects: [
      { name: 'Kamux Digital Platform', description: 'Designed the complete user journey for car buying experience' },
      { name: 'Gebwell Health App', description: 'Created intuitive health monitoring interface' },
      { name: 'Design System Framework', description: 'Built comprehensive design system for multiple clients' }
    ]
  },
  {
    ...teamMembers[2], // Dũng Nguyen
    email: 'dung@goodside.fi',
    linkedin: 'https://linkedin.com/in/dung-nguyen-designer',
    bio: "Dũng is passionate about visual storytelling and brand identity. He brings creative solutions to complex design challenges, ensuring every pixel serves a purpose in creating meaningful user experiences.",
    skills: ['Visual Design', 'Brand Identity', 'Illustration', 'Motion Graphics', 'Creative Direction'],
    projects: [
      { name: 'Brand Identity Suite', description: 'Created comprehensive brand guidelines for 15+ startups' },
      { name: 'Interactive Storytelling', description: 'Designed engaging visual narratives for product launches' },
      { name: 'Motion Design Library', description: 'Developed reusable animation components' }
    ]
  },
  {
    ...teamMembers[3], // Aksel Suokas
    phone: '+358 50 123 4567',
    email: 'aksel@goodside.fi',
    linkedin: 'https://linkedin.com/in/aksel-suokas',
    bio: "Aksel focuses on creating seamless user journeys and innovative design systems. He believes great design should be invisible yet impactful in solving real problems and enhancing user experiences.",
    skills: ['Design Systems', 'User Journey Mapping', 'Interaction Design', 'Accessibility', 'Frontend Development'],
    projects: [
      { name: 'Accessibility Framework', description: 'Developed WCAG-compliant design patterns' },
      { name: 'Multi-platform Design System', description: 'Created unified design language across web and mobile' },
      { name: 'User Journey Optimization', description: 'Improved conversion rates by 35% through UX improvements' }
    ]
  }
];

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"cumucore-ux-research-interview"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand": "#3b82f6", "cal-brand-emphasis": "#2563eb"}, 
          "dark": {"cal-brand": "#60a5fa", "cal-brand-emphasis": "#3b82f6"}
        },
        "hideEventTypeDetails": true,
        "layout": "month_view"
      });
    })();
  }, []);

  const scrollToTeamSection = () => {
    document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBookingSection = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Effect */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 border-b border-border/30">
        {/* Background Effect from Home Page */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                  Let&apos;s Talk About Your Product&apos;s{' '}
                  <span className="text-brand-blue dark:text-brand-blue-light">Future</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                  Book a time or reach out directly. We&apos;re ready to discuss how we can help your SaaS product reach its full potential.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToBookingSection}
                  className="px-6"
                >
                  Book a Meeting
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToTeamSection}
                  className="px-6"
                >
                  Meet the Team
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-0 space-y-6">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/images/team/Mikki.jpeg" alt="Mikki Aalto-Ylevä" />
                      <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Mikki Aalto-Ylevä</h3>
                      <p className="text-muted-foreground">Founder of The Good Side</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground italic">
                    &quot;Hi! I&apos;m the founder of The Good Side. Happy to help you develop your product.&quot;
                  </p>

                  {/* Contact Details as Button-like Elements */}
                  <div className="space-y-3">
                    <a 
                      href="tel:+35840869887" 
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-200 group"
                    >
                      <Phone className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-foreground group-hover:text-foreground transition-colors">
                        +358 40 869 8887
                      </span>
                    </a>
                    <a 
                      href="mailto:mikki@goodside.fi" 
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-200 group"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-foreground group-hover:text-foreground transition-colors">
                        mikki@goodside.fi
                      </span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/mikki-aalto-yleva" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-200 group"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-foreground group-hover:text-foreground transition-colors">
                        LinkedIn Profile
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section - Same Background as Rest of Site */}
      <section id="booking-section" className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
              Book a <span className="text-brand-blue dark:text-brand-blue-light">Meeting</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a time that works for you for a free consultation about your project.
            </p>
          </motion.div>

          {/* Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="relative h-[600px] md:h-[700px]">
                <Cal 
                  namespace="cumucore-ux-research-interview"
                  calLink="aksel-suokas/cumucore-ux-research-interview"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  config={{
                    layout: "month_view"
                  }}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team-section" className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">
              Meet Our <span className="text-brand-blue dark:text-brand-blue-light">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the experts who will be working on your project.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedTeamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-border group">
                      <CardContent className="p-6 text-center space-y-4">
                        <Avatar className="h-20 w-20 mx-auto group-hover:scale-105 transition-transform duration-300">
                          <AvatarImage src={member.src} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{member.name}</h3>
                          <p className="text-muted-foreground text-sm">{member.designation}</p>
                        </div>
                        {(member.phone || member.email) && (
                          <div className="space-y-2 text-sm">
                            {member.phone && (
                              <div className="flex items-center justify-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{member.phone}</span>
                              </div>
                            )}
                            {member.email && (
                              <div className="flex items-center justify-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{member.email}</span>
                              </div>
                            )}
                          </div>
                        )}
                        <Button variant="ghost" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={member.src} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <DialogTitle className="text-xl">{member.name}</DialogTitle>
                          <p className="text-muted-foreground">{member.designation}</p>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Bio */}
                      {member.bio && (
                        <div>
                          <h4 className="font-semibold mb-2">About</h4>
                          <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                        </div>
                      )}

                      {/* Skills */}
                      {member.skills && member.skills.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Projects */}
                      {member.projects && member.projects.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Recent Projects</h4>
                          <div className="space-y-3">
                            {member.projects.map((project, projectIndex) => (
                              <div key={projectIndex} className="border-l-2 border-border pl-4">
                                <h5 className="font-medium">{project.name}</h5>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Contact Links */}
                      <div>
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <div className="space-y-2">
                          {member.email && (
                            <div className="flex items-center gap-3">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <a href={`mailto:${member.email}`} className="text-foreground hover:text-foreground/80 transition-colors">
                                {member.email}
                              </a>
                            </div>
                          )}
                          {member.phone && (
                            <div className="flex items-center gap-3">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <a href={`tel:${member.phone}`} className="text-foreground hover:text-foreground/80 transition-colors">
                                {member.phone}
                              </a>
                            </div>
                          )}
                          {member.linkedin && (
                            <div className="flex items-center gap-3">
                              <Linkedin className="h-4 w-4 text-muted-foreground" />
                              <a 
                                href={member.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-foreground/80 transition-colors"
                              >
                                LinkedIn Profile
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 