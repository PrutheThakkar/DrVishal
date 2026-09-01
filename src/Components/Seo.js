import React from "react"

export const SITE_URL = "https://www.drvishalpingle.com"

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "@id": `${SITE_URL}/#physician`,
  name: "Dr. Vishal Pingle",
  url: SITE_URL,
  image: "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/about-dr-img.webp",
  medicalSpecialty: ["Cardiovascular", "Thoracic", "TransplantSurgery"],
  areaServed: {
    "@type": "City",
    name: "Mumbai",
  },
}

const normalizePath = path => {
  if (!path || path === "/") return "/"
  return `/${path.replace(/^\/+|\/+$/g, "")}/`
}

const absoluteUrl = path => `${SITE_URL}${normalizePath(path)}`

const Seo = ({
  title,
  description,
  path = "/",
  keywords = [],
  schemaType = "WebPage",
  image = "https://wpvishal.studiosentientdemo.com/wp-content/uploads/2026/05/about-dr-img.webp",
  noIndex = false,
  children,
}) => {
  const canonical = absoluteUrl(path)
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`
  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#physician` },
  }

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr. Vishal Pingle" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">
        {JSON.stringify([physicianSchema, schema])}
      </script>
      {children}
    </>
  )
}

export default Seo
