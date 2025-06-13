'use client';
import { ReactNode, useEffect, useState, useMemo, Children } from 'react';
import { motion, Variants } from 'motion/react';
import { cn } from '@/lib/utils';

type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Pre-compute all preset variants to avoid runtime computation
const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  'blur-slide': {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { 
        opacity: 0, 
        filter: 'blur(8px)', 
        y: 30 
      },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)', 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }
      },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 300, damping: 8 },
      },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Optimize mounting check with minimal effect
  useEffect(() => {
    // Use requestAnimationFrame to defer mounting until after initial paint
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Memoize variant selection to avoid recomputation
  const selectedVariants = useMemo(() => {
    return preset
      ? presetVariants[preset]
      : { container: defaultContainerVariants, item: defaultItemVariants };
  }, [preset]);

  // Memoize final variants to avoid recomputation
  const containerVariants = useMemo(() => 
    variants?.container || selectedVariants.container,
    [variants?.container, selectedVariants.container]
  );
  
  const itemVariants = useMemo(() => 
    variants?.item || selectedVariants.item,
    [variants?.item, selectedVariants.item]
  );

  // Memoize processed children to avoid reprocessing
  const processedChildren = useMemo(() => 
    Children.toArray(children),
    [children]
  );

  // Render with CSS-only hiding initially to prevent layout shift
  if (!isMounted) {
    return (
      <div 
        className={cn("opacity-0 transition-opacity duration-0", className)}
        style={{ visibility: 'hidden' }}
      >
        {processedChildren.map((child, index) => (
          <div key={index}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className={cn(className)}
    >
      {processedChildren.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup }; 