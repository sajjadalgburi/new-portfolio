import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const siteUrl = new URL(DATA.url);
export const siteName = `${DATA.name} | ${DATA.role}`;
export const avatarUrl = new URL(DATA.avatarUrl, DATA.url).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  applicationName: `${DATA.name}'s Portfolio`,
  keywords: [...DATA.seo.keywords],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  category: "technology",
  classification: "Software engineering portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: siteName,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}'s Portfolio`,
    locale: DATA.seo.locale,
    type: "profile",
    firstName: DATA.name.split(" ")[0],
    lastName: DATA.name.split(" ").at(-1),
    username: DATA.name,
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: DATA.description,
    creator: DATA.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export const personId = `${DATA.url}/#person`;
export const websiteId = `${DATA.url}/#website`;
export const portfolioId = `${DATA.url}/#portfolio`;

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: DATA.name,
      url: DATA.url,
      image: avatarUrl,
      description: DATA.summary,
      email: DATA.contact.email,
      jobTitle: DATA.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
      ],
      knowsAbout: DATA.seo.knowsAbout,
      worksFor: {
        "@type": "Organization",
        name: DATA.work[0].company,
        url: DATA.work[0].href,
      },
      alumniOf: DATA.education.map((education) => ({
        "@type": "EducationalOrganization",
        name: education.school,
        url: education.href,
      })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: DATA.url,
      name: `${DATA.name}'s Portfolio`,
      description: DATA.description,
      inLanguage: "en-CA",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${DATA.url}/#profile-page`,
      url: DATA.url,
      name: siteName,
      description: DATA.description,
      inLanguage: "en-CA",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      hasPart: { "@id": portfolioId },
    },
    {
      "@type": "ItemList",
      "@id": portfolioId,
      name: `${DATA.name}'s portfolio projects`,
      numberOfItems: DATA.projects.length,
      itemListElement: DATA.projects.map((project, position) => ({
        "@type": "ListItem",
        position: position + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          image: new URL(project.image, DATA.url).toString(),
          dateCreated: project.dates,
          creator: { "@id": personId },
        },
      })),
    },
  ],
};
