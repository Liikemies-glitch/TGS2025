"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import Marquee from "@/components/ui/marquee";
import { AvatarCircles } from "@/components/ui/avatar-circles";

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
    role: "Professional",
    company: "Turku",
    content: "Friendly and skilled professionals I enjoyed working with.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Veikko Mäkinen.jpg",
    location: "Turku"
  },
  {
    id: "3",
    name: "Teemu Toroi",
    role: "Business Owner",
    company: "Finland",
    content: "Things work smoothly with Janne, communication is straightforward and promises are kept. Excellent price/quality ratio.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Teemu Toroi.jpg"
  },
  {
    id: "4",
    name: "Ossi Lehto",
    role: "Professional",
    company: "Vantaa",
    content: "There was real doing, not just designing the doing.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Ossi Lehto.jpg",
    location: "Vantaa"
  },
  {
    id: "5",
    name: "Kasper Valtonen",
    role: "Development Lead",
    company: "Tampere",
    content: "We wanted to improve our developers ability to develop software that our customers actually like to use. UX/UI training by Goodside UX/UI professionals really made the difference!",
    rating: 5,
    image: "/images/client-testimonial-headshots/Kasper Valtonen.jpg",
    location: "Tampere"
  },
  {
    id: "7",
    name: "Harri Kulmala",
    role: "Business Owner",
    company: "Tampere",
    content: "I think the score will improve when we get all things done and we'll see the whole package. Customer service so far is at least 100+",
    rating: 4,
    image: "/images/client-testimonial-headshots/Harri Kulmala.jpg",
    location: "Tampere"
  },
  {
    id: "8",
    name: "Joona Rantanen",
    role: "Client",
    company: "Finland",
    content: "Mikki handled everything and more smartly from start to finish.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Joona Rantanen.jpg"
  },
  {
    id: "9",
    name: "Jose Costa-Requena",
    role: "Project Lead",
    company: "Helsinki",
    content: "Good dialog to discuss project content.",
    rating: 4,
    image: "/images/client-testimonial-headshots/Jose Costa-Requena.jpg",
    location: "Helsinki"
  },
  {
    id: "10",
    name: "Samuli Sivula",
    role: "Client",
    company: "Finland",
    content: "Things have worked well in themselves. Extra hassle was caused by personnel changes on your end.",
    rating: 4,
    image: "/images/client-testimonial-headshots/Samuli Sivula.jpg"
  }
];

const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mb-20"
    >
      {/* Featured label */}
      <div className="text-center mb-8">
        <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-4">
          Featured Review
        </p>
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
      
      {/* Clean featured testimonial card */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-xl p-8 md:p-12 bg-card border border-border/20 shadow-sm hover:shadow-md hover:border-border/40 transition-all duration-300">
          {/* Content */}
          <div className="text-center">
            <blockquote className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {`${testimonial.role}${testimonial.location ? `, ${testimonial.location}` : ''}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="w-80 mx-4 group">
      <div className="h-full bg-card border border-border/20 rounded-lg p-6 hover:shadow-sm hover:border-border/40 transition-all duration-300">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6 line-clamp-4">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground text-sm truncate">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs truncate">
              {`${testimonial.role}${testimonial.location ? `, ${testimonial.location}` : ''}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridTestimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.slice(0, 6).map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="h-full bg-card border border-border/20 rounded-lg p-6 hover:shadow-sm hover:border-border/40 transition-all duration-300">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-xs truncate">
                  {`${testimonial.role}${testimonial.location ? `, ${testimonial.location}` : ''}`}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export function TestimonialsSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'marquee'>('grid');

  // Convert testimonials to avatar format
  const avatarData = [featuredTestimonial, ...testimonials].map(t => ({
    imageUrl: t.image,
    profileUrl: "#"
  }));

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-16 max-w-3xl"
        >
          <p className="text-xs text-brand-blue dark:text-brand-blue-light font-medium uppercase tracking-wide mb-3">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl mb-4">
            What our <span className="text-brand-blue dark:text-brand-blue-light">clients</span> say
          </h2>
          <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our amazing clients have to say about working with us.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <FeaturedTestimonial testimonial={featuredTestimonial} />

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-2 p-1 bg-secondary/50 rounded-lg border border-border/20">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                viewMode === 'grid'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('marquee')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                viewMode === 'marquee'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Scroll View
            </button>
          </div>
        </motion.div>

        {/* Content Display */}
        {viewMode === 'grid' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <GridTestimonials />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Single marquee row */}
            <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem]">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </Marquee>
          </motion.div>
        )}

        {/* Simple client showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm mb-6">
            Join hundreds of satisfied clients
          </p>
          <div className="flex justify-center">
            <AvatarCircles 
              avatarUrls={avatarData.slice(0, 5)}
              numPeople={avatarData.length - 5}
              className="justify-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 