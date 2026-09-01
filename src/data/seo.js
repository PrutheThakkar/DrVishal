export const pageSeo = {
  home: {
    path: "/",
    title: "Dr. Vishal Pingle | Cardiothoracic & Transplant Surgeon in Mumbai",
    description: "Dr. Vishal Pingle is an internationally trained cardiothoracic surgeon in Mumbai specialising in complex cardiac surgery, heart and lung transplants, valve, aortic and minimally invasive procedures.",
    keywords: ["cardiothoracic surgeon in Mumbai", "cardiac surgeon Mumbai", "heart surgeon Mumbai", "thoracic surgeon Mumbai", "transplant surgeon Mumbai", "cardiothoracic surgeon India", "Dr Vishal Pingle"],
  },
  about: {
    path: "/about/",
    title: "Dr. Vishal Pingle | Cardiothoracic Surgeon in Mumbai",
    description: "Learn about Dr. Vishal Pingle, an internationally trained cardiothoracic surgeon with expertise in heart and lung transplantation, complex valve, aortic and minimally invasive surgery.",
    keywords: ["Dr. Vishal Pingle", "cardiothoracic surgeon Mumbai", "cardiac surgeon Mumbai", "transplant surgeon India", "heart and lung transplant surgeon", "minimally invasive cardiac surgeon"],
  },
  clinicalFocus: {
    path: "/clinical-focus/",
    title: "Cardiac & Thoracic Surgery Expertise | Dr. Vishal Pingle",
    description: "Explore Dr. Vishal Pingle's clinical focus in heart failure and transplant care, valve repair and replacement, minimally invasive cardiac surgery, aortic and coronary surgery.",
    keywords: ["cardiac surgeon Mumbai", "heart failure surgeon Mumbai", "heart transplant surgeon India", "valve surgeon Mumbai", "minimally invasive cardiac surgeon Mumbai", "aortic surgeon Mumbai", "coronary surgeon Mumbai"],
    schemaType: "MedicalWebPage",
  },
  insight: {
    path: "/insight/",
    title: "Cardiac Surgery Insights | Dr. Vishal Pingle",
    description: "Read insights from Dr. Vishal Pingle on cardiac surgery, heart health, treatment decisions, recovery and advances in cardiac and transplant care.",
    keywords: ["cardiac surgery insights", "heart surgery blog", "cardiac surgery information", "heart health Mumbai", "cardiac treatment insights", "transplant surgery information"],
    schemaType: "CollectionPage",
  },
  patientStories: {
    path: "/patient-stories/",
    title: "Patient Stories | Dr. Vishal Pingle",
    description: "Read patient stories and experiences related to cardiac and thoracic care, complex surgery and recovery under Dr. Vishal Pingle.",
    keywords: ["Dr. Vishal Pingle patient stories", "cardiac surgery patient stories", "heart surgery recovery stories", "cardiac surgeon Mumbai reviews", "heart transplant patient stories", "thoracic surgery patient stories"],
    schemaType: "MedicalWebPage",
  },
  contact: {
    path: "/contact/",
    title: "Contact Dr. Vishal Pingle | Cardiac Surgeon in Mumbai",
    description: "Request an appointment with Dr. Vishal Pingle for cardiac, thoracic, transplant, valve, aortic or coronary surgical consultation in Mumbai or online.",
    keywords: ["Dr. Vishal Pingle appointment", "cardiac surgeon appointment Mumbai", "heart surgeon consultation Mumbai", "cardiothoracic surgeon consultation", "cardiac second opinion Mumbai", "online cardiac consultation India"],
  },
}

