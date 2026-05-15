import React, { useEffect } from "react";

const tabsData = [
  {
    label: "Coronary Artery Procedures",
slides: [
  {
    title: "Heart Bypass Surgery (CABG)",
    description:
      "Heart bypass surgery is performed when the arteries supplying blood to the heart become narrowed or blocked. Rather than removing the blockage, the surgeon uses healthy blood vessels from other parts of the body to create new pathways, allowing blood to reach the heart muscle efficiently. This helps relieve chest pain, improve heart function, and reduce the risk of heart attacks in the future. The decision to perform bypass surgery depends on several factors, including the extent of artery blockage, the strength of your heart muscle, and how long-term blood flow can be preserved. It is often recommended for patients with extensive or complex coronary disease where less invasive treatments like stents may not provide durable results.",
    image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/heart-bypass-exp.webp",
    link: "#",
  },
  {
    title: "Angiography & Angioplasty",
    description:
      "Coronary angiography is a diagnostic procedure that maps the heart’s arteries using contrast dye and X-ray imaging. It allows precise identification of narrowed or blocked segments and helps determine the most appropriate treatment strategy. If a blockage is suitable for minimally invasive correction, angioplasty may be performed during the same session. A small balloon is advanced to the narrowed area and inflated to widen the artery. In most cases, a stent (a tiny mesh tube) is placed to keep the vessel open and maintain blood flow. ",
    image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/angiography-angioplasty-exp.webp",
    link: "#",
  },
],
  },
  {
    label: "Heart Valve Procedures",
    slides: [
      {
        title: "Heart Valve Repair & Replacement",
        description:
          "When a heart valve does not function properly, surgery may be required to restore normal blood flow. Whenever possible, valve repair is preferred. Repair preserves the patient’s natural valve structure, maintains more natural heart mechanics, and often reduces the need for lifelong medication. It is especially beneficial in mitral and certain tricuspid valve conditions. However, if the valve is severely damaged, calcified, or structurally unsuitable for repair, replacement becomes necessary. In such cases, the diseased valve is replaced with either a mechanical valve or a biological (tissue) valve. The choice depends on age, lifestyle, medical history, and long-term durability expectations. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/heart-valve-exp.webp",
        link: "#",
      },
      {
        title: "TAVI (Transcatheter Aortic Valve Implantation)",
        description:
          "TAVI is a minimally invasive procedure designed to replace a severely narrowed aortic valve without traditional open-heart surgery. Instead of opening the chest, a new valve is delivered through a catheter which is commonly inserted through an artery in the groin and positioned within the diseased valve. This technique is particularly beneficial for older patients or those considered high risk for conventional surgery. Because it avoids a large chest incision, recovery is typically faster; hospital stays are shorter, and physical stress is reduced. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/tavi-exp.webp",
        link: "#",
      },
    ],
  },
  {
    label: "Advanced Heart Surgery",
    slides: [
      {
        title: "Minimally Invasive & Robotic Cardiac Surgery",
        description:
          "Minimally invasive and robotic-assisted cardiac surgery allow certain heart conditions to be corrected through smaller incisions rather than traditional full sternotomy. These techniques are used for selected valve procedures, coronary bypass in specific cases, and other structural heart conditions. By avoiding large chest openings, patients often experience reduced post-operative pain, lower blood loss, shorter hospital stays, and quicker return to daily activity. Cosmetic benefits are secondary; the primary goal remains safe and complete correction of the heart condition. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/minimally-exp-1.webp",
        link: "#",
      },
      {
        title: "Aortic Surgery",
        description:
          "The aorta is the body’s main artery, carrying blood from the heart to every organ. Conditions such as aneurysms (abnormal enlargement) or dissections (tears in the vessel wall) can become life-threatening if not addressed in time. Aortic surgery is among the most complex areas of cardiovascular care. It requires detailed imaging analysis, careful timing of intervention, and precise intraoperative control. The objective is to prevent rupture or progression while preserving as many natural vascular functions as possible. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/aortic-surgery-exp.webp",
        link: "#",
      },
    ],
  },
  {
    label: "Heart Failure & Transplantation",
    slides: [
      {
        title: "Heart Transplant",
        description:
          "Heart transplantation is considered when severe heart failure no longer responds to medication or conventional surgery. In this procedure, the diseased heart is replaced with a healthy donor heart, offering patients a renewed chance at improved quality of life and long-term survival. Successful transplantation requires careful patient selection, precise timing, and coordinated multidisciplinary planning. Not every patient with heart failure qualifies for transplant; detailed evaluation ensures that the procedure offers meaningful benefit and sustainable outcomes. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/heart-transplant-exp.webp",
        link: "#",
      },
      {
        title: "Mechanical Circulatory Support (LVAD & ECMO)",
        description:
          "For patients with advanced heart failure, mechanical circulatory support devices can temporarily or permanently assist with the heart pumping function. These include LVADs (Left Ventricular Assist Devices) and ECMO (Extracorporeal Membrane Oxygenation). An LVAD is a surgically implanted mechanical pump that supports blood circulation when the left ventricle becomes too weak. It may serve as a bridge to transplant or longer-term therapy in selected patients. ECMO, on the other hand, provides short-term life support in critical situations by temporarily taking over the function of the heart and lungs. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/mechanical-circulatory-exp.webp",
        link: "#",
      },
    ],
  },
  {
    label: "Lung & Thoracic Surgery",
    slides: [
      {
        title: "Lung Transplant",
        description:
          "Lung transplantation is performed for patients with advanced, irreversible lung disease who continue to experience severe symptoms despite optimal medical management. In this procedure, one or both diseased lungs are replaced with healthy donor lungs to restore breathing capacity. Patient selection is highly structured, involving pulmonary specialists, transplant coordinators, and surgical evaluation. Success depends not only on surgical precision but also on coordinated pre-operative preparation and long-term post-operative care. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/lung_transplant-exp.webp",
        link: "#",
      },
      {
        title: "Thoracic Surgery",
        description:
          "Thoracic surgery addresses diseases within the chest cavity, including lung tumors, infections, structural abnormalities, and other complex conditions. The objective is to remove or correct disease while preserving as much healthy lung tissue as possible. Detailed imaging and functional assessment guide for surgical planning. In many cases, minimally invasive techniques may be used to reduce recovery time and surgical trauma. Post-operative care focuses on respiratory rehabilitation, pain management, and gradual return to activity. Long-term follow-up ensures stable breathing capacity and continued chest health. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/thoracic-surgery-exp.webp",
        link: "#",
      },
    ],
  },
  {
    label: "Congenital & Pediatric Cardiac Surgery",
    slides: [
      {
        title: "Congenital & Pediatric Cardiac Surgery",
        description:
          "Congenital heart disease refers to structural abnormalities of the heart that are present from birth. Some conditions are diagnosed in infancy or childhood, while others may remain undetected until adolescence or adulthood. In certain cases, patients who underwent corrective surgery earlier in life may require further procedures later on. Management of congenital heart defects requires careful anatomical assessment and individualized surgical planning. Each defect is unique involving variations in chambers, valves, blood vessels, or circulation pathways. The goal of surgery is to restore efficient blood flow, reduce strain on the heart, and support long-term cardiovascular function. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/congenital_pediatric_cardiac-exp.webp",
        link: "#",
      },
     
    ],
  },

  {
    label: "Peripheral Arterial Disease Surgery",
    slides: [
      {
        title: "Peripheral Arterial Disease Surgery",
        description:
          "Peripheral arterial disease (PAD) occurs when narrowed arteries reduce blood flow to the limbs, most commonly the legs. Patients may experience pain while walking, non-healing wounds, or reduced mobility. If untreated, severe cases can threaten limb viability. Surgical intervention aims to restore adequate circulation and prevent complications. Depending on disease severity, treatment may involve bypassing blocked segments or restoring flow through vascular reconstruction techniques. ",
        image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/peripheral-arterial-exp.webp",
        link: "#",
      },
      
    ],
  },
];

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TabSwiperCoronary = () => {
  useEffect(() => {
    // Guard: only run in browser (SSR safety)
    if (typeof window === "undefined") return;

    let tabSwiperInstance = null;
    let contentSwiperInstance = null;
    const innerSwiperInstances = [];

    const initSwipers = async () => {
      // ── Dynamically import Swiper (browser only) ──────────────────────────
      // Works with Swiper v6, v7, v8 — does NOT use "swiper/modules"
      const SwiperBundle = await import("swiper/bundle");
      const Swiper = SwiperBundle.default;

      const totalTabs = tabsData.length;

      // ── Tab Swiper ────────────────────────────────────────────────────────
      tabSwiperInstance = new Swiper("#tabSwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        navigation: {
          prevEl: "#tabPrev",
          nextEl: "#tabNext",
        },
      });

      // ── Content Swiper (Outer) ────────────────────────────────────────────
      contentSwiperInstance = new Swiper("#contentSwiper", {
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 400,
        on: {
          slideChange: function () {
            const activeIndex = this.activeIndex;
            document.querySelectorAll(".tab-btn").forEach((btn, i) => {
              btn.classList.toggle("active", i === activeIndex);
            });
            if (tabSwiperInstance) tabSwiperInstance.slideTo(activeIndex);
          },
        },
      });

      // ── Sync tab buttons → content ────────────────────────────────────────
      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const index = parseInt(this.dataset.index);
          document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          if (contentSwiperInstance) contentSwiperInstance.slideTo(index);
          if (tabSwiperInstance) tabSwiperInstance.slideTo(index);
        });
      });

      // ── Tab nav arrows also move content ─────────────────────────────────
      document.getElementById("tabNext")?.addEventListener("click", () => {
        if (!contentSwiperInstance) return;
        const current = contentSwiperInstance.activeIndex;
        if (current < totalTabs - 1) contentSwiperInstance.slideTo(current + 1);
      });

      document.getElementById("tabPrev")?.addEventListener("click", () => {
        if (!contentSwiperInstance) return;
        const current = contentSwiperInstance.activeIndex;
        if (current > 0) contentSwiperInstance.slideTo(current - 1);
      });

      // ── Inner Swipers ─────────────────────────────────────────────────────
      for (let i = 0; i < totalTabs; i++) {
        const inner = new Swiper(`#innerSwiper${i}`, {
          slidesPerView: 1,
          spaceBetween: 20,
          speed: 400,
          navigation: {
            prevEl: `#innerPrev${i}`,
            nextEl: `#innerNext${i}`,
          },
        });
        innerSwiperInstances.push(inner);
      }
    };

    initSwipers();

    // Cleanup on unmount
    return () => {
      if (tabSwiperInstance) tabSwiperInstance.destroy(true, true);
      if (contentSwiperInstance) contentSwiperInstance.destroy(true, true);
      innerSwiperInstances.forEach((s) => s.destroy(true, true));
    };
  }, []);

  return (
    <section className="tab-swper-coronary">
      <div className="container">
      {/* ── Tab Swiper ── */}
      <div className="tab-swiper-wrapper">
        <div className="swiper" id="tabSwiper">
          <div className="swiper-wrapper">
            {tabsData.map((tab, index) => (
              <div key={index} className="swiper-slide swiper-slide-tab">
                <div
                  className={`tab-btn${index === 0 ? " active" : ""}`}
                  data-index={String(index)}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-nav-prev" id="tabPrev">
          <ChevronLeft />
        </div>
        <div className="tab-nav-next" id="tabNext">
          <ChevronRight />
        </div>
      </div>

      {/* ── Content Swiper (Outer) ── */}
      <div className="content-swiper-wrapper">
        <div className="swiper" id="contentSwiper">
          <div className="swiper-wrapper">

            {tabsData.map((tab, outerIndex) => (
              <div key={outerIndex} className="swiper-slide">

                {/* Inner Swiper */}
                <div className="swiper inner-swiper" id={`innerSwiper${outerIndex}`}>
                  <div className="swiper-wrapper">
                    {tab.slides.map((slide, innerIndex) => (
                      <div key={innerIndex} className="swiper-slide">
                        <div className="content-panel">
                          <div className="image-side">
                            <div className="img-placeholder">
                              <img src={slide.image} alt={slide.title} />
                            </div>
                          </div>
                          <div className="text-side">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                            <a href={slide.link} className="explore-btn">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Inner Navigation */}
                  <div className="navigation">
                  <div className="inner-prev" id={`innerPrev${outerIndex}`}>
                    <ChevronLeft />
                  </div>
                  <div className="inner-next" id={`innerNext${outerIndex}`}>
                    <ChevronRight />
                  </div>
                  </div>

                </div>
                {/* End Inner Swiper */}

              </div>
            ))}

          </div>
        </div>
      </div>

      </div>

    </section>
  );
};

export default TabSwiperCoronary;