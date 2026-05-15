import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  gsap.registerPlugin(ScrollTrigger);
}

const hasElement = (selector) => {
  if (!isBrowser) return false;
  return document.querySelector(selector);
};

const hasElements = (selector) => {
  if (!isBrowser) return [];
  return gsap.utils.toArray(selector);
};

// ─────────────────────────────────────────────
// DESKTOP ANIMATIONS 1200px+
// ─────────────────────────────────────────────
function initDesktopAnimations() {
  const section = document.querySelector(".clinical-process");
  const paragraph = document.querySelector(".paragraph-sec p");
  const cardsContainer = document.querySelector(".cards-container");
  const cards = gsap.utils.toArray(".card");

  // Clinical Process Section
  // Runs only if these elements exist in Gatsby page
  if (section && cardsContainer && cards.length > 0) {
    gsap.set(cardsContainer, { opacity: 0 });
    gsap.set(cards, { x: window.innerWidth, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "15% 20%",
        end: "+=250%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    if (paragraph) {
      tl.to(paragraph, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power1.inOut",
      })
        .to({}, { duration: 3 })
        .to(paragraph, {
          opacity: 0.2,
          scale: 0.9,
          duration: 5,
          ease: "power1.inOut",
        });
    }

    tl.to(
      cardsContainer,
      {
        opacity: 1,
        duration: 7,
        ease: "power1.inOut",
      },
      "-=0.5"
    );

    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          x: 0,
          opacity: 1,
          duration: index === 0 ? 4 : 7 + index * 2,
          ease: "power1.out",
        },
        index === 0 ? undefined : "-=1.5"
      );
    });

    tl.to({}, { duration: 20 });
  }

  // Page Load Animations
  if (hasElement(".site-header")) {
    gsap.from(".site-header", {
      opacity: 0.2,
      duration: 1.5,
      ease: "power2.out",
    });
  }

  if (hasElement(".img-wrap")) {
    gsap.from(".img-wrap", {
      scale: 0.5,
      opacity: 0.3,
      duration: 2,
      ease: "power2.out",
    });
  }

  // Hero Section
  if (hasElement(".home-hero-sec")) {
    gsap.to(".site-header", {
      scrollTrigger: {
        trigger: ".home-hero-sec",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".home-hero-sec", {
      scrollTrigger: {
        trigger: ".home-hero-sec",
        start: "top 10%",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
      opacity: 0.1,
      scale: 1,
    });
  }

  if (hasElement(".next-section") && hasElement(".home-hero-sec")) {
    gsap.to(".next-section", {
      scrollTrigger: {
        trigger: ".home-hero-sec",
        start: "top+=100% top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
      opacity: 1,
      duration: 1,
    });
  }

  // About Section
  if (hasElement(".about-section img")) {
    gsap.fromTo(
      ".about-section img",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".about-section .para")) {
    gsap.fromTo(
      ".about-section .para",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".about-section .btn-wrapper")) {
    gsap.fromTo(
      ".about-section .btn-wrapper",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }

  // Practice Section
  if (hasElement(".practice-section .title-wrapper")) {
    gsap.fromTo(
      ".practice-section .title-wrapper",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".practice-section",
          start: "-50% 20%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".practice-section .paragraph-wrapper .left")) {
    gsap.fromTo(
      ".practice-section .paragraph-wrapper .left",
      { opacity: 0.3, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".practice-section",
          start: "-50% 20%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".practice-section .paragraph-wrapper .right p")) {
    gsap.fromTo(
      ".practice-section .paragraph-wrapper .right p",
      { opacity: 0.3, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2",
        stagger: 0.3,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".practice-section",
          start: "-50% 20%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }

  // Product List
  if (hasElement(".product-list ul li")) {
    gsap.fromTo(
      ".product-list ul li",
      { opacity: 0.3, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2",
        stagger: 0.3,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".product-list",
          start: "-150% 10%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }

  // International Training
  if (hasElement(".international-training .title-wrapper")) {
    gsap.fromTo(
      ".international-training .title-wrapper",
      { opacity: 0.3, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".international-training",
          start: "top 50%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".international-sec .left")) {
    gsap.fromTo(
      ".international-sec .left",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".international-sec",
          start: "top 75%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".international-sec .right")) {
    gsap.fromTo(
      ".international-sec .right",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: ".international-sec",
          start: "top 75%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }

  // Blog Section
  if (hasElement(".blog-card")) {
    gsap.fromTo(
      ".blog-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".blog-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".read-all-btn")) {
    gsap.fromTo(
      ".read-all-btn",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".blog-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }

  // FAQ Section
  const faqItems = hasElements(".faq-item");
  const faqButton = document.querySelector(".contact-btn");

  if (faqItems.length > 0) {
    gsap.set(faqItems, { opacity: 0, y: 50 });

    faqItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }

  if (faqButton) {
    gsap.set(faqButton, { opacity: 0, y: 20 });

    gsap.fromTo(
      faqButton,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.5,
        scrollTrigger: {
          trigger: faqButton,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }
}

// ─────────────────────────────────────────────
// TABLET / iPAD ANIMATIONS 768px – 1199px
// ─────────────────────────────────────────────
function initTabletAnimations() {
  if (hasElement(".site-header")) {
    gsap.from(".site-header", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }

  if (hasElement(".img-wrap")) {
    gsap.from(".img-wrap", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power2.out",
    });
  }

  const cards = hasElements(".card");

  if (cards.length > 0) {
    gsap.set(cards, { opacity: 0, y: 40 });

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1,
        }
      );
    });
  }

  if (hasElement(".paragraph-sec p")) {
    gsap.fromTo(
      ".paragraph-sec p",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".clinical-process",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (hasElement(".home-hero-sec")) {
    gsap.to(".home-hero-sec", {
      opacity: 0.2,
      scrollTrigger: {
        trigger: ".home-hero-sec",
        start: "50% top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  const fadeUp = (selector, trigger, delay = 0, stagger = 0.15) => {
    if (!hasElement(selector)) return;

    gsap.fromTo(
      selector,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        delay,
        stagger,
        scrollTrigger: {
          trigger,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  };

  fadeUp(".about-section img", ".about-section");
  fadeUp(".about-section .para", ".about-section", 0.2);
  fadeUp(".about-section .btn-wrapper", ".about-section", 0.4);
  fadeUp(".practice-section .title-wrapper", ".practice-section");
  fadeUp(".practice-section .paragraph-wrapper .left", ".practice-section");
  fadeUp(".practice-section .paragraph-wrapper .right p", ".practice-section", 0.1);
  fadeUp(".product-list ul li", ".product-list");
  fadeUp(".international-training .title-wrapper", ".international-training");
  fadeUp(".international-sec .left", ".international-sec");
  fadeUp(".international-sec .right", ".international-sec", 0.15);
  fadeUp(".internation-bottom-swiper .swiper-slide", ".international-bottom");
  fadeUp(".blog-card", ".blog-section");
  fadeUp(".read-all-btn", ".blog-section", 0.3);

  const faqItems = hasElements(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }

  if (hasElement(".contact-btn")) {
    gsap.fromTo(
      ".contact-btn",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".contact-btn",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }
}

// ─────────────────────────────────────────────
// GATSBY SAFE INIT
// ─────────────────────────────────────────────
export function initHomeAnimations() {
  if (!isBrowser) return () => {};

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    initDesktopAnimations();
  });

  mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
    initTabletAnimations();
  });

  ScrollTrigger.refresh();

  return () => {
    mm.revert();
  };
}