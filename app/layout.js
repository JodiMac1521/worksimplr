import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Work Simplr | AI-Powered Project Teams for Employers — Delivered in Weeks',
  description: 'Work Simplr matches your projects with AI-screened college talent and delivers results in 2–4 weeks. No hiring. No managing. Just outcomes. Start a sprint today.',
  themeColor: '#0A2342',
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Work Simplr",
  "url": "https://worksimplr.com",
  "logo": "https://worksimplr.com/logo.png",
  "description": "AI-powered project delivery platform that matches employers with vetted college talent for short-term projects delivered in 2–4 weeks.",
  "foundingDate": "2023",
  "sameAs": [
    "https://www.linkedin.com/company/68873365/",
    "https://www.facebook.com/worksimplrUS/",
    "https://www.instagram.com/worksimplr/",
    "https://x.com/worksimplr"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "jodi@worksimplr.com"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SprintWork Project Delivery",
  "provider": {
    "@type": "Organization",
    "name": "Work Simplr"
  },
  "description": "AI-powered project scoping, talent matching, and managed delivery. Employers describe the work; Work Simplr scopes it with AI, matches vetted college operators, and delivers with built-in QA in 2–4 weeks.",
  "serviceType": "AI-Powered Project Delivery",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Project Types",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Research Projects" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Testing & QA" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Campus Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Creation" } }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Work Simplr do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Work Simplr is an AI-powered project delivery platform that matches employers with vetted college talent. Employers describe the work, AI scopes and prices it, then trained operators deliver results in 2–4 weeks with built-in quality checks."
      }
    },
    {
      "@type": "Question",
      "name": "How is Work Simplr different from a staffing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional staffing gives you people. Work Simplr gives you the finished project. Every engagement is scoped by AI, executed by vetted operators, and delivered with quality checks built in."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Work Simplr cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Projects are priced per sprint based on scope and complexity. AI-powered scoping provides instant estimates. Most projects run $500–$5,000 per sprint with delivery in 2–4 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of projects can I hire for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Work Simplr handles data research, product testing, content creation, campus marketing, and more. Any project that can be broken into structured tasks and completed in 2–4 weeks is a fit."
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
