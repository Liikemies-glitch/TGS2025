"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && mounted) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, mounted, handleNext]);

  const getRotation = (index: number) => {
    if (!mounted) return 0;
    // Use a deterministic rotation based on index to avoid hydration mismatch
    const rotations = [0, -5, 8, -3, 6, -8, 4, -6];
    return rotations[index % rotations.length];
  };

  const randomRotateY = (index: number) => {
    if (!mounted) return 0;
    return getRotation(index);
  };

  // Show a static version during SSR/hydration
  if (!mounted) {
    return (
      <div className={cn("max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12", className)}>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-80 lg:h-96 w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 origin-bottom">
                <Image
                  src={testimonials[0]?.src || ""}
                  alt={testimonials[0]?.name || ""}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-between flex-col lg:py-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">
                {testimonials[0]?.name}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground mb-4">
                {testimonials[0]?.designation}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {testimonials[0]?.quote}
              </p>
            </div>
            <div className="flex gap-3 pt-6 lg:pt-8">
              <button className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center group/button transition-colors">
                <IconArrowLeft className="h-4 w-4 text-foreground" />
              </button>
              <button className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center group/button transition-colors">
                <IconArrowRight className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("max-w-6xl mx-auto px-0 md:px-6 lg:px-8 py-12", className)}>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative h-80 lg:h-96 w-full max-w-sm mx-auto lg:mx-0">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-between flex-col lg:py-6">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">
              {testimonials[active].name}
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground mb-4">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-3 pt-6 lg:pt-8">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center group/button transition-colors"
            >
              <IconArrowLeft className="h-4 w-4 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center group/button transition-colors"
            >
              <IconArrowRight className="h-4 w-4 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 