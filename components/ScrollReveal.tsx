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
  duration = 550,
  threshold = 0.1,
  once = false, // Set to false so animations re-trigger continuously on every scroll pass
  className = "",
  style,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [exitPosition, setExitPosition] = React.useState<"bottom" | "top">("bottom");
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Fallback if browser does not support IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    // Determine initial position relative to viewport
    const rect = node.getBoundingClientRect();
    if (rect.top < 0) {
      setExitPosition("top");
    } else if (rect.bottom > window.innerHeight) {
      setExitPosition("bottom");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else {
          setIsVisible(false);
          // If the top of the element is above viewport, it exited through the top
          if (entry.boundingClientRect.top < 0) {
            setExitPosition("top");
          } else {
            setExitPosition("bottom");
          }
        }
      },
      {
        threshold,
        rootMargin: "-20px 0px -20px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute transform styles based on animation type and scrolling direction
  const getTransform = () => {
    if (isVisible) return "none";

    // Scrolling down: elements entering from below (or exited downwards)
    if (exitPosition === "bottom") {
      switch (animation) {
        case "fade-up":
          return "translateY(36px)";
        case "slide-right":
          return "translateX(-36px) translateY(16px)";
        case "slide-left":
          return "translateX(36px) translateY(16px)";
        case "zoom":
          return "scale(0.92)";
        case "pop":
        default:
          return "translateY(30px) scale(0.95)";
      }
    }

    // Scrolling up: elements entering from above (or exited upwards) - CONTRASTING MOVEMENT
    switch (animation) {
      case "fade-up":
        return "translateY(-36px)";
      case "slide-right":
        return "translateX(36px) translateY(-16px)";
      case "slide-left":
        return "translateX(-36px) translateY(-16px)";
      case "zoom":
        return "scale(1.06)";
      case "pop":
      default:
        return "translateY(-30px) scale(0.95)";
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
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
