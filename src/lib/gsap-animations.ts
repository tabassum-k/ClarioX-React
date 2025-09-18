import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Line mask reveal animation for headings
export const maskedReveal = (element: HTMLElement) => {
  const text = element.querySelector('.reveal-text') as HTMLElement;
  const mask = element.querySelector('.mask-overlay') as HTMLElement;
  
  if (!text || !mask) return;
  
  // Initial state
  gsap.set(text, {
    y: 30,
    opacity: 0,
    filter: "blur(10px)"
  });
  
  gsap.set(mask, {
    scaleX: 0,
    transformOrigin: "left center"
  });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
  
  // Animate mask reveal first
  tl.to(mask, {
    scaleX: 1,
    duration: 0.8,
    ease: "power3.inOut"
  })
  // Then reveal text
  .to(text, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out"
  }, "-=0.4")
  // Finally hide mask
  .to(mask, {
    scaleX: 0,
    transformOrigin: "right center",
    duration: 0.6,
    ease: "power3.inOut"
  }, "-=0.6");
  
  return tl;
};

// Blur reveal animation for paragraphs
export const blurReveal = (element: HTMLElement) => {
  gsap.set(element, {
    y: 40,
    opacity: 0,
    filter: "blur(12px)"
  });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.to(element, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power3.out"
  });
  
  return tl;
};

// Staggered word reveal animation
export const staggeredWordReveal = (element: HTMLElement) => {
  const words = element.querySelectorAll('.word');
  
  gsap.set(words, {
    y: 20,
    opacity: 0,
    filter: "blur(5px)"
  });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 88%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.to(words, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });
  
  return tl;
};

// Cards stagger animation
export const staggerCards = (container: HTMLElement) => {
  const cards = container.querySelectorAll('.card-item');
  
  gsap.set(cards, {
    y: 60,
    opacity: 0,
    scale: 0.9
  });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl.to(cards, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });
  
  return tl;
};

// Page transition animations
export const pageTransitionIn = (element: HTMLElement) => {
  gsap.set(element, {
    opacity: 0,
    y: 30
  });
  
  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  });
};

export const pageTransitionOut = (element: HTMLElement) => {
  return gsap.to(element, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power3.in"
  });
};

// Navbar scroll behavior
export const initNavbarScroll = (navbar: HTMLElement) => {
  let lastScroll = 0;
  
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      gsap.to(navbar, {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(navbar, {
        backgroundColor: "transparent",
        backdropFilter: "none",
        borderBottom: "1px solid transparent",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    
    if (currentScroll > 300) {
      if (currentScroll > lastScroll) {
        // Scrolling down
        gsap.to(navbar, {
          y: -100,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Scrolling up
        gsap.to(navbar, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
    
    lastScroll = currentScroll;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Utility to split text into words
export const splitTextIntoWords = (element: HTMLElement) => {
  const text = element.textContent || '';
  const words = text.split(' ');
  
  element.innerHTML = words
    .map(word => `<span class="word inline-block">${word}</span>`)
    .join(' ');
};