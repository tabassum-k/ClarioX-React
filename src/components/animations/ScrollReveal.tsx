import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Style A: Text opacity 0 → blurred → sharp with fade-in
export function BlurFadeReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-800 ease-out",
        isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4",
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Style B: Text reveals left-to-right, as if "typed in"
export function TypewriterReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden transition-all duration-900 ease-out", className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className={cn("transition-transform duration-900 ease-out", isVisible ? "translate-x-0" : "-translate-x-full")}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Style C: Text scales from 0.9 → 1.0 with easing + fade-in
export function ScaleFadeReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6",
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Style D: Text starts as "cut mask" (clipped text) → slides to full reveal
export function ClipReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-800 ease-out", isVisible ? "opacity-100" : "opacity-0", className)}
      style={{
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Style E: Words stagger in one by one with soft bounce
export function StaggerBounceReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const renderStaggeredText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className={cn(
          "inline-block transition-all duration-500 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
        style={{
          transitionDelay: `${delay + index * 50}ms`, // Reduced from 100ms to 50ms
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Bounce easing
        }}
      >
        {word}
        {index < text.split(" ").length - 1 && " "}
      </span>
    ))
  }

  return (
    <div ref={ref} className={className}>
      {typeof children === "string" ? renderStaggeredText(children) : children}
    </div>
  )
}

// Style F: Text reveals line by line with mask effect
export function LineMaskReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className={cn("transition-all duration-900 ease-out", isVisible ? "translate-y-0" : "translate-y-full")}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Utility component to wrap any content with scroll reveal
export function ScrollReveal({
  children,
  animation = "blur-fade",
  className,
  delay = 0,
}: ScrollRevealProps & {
  animation?: "blur-fade" | "typewriter" | "scale-fade" | "clip" | "stagger-bounce" | "line-mask"
}) {
  const animations = {
    "blur-fade": BlurFadeReveal,
    typewriter: TypewriterReveal,
    "scale-fade": ScaleFadeReveal,
    clip: ClipReveal,
    "stagger-bounce": StaggerBounceReveal,
    "line-mask": LineMaskReveal,
  }

  const AnimationComponent = animations[animation]

  return (
    <AnimationComponent className={className} delay={delay}>
      {children}
    </AnimationComponent>
  )
}