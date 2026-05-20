import React, { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import heartFailureImg from "../images/Heart-Failure-&-Transplant-Care.png"
import valveImg from "../images/Valve-Repair-&-Replacement.png"
import minimallyImg from "../images/Minimally-Invasive.png"
import aorticImg from "../images/Aortic-&-Coronary-Surgery.png"

const isBrowser = typeof window !== "undefined"

if (isBrowser) {
  gsap.registerPlugin(ScrollTrigger)
}

const clinicalCards = [
  {
    title: "Heart Failure & Transplant Care",
    text: "Advanced heart failure management, transplant surgery, mechanical circulatory support, and follow-up care.",
    image: heartFailureImg,
    alt: "Heart Failure",
  },
  {
    title: "Valve Repair & Replacement",
    text: "Emphasis on repair strategies preserving native valve function for long-term outcomes.",
    image: valveImg,
    alt: "Valve Repair",
  },
  {
    title: "Minimally Invasive & Robotic Cardiac Surgery",
    text: "Targeted approaches reducing recovery time while maintaining precision.",
    image: minimallyImg,
    alt: "Minimally Invasive Surgery",
  },
  {
    title: "Aortic & Coronary Surgery",
    text: "Targeted approaches reducing recovery time while maintaining precision.",
    image: aorticImg,
    alt: "Aortic and Coronary Surgery",
  },
]

export default function ClinicalProcess() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (!isBrowser || !sectionRef.current) return

    const section = sectionRef.current

    // Defer animation setup to ensure ScrollTrigger is ready and DOM is stable
    const timeoutId = setTimeout(() => {
      if (!section) return

      const ctx = gsap.context(() => {
      const paragraph = section.querySelector(".paragraph-sec p")
      const cardsContainer = section.querySelector(".cards-container")
      const cards = gsap.utils.toArray(section.querySelectorAll(".clinical-card"))

        if (window.innerWidth >= 1200) {
          gsap.set(section, {
          minHeight: "80vh",
        })

        gsap.set(paragraph, {
          opacity: 1,
          scale: 1,
          y: 0,
        })

        gsap.set(cardsContainer, {
          opacity: 0,
        })

        gsap.set(cards, {
          x: 180,
          opacity: 0,
          force3D: true,
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
            end: "+=1200",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })

        tl.to(paragraph, {
          opacity: 0.18,
          scale: 0.92,
          duration: 2,
          ease: "power1.inOut",
        })

        tl.to(
          cardsContainer,
          {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
          },
          "-=1"
        )

        tl.to(cards, {
          x: 0,
          opacity: 1,
          duration: 3,
          stagger: 0.8,
          ease: "power2.out",
        })

        tl.to({}, { duration: 1.5 })
        }

        ScrollTrigger.refresh()
      }, section)

      return () => ctx.revert()
    }, 100) // 100ms delay ensures ScrollTrigger is ready

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="clinical-process" ref={sectionRef}>
      <div className="title-wrapper">
        <h2>
          Clinical Focus <span>Depth across critical domains</span>
        </h2>
      </div>

      <div className="content-wrapper">
        <div className="paragraph-sec">
          <p>
            Dr. Pingle travels internationally to learn emerging cardiac
            techniques and bring them home to India. From robotic surgery in
            Germany to TAVI workshops in the UK, his patients benefit from
            world-class innovations.
          </p>
        </div>

        <div className="cards-container">
          {clinicalCards.map((card, index) => (
            <div className="card clinical-card" key={index}>
              <div className="card-image">
                <img src={card.image} alt={card.alt} />
              </div>

              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}