"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import Image from 'next/image';

interface HeartConfig {
  id: number;
  size: number;
  left: number;
  y: number;
  zIndex: number;
  image: string;
  parallaxSpeed: number;
  rotation: number;
  opacity?: number;
}

interface FloatingHeartsProps {
  hearts?: HeartConfig[];
}

// Default hearts configuration for parallax effect (positioned relative to center)
const defaultHeartsConfig: HeartConfig[] = [
  { 
    id: 1, 
    size: 138, 
    left: -460, 
    y: 25, 
    zIndex: -1, 
    image: '/heart.webp',
    parallaxSpeed: 0.8,
    rotation: 15,
    opacity: 0.6
  },
  { 
    id: 2, 
    size: 200, 
    left: 350, 
    y: 22, 
    zIndex: 10, 
    image: '/heart-right.webp',
    parallaxSpeed: 1.0,
    rotation: -20
  },
  { 
    id: 3, 
    size: 198, 
    left: -700, 
    y: 56, 
    zIndex: -2, 
    image: '/heart.webp',
    parallaxSpeed: 0.6,
    rotation: 45,
    opacity: 0.6
  },
  { 
    id: 4, 
    size: 138, 
    left: 450, 
    y: 80, 
    zIndex: 10, 
    image: '/heart-right.webp',
    parallaxSpeed: 0.9,
    rotation: -10
  },
  { 
    id: 5, 
    size: 120, 
    left: -250, 
    y: 95, 
    zIndex: 5, 
    image: '/heart.webp',
    parallaxSpeed: 0.7,
    rotation: 25
  }
];

const ParallaxHeart = ({ heart }: { heart: HeartConfig }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300 * heart.parallaxSpeed]);

  return (
    <motion.div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: `${heart.y}%`,
        zIndex: heart.zIndex,
        x: heart.left,
        y
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: heart.opacity ?? 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut"
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
          filter: [
            'drop-shadow(0 0 5px rgba(59, 130, 246, 0.2)) drop-shadow(0 0 10px rgba(37, 99, 235, 0.15))',
            'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 15px rgba(37, 99, 235, 0.2))',
            'drop-shadow(0 0 5px rgba(59, 130, 246, 0.2)) drop-shadow(0 0 10px rgba(37, 99, 235, 0.15))'
          ]
        }}
        transition={{ 
          duration: 4 + heart.id * 0.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
        style={{
          width: heart.size,
          height: heart.size
        }}
      >
        <Image
          src={heart.image}
          alt=""
          width={heart.size}
          height={heart.size}
          className="object-contain drop-shadow-lg"
          draggable={false}
        />

      </motion.div>
    </motion.div>
  );
};

export function FloatingHearts({ hearts = defaultHeartsConfig }: FloatingHeartsProps) {
  return (
    <>
      {hearts.map((heart) => (
        <ParallaxHeart key={heart.id} heart={heart} />
      ))}
    </>
  );
}

export { type HeartConfig }; 