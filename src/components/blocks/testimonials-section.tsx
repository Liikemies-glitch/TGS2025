"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  name: "Anna-Mari Jääskeläinen",
  role: "Product Manager",
  company: "Helsinki",
  content: "Goodside offered a trial period for their design service, aimed at designing and implementing improvements to one area of our product. During the trial period, I got to know the offered service and practically experience how the collaboration works and what kind of results are produced during the trial. I was very satisfied with the trial period, as it clearly distinguished Goodside from its competitors and strengthened trust on both sides. Overall, Goodside has customer service very well in hand, as I felt my needs were heard and I was able to effectively advance my development project with just a 'trial'!",
  rating: 5,
  image: "/images/client-testimonial-headshots/Anna-Mari Jääskeläinen.jpg",
  location: "Helsinki"
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
    name: "Jarkko Kähkönen",
    role: "Project Manager",
    company: "Fuengirola",
    content: "The employees of The Goodside handled the task brilliantly, and the outcome of the UX design work was excellent. Everything was done on schedule, as agreed, and in an honest and straightforward manner.",
    rating: 5,
    image: "/images/client-testimonial-headshots/Jarkko Kähkönen.jpg",
    location: "Fuengirola"
  },
  {
    id: "6",
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

const TESTIMONIALS_PER_PAGE = 9;

// Background floating elements
const FloatingElement = ({ delay, duration, className }: { delay: number; duration: number; className: string }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${className}`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-20"
    >
      {/* Featured label */}
      <div className="text-center mb-8">
        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide mb-2">
          Featured Review
        </p>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
      
      {/* Featured testimonial card with shooting star border */}
      <div className="group relative">
        {/* Container that creates the animated border */}
        <div className="relative rounded-2xl p-[1px] bg-border/50 overflow-hidden">
          {/* Animated shooting star elements that ARE the border */}
          <div className="absolute inset-0 rounded-2xl">
            <div
              className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom opacity-80"
              style={{
                background: 'radial-gradient(circle, #2563eb, transparent 10%)',
                animationDuration: '8s',
              }}
            />
            <div
              className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top opacity-80"
              style={{
                background: 'radial-gradient(circle, #2563eb, transparent 10%)',
                animationDuration: '8s',
              }}
            />
          </div>

          {/* Inner card content */}
          <div className="relative h-full bg-card rounded-[calc(1rem-1px)] p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Content */}
            <div className="relative text-center">
              <blockquote className="text-foreground/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-border/30 group-hover:ring-blue-600/30 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-[calc(1rem-1px)] bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="relative h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-border/60">
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
        <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6 line-clamp-6">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/20 transition-all duration-300"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm truncate">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs truncate">
              {testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ''}
            </p>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);
  const startIndex = currentPage * TESTIMONIALS_PER_PAGE;
  const endIndex = startIndex + TESTIMONIALS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement 
          delay={0} 
          duration={8} 
          className="top-20 left-10 w-32 h-32 bg-blue-600/10 dark:bg-blue-400/10" 
        />
        <FloatingElement 
          delay={2} 
          duration={12} 
          className="top-40 right-20 w-24 h-24 bg-purple-600/10 dark:bg-purple-400/10" 
        />
        <FloatingElement 
          delay={4} 
          duration={10} 
          className="bottom-40 left-20 w-20 h-20 bg-green-600/10 dark:bg-green-400/10" 
        />
        <FloatingElement 
          delay={6} 
          duration={14} 
          className="bottom-20 right-10 w-28 h-28 bg-orange-600/10 dark:bg-orange-400/10" 
        />
        <FloatingElement 
          delay={1} 
          duration={9} 
          className="top-60 left-1/2 w-16 h-16 bg-pink-600/10 dark:bg-pink-400/10" 
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center mx-auto mb-16"
        >
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide mb-3">
            Wall of Love
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl mb-4">
            What our <span className="text-blue-600 dark:text-blue-400">clients</span> say
          </h2>
          <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our amazing clients have to say about working with us.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <FeaturedTestimonial testimonial={featuredTestimonial} />

        {/* Regular Testimonials with Fixed Height Container */}
        <div className="relative">
          <motion.div 
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-[800px] md:min-h-[600px] lg:min-h-[500px] flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1">
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              {/* Previous Button */}
              <button
                onClick={handlePrevPage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary transition-colors group border border-border/50"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
              </button>

              {/* Page Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-blue-600 dark:bg-blue-400 scale-125 shadow-lg shadow-blue-600/25'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary transition-colors group border border-border/50"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Join hundreds of satisfied clients
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex -space-x-2">
              {[featuredTestimonial, ...testimonials].slice(0, 4).map((testimonial) => (
                <Image
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              and many more...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 