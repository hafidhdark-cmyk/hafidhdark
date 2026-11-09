"use client";

import * as React from "react";

export type RevealAnimation = "pop" | "fade-up" | "slide-right" | "slide-left" | "zoom";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "pop",
  delay = 0,
  duration = 650,
  threshold = 0.12,
  once = true,
  className = "",
  style,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Fallback if browser does not support IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute transform styles based on animation type
  const getTransform = () => {
    if (isVisible) return "none";
    switch (animation) {
      case "fade-up":
        return "translateY(32px)";
      case "slide-right":
        return "translateX(-32px)";
      case "slide-left":
        return "translateX(32px)";
      case "zoom":
        return "scale(0.92)";
      case "pop":
      default:
        return "translateY(28px) scale(0.95)";
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
