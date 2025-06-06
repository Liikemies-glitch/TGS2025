"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { useRef } from 'react';
import { FloatingHearts } from "@/components/ui/floating-hearts";


interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  location?: string;
}

// Featured testimonial (best one)
const featuredTestimonial: Testimonial = {
  id: "featured",
  name: "Jarkko Kähkönen",
  role: "Founder, CEO",
  company: "Eemel.com",
  content: "The employees of The Goodside handled the task brilliantly, and the outcome of the UX design work was excellent. Everything was done on schedule, as agreed, and in an honest and straightforward manner.",
  rating: 5,
  image: "/images/client-testimonial-headshots/Jarkko Kähkönen.jpg",
  location: "Fuengirola, Spain"
};

// Real client testimonials from CSV data (excluding featured one)
const testimonials: Testimonial[] = [
  {
    id: "2",
    name: "Veikko Mäkinen",
    role: "Founder",
    company: "Camilla Safety",
    content: "Friendly and skilled professionals I enjoyed working with.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Veikko Mäkinen.jpg",
    location: "Turku"
  },
  {
    id: "3",
    name: "Teemu Toroi",
    role: "Co-founder",
    company: "1001 Lakes",
    content: "Things work smoothly with Janne, communication is straightforward and promises are kept. Excellent price/quality ratio.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Teemu Toroi.jpg"
  },
  {
    id: "4",
    name: "Ossi Lehto",
    role: "CEO",
    company: "MinnaLearn",
    content: "There was real doing, not just designing the doing.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Ossi Lehto.jpg",
    location: "Vantaa"
  },
  {
    id: "5",
    name: "Kasper Valtonen",
    role: "Founder",
    company: "Power Software",
    content: "We wanted to improve our developers ability to develop software that our customers actually like to use. UX/UI training by Goodside UX/UI professionals really made the difference!",
    rating: 5,
    image: "/images/client-testimonial-headshots/Kasper Valtonen.jpg",
    location: "Tampere"
  },
  {
    id: "7",
    name: "Harri Kulmala",
    role: "Executive board member",
    company: "Finnish Operations Center",
    content: "I think the score will improve when we get all things done and we'll see the whole package. Customer service so far is at least 100+",
    rating: 4,
    image: "/images/client-testimonial-headshots/Harri Kulmala.jpg",
    location: "Tampere"
  },
  {
    id: "8",
    name: "Joona Rantanen",
    role: "Co-Founder",
    company: "Materialisting",
    content: "Mikki handled everything and more smartly from start to finish.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Joona Rantanen.jpg"
  },
  {
    id: "9",
    name: "Jose Costa-Requena",
    role: "CEO",
    company: "Cumucore",
    content: "Good dialog to discuss project content.",
    rating: 4,
    image: "/images/client-testimonial-headshots/Jose Costa-Requena.jpg",
    location: "Helsinki"
  },
  {
    id: "10",
    name: "Samuli Sivula",
    role: "Head Of Operations",
    company: "Akamon",
    content: "Things have worked well in themselves. Extra hassle was caused by personnel changes on your end.",
    rating: 4,
    image: "/images/client-testimonial-headshots/Samuli Sivula.jpg"
  },
  {
    id: "11",
    name: "Joni Räsänen",
    role: "CTO",
    company: "Gebwell",
    content: "Very clear pricing and contract model was keypoint why we made a deal. No risk and transparent cost. During the project results was in awesome level. Communication was easy all the way.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Joni Räsänen.jpeg"
  }
];



const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative mb-16"
    >
      <Card className="border border-border/20 bg-card shadow-sm">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative flex-shrink-0">
              <Avatar className="h-20 w-20 md:h-24 md:w-24 border-2 border-border/20">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback className="text-xl">{testimonial.name[0]}</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="space-y-1">
                <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}, {testimonial.company}
                  {testimonial.location && ` • ${testimonial.location}`}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GridTestimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: index * 0.03 }}
          className="h-full"
        >
          <Card className="h-full transition-all duration-300 hover:shadow-sm border-border/20">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90 mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm truncate">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Floating Hearts */}
      <FloatingHearts />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mx-auto mb-16 max-w-3xl"
        >
          <p className="text-xs text-primary font-medium uppercase tracking-wide mb-4">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl mb-4">
            We Don&apos;t Just <span className="text-brand-blue dark:text-brand-blue-light">Design</span>. We Drive Growth.
          </h2>
          <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
            When SaaS companies need results, not just pretty interfaces, they choose us. Here&apos;s proof from those who&apos;ve experienced the difference.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <FeaturedTestimonial testimonial={featuredTestimonial} />

        {/* Grid Testimonials */}
        <GridTestimonials />
      </div>
    </section>
  );
} 