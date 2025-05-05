"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import JsonLd from "@/components/json-ld";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function AwardsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const awards = [
    {
      title: "Product Manager of the Year",
      organization: "Tech Innovation Awards",
      year: "2024",
      description:
        "Recognized for exceptional product leadership and innovation in the health tech sector.",
    },
    {
      title: "Best UX Writing",
      organization: "Digital Experience Awards",
      year: "2023",
      description:
        "Awarded for outstanding UX writing that significantly improved user engagement and satisfaction.",
    },
    {
      title: "Excellence in Product Strategy",
      organization: "Product Management Summit",
      year: "2023",
      description:
        "Honored for developing and executing a product strategy that led to 200% growth in user adoption.",
    },
  ];

  const certifications = [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      organization: "Scrum Alliance",
      year: "2023",
      description:
        "Professional certification in Agile product ownership and Scrum methodologies.",
    },
    {
      title: "Professional Product Manager (PPM)",
      organization: "Product Management Institute",
      year: "2022",
      description:
        "Comprehensive certification covering all aspects of modern product management.",
    },
    {
      title: "UX Writing Certification",
      organization: "UX Writers Collective",
      year: "2021",
      description:
        "Specialized training in creating user-centered content for digital products.",
    },
    {
      title: "Data Analytics for Product Managers",
      organization: "Product School",
      year: "2021",
      description:
        "Advanced training in using data to drive product decisions and measure success.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const awardsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: awards.map((award, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: award.title,
        description: award.description,
      },
    })),
  };

  const certificationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: certifications.map((cert, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: cert.title,
        description: cert.description,
        credentialCategory: "certification",
        recognizedBy: {
          "@type": "Organization",
          name: cert.organization,
        },
        dateCreated: `${cert.year}-01-01`,
      },
    })),
  };

  const pageTitle =
    "Awards & Certifications | Rita Chibuike - Product Manager Portfolio";
  const pageDescription =
    "Explore Rita Chibuike's awards, recognitions, and professional certifications in product management and UX writing.";

  return (
    <>
      {mounted && (
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <link rel="canonical" href="https://rita-chibuike.com/awards" />
        </Head>
      )}
      <JsonLd data={[awardsJsonLd, certificationsJsonLd]} />
      <div className="min-h-screen bg-[#171717] text-white">
        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-[#01351A] hover:underline mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Awards & Certifications
            </motion.h1>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h2
                className="text-2xl font-bold mb-8 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-[#01351A] w-8 h-1 mr-3"></span>
                Awards
              </motion.h2>

              <motion.div
                className="grid gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-900 p-6 rounded-lg"
                    variants={item}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{award.title}</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-[#01351A] mr-2">
                          {award.organization}
                        </span>
                        <span className="bg-[#01351A]/20 text-[#01351A] px-2 py-1 rounded text-sm">
                          {award.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400">{award.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h2
                className="text-2xl font-bold mb-8 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-[#01351A] w-8 h-1 mr-3"></span>
                Certifications
              </motion.h2>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-900 p-6 rounded-lg"
                    variants={item}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="flex flex-col justify-between mb-4">
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-[#01351A] mr-2">
                          {cert.organization}
                        </span>
                        <span className="bg-[#01351A]/20 text-[#01351A] px-2 py-1 rounded text-sm">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </main>
      </div>
    </>
  );
}
