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
        "A comprehensive project management tool for remote teams with real-time collaboration features.",
      challenge:
        "Remote teams struggle with coordination, communication, and project visibility across time zones, leading to decreased productivity and increased miscommunication.",
      solution:
        "Created an integrated platform that combines task management, communication, and reporting in a time-zone aware interface with real-time updates and collaborative workspaces.",
      outcome:
        "Improved team productivity by 35% and reduced miscommunication by 60% for distributed teams across 12 countries.",
      role: "Lead Product Manager",
      methodology:
        "Agile/Scrum with two-week sprints and continuous deployment",
      features: [
        "Real-time collaborative workspaces with presence indicators",
        "Time-zone aware scheduling and notifications",
        "Integrated communication tools with context-aware threading",
        "Customizable dashboards with team and individual performance metrics",
      ],
      technologies: "React, Node.js, Socket.io, MongoDB, AWS, Redis",
    },
    nuwellai: {
      title: "Nuwellai",
      url: "https://nuwellai.com/",
      image: "/nuwellai.png",
      description:
        "An AI-powered wellness assistant that provides personalized health recommendations based on individual data and preferences.",
      challenge:
        "Generic wellness advice fails to account for individual health needs, preferences, and circumstances, resulting in low adherence rates and minimal health improvements.",
      solution:
        "Developed an AI system that analyzes user data including sleep patterns, activity levels, nutrition, and stress indicators to provide tailored wellness recommendations and habit-building support.",
      outcome:
        "Users reported a 47% improvement in wellness habits, 72% higher satisfaction compared to generic wellness apps, and an average of 3.5 new healthy habits formed within 60 days.",
      role: "Product Manager & AI Strategy Lead",
      methodology:
        "Lean Startup with rapid prototyping and user testing cycles",
      features: [
        "Personalized wellness plans based on AI analysis of user data",
        "Adaptive habit formation system with behavioral science backing",
        "Integration with wearable devices and health tracking apps",
        "AI-powered coaching with natural language interaction",
      ],
      technologies:
        "Python, TensorFlow, React Native, Firebase, Google Cloud AI, Flask",
    },
    edubridges: {
      title: "EduBridges",
      url: "https://edubridges.vercel.app/",
      image: "/placeholder.svg?height=600&width=1200",
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
          <Link href="/" className="text-green-500 hover:underline">
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
              className="inline-flex items-center text-[#1ea25e] hover:underline mb-8 mt-32"
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
                    <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">
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
                    <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">
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
                    <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">
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
                      className="rounded-full bg-[#1ea25e] text-black hover:bg-[#375445b4] py-2 px-3"
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
