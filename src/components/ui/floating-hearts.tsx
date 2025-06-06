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
  showNumbers?: boolean;
}

// Default hearts configuration for parallax effect (positioned relative to center)
const defaultHeartsConfig: HeartConfig[] = [
  { 
    id: 1, 
    size: 138, 
    left: -460, 
    y: 22, 
    zIndex: -1, 
    image: '/heart.webp',
    parallaxSpeed: 0.5,
    rotation: 15,
    opacity: 0.6
  },
  { 
    id: 2, 
    size: 200, 
    left: 350, 
    y: 15, 
    zIndex: 10, 
    image: '/heart-right.webp',
    parallaxSpeed: 0.7,
    rotation: -20
  },
  { 
    id: 3, 
    size: 198, 
    left: -700, 
    y: 56, 
    zIndex: -2, 
    image: '/heart.webp',
    parallaxSpeed: 0.3,
    rotation: 45,
    opacity: 0.6
  },
  { 
    id: 4, 
    size: 138, 
    left: 450, 
    y: 70, 
    zIndex: 10, 
    image: '/heart-right.webp',
    parallaxSpeed: 0.6,
    rotation: -10
  },
  { 
    id: 5, 
    size: 120, 
    left: -100, 
    y: 93, 
    zIndex: 5, 
    image: '/heart.webp',
    parallaxSpeed: 0.4,
    rotation: 25
  }
];

const ParallaxHeart = ({ heart, showNumber = false }: { heart: HeartConfig; showNumber?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * heart.parallaxSpeed]);

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
        duration: 0.8, 
        delay: heart.id * 0.2,
        ease: "easeOut"
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
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
        {/* Number label for easy identification */}
        {showNumber && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-lg">
            {heart.id}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export function FloatingHearts({ hearts = defaultHeartsConfig, showNumbers = false }: FloatingHeartsProps) {
  return (
    <>
      {hearts.map((heart) => (
        <ParallaxHeart key={heart.id} heart={heart} showNumber={showNumbers} />
      ))}
    </>
  );
}

export { type HeartConfig }; 