export const clinicalFocusSeo = {
  "heart-failure-transplant-care": ["Heart Failure & Transplant Surgeon in Mumbai | Dr. Vishal Pingle", "Dr. Vishal Pingle provides advanced surgical care for heart failure, including heart transplantation, mechanical circulatory support and follow-up care.", "heart transplant surgeon Mumbai", "heart transplant surgeon India", "heart failure surgeon Mumbai", "heart transplant Mumbai", "mechanical circulatory support India", "advanced heart failure Mumbai"],
  "valve-repair-replacement": ["Heart Valve Surgeon in Mumbai | Repair & Replacement | Dr. Pingle", "Explore heart valve repair and replacement options with Dr. Vishal Pingle, including surgical and minimally invasive approaches selected for individual patients.", "heart valve surgeon Mumbai", "valve replacement surgeon Mumbai", "valve repair surgeon Mumbai", "mitral valve surgery Mumbai", "aortic valve surgery Mumbai", "heart valve surgery India"],
  "minimally-invasive-robotic-cardiac-surgery": ["Minimally Invasive & Robotic Cardiac Surgery | Mumbai", "Learn about minimally invasive and robotic cardiac surgery offered by Dr. Vishal Pingle, including potential benefits and patient selection.", "minimally invasive cardiac surgery Mumbai", "robotic cardiac surgery Mumbai", "minimally invasive heart surgery Mumbai", "robotic heart surgeon India", "minimally invasive valve surgery Mumbai", "keyhole heart surgery Mumbai"],
  "aortic-coronary-surgery": ["Aortic & Coronary Surgery in Mumbai | Dr. Vishal Pingle", "Explore surgical treatment for complex aortic disease and coronary artery disease, including tailored approaches based on each patient's condition.", "cardiac surgeon for aortic disease Mumbai", "aortic surgery Mumbai", "aortic aneurysm surgery Mumbai", "coronary artery bypass surgeon Mumbai", "CABG surgeon Mumbai", "complex coronary surgery India"],
  cabg: ["CABG & Bypass Surgery in Mumbai | Dr. Vishal Pingle", "Learn about coronary artery bypass grafting and how Dr. Vishal Pingle evaluates patients for bypass surgery and alternative treatment approaches.", "CABG surgeon Mumbai", "bypass surgeon Mumbai", "coronary bypass surgery Mumbai", "CABG surgery Mumbai", "coronary artery surgeon Mumbai", "heart bypass surgeon India"],
  tavi: ["TAVI in Mumbai | Transcatheter Aortic Valve Implantation", "Learn about TAVI, a catheter-based approach to aortic valve replacement, and how patient suitability is assessed alongside surgical options.", "TAVI Mumbai", "TAVI specialist Mumbai", "transcatheter aortic valve implantation Mumbai", "TAVR Mumbai", "aortic stenosis treatment Mumbai", "TAVI surgeon India"],
  mitraclip: ["MitraClip in Mumbai | Transcatheter Mitral Valve Repair", "Learn about MitraClip, a minimally invasive treatment option for selected patients with mitral valve disease, and how suitability is assessed.", "MitraClip Mumbai", "MitraClip procedure Mumbai", "transcatheter mitral valve repair Mumbai", "mitral valve treatment Mumbai", "mitral regurgitation treatment Mumbai", "MitraClip specialist India"],
  "heart-transplant": ["Heart Transplant Surgeon in Mumbai | Dr. Vishal Pingle", "Explore heart transplant care with Dr. Vishal Pingle, including evaluation, surgery, mechanical support and long-term follow-up.", "heart transplant surgeon Mumbai", "heart transplant India", "cardiac transplant Mumbai", "transplant specialist India", "advanced heart failure Mumbai"],
  "lung-transplant": ["Lung Transplant Surgeon in Mumbai | Dr. Vishal Pingle", "Learn about lung transplantation and the multidisciplinary evaluation, surgery and follow-up involved in transplant care.", "lung transplant surgeon Mumbai", "lung transplant India", "pulmonary transplant Mumbai", "thoracic transplant surgeon India", "lung transplant specialist"],
  "aortic-aneurysm-repair": ["Aortic Aneurysm Surgery in Mumbai | Dr. Vishal Pingle", "Learn about surgical treatment for aortic aneurysms, including how the location, size and complexity of an aneurysm influence treatment planning.", "aortic aneurysm surgery Mumbai", "aortic aneurysm surgeon Mumbai", "ascending aortic aneurysm repair Mumbai", "aortic surgery India", "aortic root surgery Mumbai", "complex aortic surgery"],
}

// The CMS uses a few legacy slugs that differ from the SEO workbook URLs.
// Point those live routes at the intended keyword clusters without changing canonicals.
clinicalFocusSeo["heart-failure-transplantation"] = clinicalFocusSeo["heart-failure-transplant-care"]
clinicalFocusSeo["heart-valve-repair-replacement"] = clinicalFocusSeo["valve-repair-replacement"]
clinicalFocusSeo["heart-bypass-surgery-cabg"] = clinicalFocusSeo.cabg
clinicalFocusSeo["tavi-transcatheter-aortic-valve-implantation"] = clinicalFocusSeo.tavi

export const getClinicalFocusSeo = (slug, fallbackTitle) => {
  const mapped = clinicalFocusSeo[slug]
  return mapped
    ? { title: mapped[0], description: mapped[1], keywords: mapped.slice(2) }
    : {
        title: `${fallbackTitle} | Dr. Vishal Pingle`,
        description: `Learn about ${fallbackTitle} with Dr. Vishal Pingle, cardiothoracic and transplant surgeon in Mumbai.`,
        keywords: [fallbackTitle, "cardiac surgeon Mumbai", "Dr. Vishal Pingle"],
      }
}
