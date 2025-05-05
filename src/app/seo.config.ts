import { Metadata } from "next"

export const siteConfig = {
    name: "Rita Chibuike - Product Manager Portfolio",
    description:
      "Rita Chibuike is an Agile Product Manager and UX Writer specializing in solving complex problems and creating meaningful user experiences.",
    url: "https://rita-chibuike.com",
    ogImage: "/og-image.jpg",
    links: {
      linkedin: "https://linkedin.com/in/rita-chibuike",
      email: "mailto:contact@rita-chibuike.com",
    },
    keywords: [
      "Product Manager",
      "Agile Product Management",
      "UX Writer",
      "Product Strategy",
      "Product Documentation",
      "Nigerian Product Manager",
      "Healthcare Product Management",
      "EdTech Product Management",
    ],
  }
  
  export type PageMetadata = {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    canonicalUrl?: string
  }
  
  export function constructMetadata({ title, description, keywords, ogImage, canonicalUrl }: PageMetadata = {}): Metadata {
    return {
      metadataBase: new URL(siteConfig.url),
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      keywords: [...(keywords || []), ...siteConfig.keywords],
      authors: [{ name: "Rita Chibuike" }],
      creator: "Rita Chibuike",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: canonicalUrl || siteConfig.url,
        title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
        description: description || siteConfig.description,
        siteName: siteConfig.name,
        images: [
          {
            url: ogImage || siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: title || siteConfig.name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
        description: description || siteConfig.description,
        images: [ogImage || siteConfig.ogImage],
        creator: "@ritachibuike",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
      },
      manifest: "/site.webmanifest",
    }
  }
  