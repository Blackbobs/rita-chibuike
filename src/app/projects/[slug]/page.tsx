"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import JsonLd from "@/components/json-ld";
import Head from "next/head";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const projects = {
    outbound: {
      title: "Outbound",
      url: "http://outbound.im",
      image: "/outbound.svg",
      description:
        "An AI-powered outbound calling platform that automates customer outreach, lead qualification, and follow-ups with natural-sounding voice agents.",
      challenge:
        "Businesses often struggle to scale outbound communication due to limited sales bandwidth, inconsistent follow-ups, and high costs of maintaining large call teams.",
      solution:
        "Developed an AI-driven outbound calling system that uses intelligent voice agents to automate customer outreach, handle objections, qualify leads, and seamlessly escalate to human agents when necessary.",
      outcome:
        "Increased outreach capacity by 5x while reducing operational costs by 40%. Improved lead engagement rates by 65% across multiple campaigns.",
      role: "Product Manager",
      methodology:
        "Agile/Scrum with two-week sprints and continuous deployment",
      features: [
        "Conversational AI with human-like voice agents",
        "Smart lead routing and CRM integration",
        "Campaign management with analytics and reporting",
        "Automatic call transcription and sentiment analysis",
      ],
      technologies: "React, Node.js, Socket.io, MongoDB, AWS, Redis",
    },
    nuwellai: {
      title: "NuwellAI",
      url: "https://nuwellai.com/",
      image: "/nuwellai.png",
      description:
        "An AI-powered nutrition assistant that delivers personalized meal recommendations aligned with your health goals and tracks your dietary progress in real-time.",
      challenge:
        "Many people struggle to make consistent, informed food choices that align with their health goals due to generic advice, lack of guidance, and difficulty tracking nutritional progress.",
      solution:
        "Built an intelligent nutrition platform that analyzes individual goals, dietary preferences, and health data to generate personalized meal recommendations, track intake, and deliver real-time insights to support habit change.",
      outcome:
        "Boosted user adherence to personalized meal plans by 68% and helped users achieve measurable improvements in energy levels, weight management, and overall diet quality within the first 6 weeks.",
      role: "Product Manager & AI Strategy Lead",
      methodology:
        "Lean Startup with rapid prototyping and user testing cycles",
      features: [
        "AI-driven personalized meal planning based on health goals",
        "Real-time progress tracking with intuitive insights",
        "Integration with wearable and health tracking apps",
        "Conversational coaching for daily meal guidance and motivation",
      ],
      technologies:
        "Python, TensorFlow, React Native, Firebase, Google Cloud AI, Flask",
    },
    edubridge: {
      title: "EduBridge",
      url: "https://edubridges.vercel.app/",
      image: "/edubridge.png",
      description:
        "A platform connecting educational resources across socioeconomic divides to promote equal access to quality education.",
      challenge:
        "Educational inequality persists due to uneven distribution of resources between affluent and underserved communities, creating a widening gap in educational outcomes.",
      solution:
        "Built a platform that facilitates resource sharing, mentorship, and collaborative learning between schools in different socioeconomic areas, with tools for curriculum sharing, virtual classroom exchanges, and teacher professional development.",
      outcome:
        "Facilitated the sharing of over 5,000 educational resources, established 350+ mentorship relationships between schools, and improved standardized test scores by an average of 22% in participating underserved schools.",
      role: "Product Manager & Education Specialist",
      methodology:
        "Design Thinking with extensive stakeholder involvement and iterative development",
      features: [
        "Resource marketplace for sharing educational materials across schools",
        "Virtual classroom pairing system for cross-socioeconomic learning experiences",
        "Teacher professional development platform with mentorship matching",
        "Impact tracking dashboard with educational outcome metrics",
      ],
      technologies:
        "Next.js, TypeScript, PostgreSQL, Vercel, Auth0, Stripe for donations",
    },
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-[#0077FF] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "124",
    },
  };

  const pageTitle = `${project.title} | Rita Chibuike - Product Manager Portfolio`;
  const pageDescription = project.description;

  return (
    <>
      {mounted && (
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={project.image} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={project.image} />
          <link
            rel="canonical"
            href={`https://rita-chibuike.com/projects/${slug}`}
          />
        </Head>
      )}
      <JsonLd data={projectJsonLd} />
      <div className="min-h-screen bg-black text-white">
        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-[#0077FF] hover:underline mb-8 mt-32"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.title}
            </motion.h1>

            <motion.div
              className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="prose prose-invert max-w-none">
              <div className="prose prose-invert max-w-none">
                <motion.p
                  className="text-xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div
                    className="bg-neutral-900 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-[#0077FF]">
                      Challenge
                    </h3>
                    <p>{project.challenge}</p>
                  </motion.div>
                  <motion.div
                    className="bg-neutral-900 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-[#0077FF]">
                      Solution
                    </h3>
                    <p>{project.solution}</p>
                  </motion.div>
                  <motion.div
                    className="bg-neutral-900 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-[#0077FF]">
                      Outcome
                    </h3>
                    <p>{project.outcome}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                  <p className="mb-6">
                    This project was developed with a focus on solving
                    real-world problems through innovative product management
                    and user-centered design.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">My Role</h3>
                  <p className="mb-6">{project.role}</p>

                  <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                  <p className="mb-6">{project.methodology}</p>

                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc pl-6 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <p className="mb-6">{project.technologies}</p>
                </motion.div>

                <motion.div
                  className="mt-12 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FFb4] py-2 px-3"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      View Live Project
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
