"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from 'lucide-react'
import { motion } from "framer-motion"
import JsonLd from "@/components/json-ld"
import { use, useEffect, useState } from "react"
import Head from "next/head"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = use(params)
  const { slug } = resolvedParams
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const caseStudies = {
    "health-genius": {
      title: "Culturally Relevant Calorie Tracking for Health-Conscious Nigerians — Health Genius",
      image: "/rita1.webp",
      description:
        "As the lead on this project, I developed a culturally tailored calorie-tracking mobile app designed specifically for health-conscious Nigerians. From conceptualization to iterative design cycles, I led the end-to-end product development — focusing on local dietary patterns to ensure accuracy and cultural relevance.",
      problem:
        "Most calorie-tracking apps fail to address African food culture, especially Nigerian meals, leaving users underserved and frustrated. There was a need for an app that accurately reflects local cuisine and delivers insights that are relatable, practical, and actionable.",
      solution:
        "We built a user-friendly mobile application that: 1) Accurately tracks calories for local Nigerian dishes, 2) Provides personalized health insights and goal tracking, 3) Collects anonymized community health data to inform public health initiatives.",
      contributions: [
        "Led product development from idea to prototype",
        "Conducted research on local food consumption and user needs",
        "Created UX assets like wireframes, user flows, empathy maps, and personas",
        "Prioritized features based on health impact and feasibility",
        "Collaborated cross-functionally using tools like Jira, Miro, Notion",
        "Defined product strategy with PRDs, BRDs, and user stories",
      ],
      tools: [
        "Miro",
        "Jira",
        "Whimsical",
        "Notion",
        "Discord",
        "Empathy Map",
        "AS-IS User Journey Map",
        "User Persona",
        "Google Docs",
      ],
      skills: [
        "Feature Prioritization",
        "Design Thinking",
        "Agile",
        "LP Wireframes",
        "Product Vision",
        "User Stories",
        "User Research",
        "Communication & Collaboration",
        "Market Analysis",
        "Scrum",
      ],
      status: "In Progress",
      tags: ["project", "Mobile App"],
      documentLinks: {
        doc: "https://docs.google.com/document/d/14R7s4NDhbV8r9G1jT6_ELHx8bWx1sWkC0tuNrvcdA3E/edit?usp=drive_link",
        presentation:
          "https://docs.google.com/presentation/d/1wpxjJL3WS3QjWsL3hy7J7rVNhFKo61a--kng8m5HyP6w/edit?usp=sharing",
      },
      createdAt: "2024-09-30T08:23:00.000Z",
    },
    freshpaddy: {
      title: "Empowering Career-Oriented Women with Accessible Nutrition — Freshpaddy by Nuel Ritz",
      image: "/rita2.webp",
      description:
        "I led the development of a solution aimed at addressing the challenges faced by career-oriented women in Nigeria when it comes to accessing healthy and farm-fresh food products. This initiative was driven by a thorough analysis of the barriers women encounter due to demanding work schedules.",
      problem:
        "According to a study by the Nigerian Bureau of Statistics, 70% of women in urban areas struggle to maintain a balanced diet, primarily due to time constraints and limited access to convenient, nutritious options.",
      solution:
        "Our project began with the creation of a platform that connects women to local farmers and suppliers, enabling easy access to high-quality food products tailored to their busy lifestyles. This platform not only streamlines the process of sourcing healthy food but also empowers women to make informed choices that align with their health goals.",
      contributions: [
        "Led platform development connecting women to local food suppliers",
        "Conducted market research on urban women's nutritional challenges",
        "Created user personas and journey maps for career women",
        "Designed features to accommodate busy schedules",
        "Implemented nutritional education components",
        "Established metrics to track health outcomes",
      ],
      tools: ["Miro", "Jira", "Whimsical", "Affinity Map", "User Persona"],
      skills: [
        "Feature Prioritization",
        "Userflows/Design Flows",
        "LP Wireframes",
        "User Stories",
        "Product Vision and Strategy",
        "PRD",
        "BRD",
        "Design Thinking",
        "Agile",
        "Emerging Tech Trends",
        "Communication and Collaboration",
        "Market Research",
      ],
      status: "In Progress",
      tags: ["website", "project"],
      documentLinks: {},
      createdAt: "2024-09-30T08:23:00.000Z",
    },
    doctorme: {
      title: "Health Companion for Easy Access to Quality Care — DoctorMe",
      image: "/rita3.webp",
      description:
        "In Nigeria, particularly in rural communities, access to quality healthcare is a significant challenge. Approximately 70% of the population resides in these areas, but only 30% of healthcare facilities are available. This scarcity leads to poor health outcomes due to limited infrastructure, financial barriers, and cultural stigmas.",
      problem:
        "Recognizing this pressing need, I aimed to develop a solution that would bridge the healthcare access gap for these communities.",
      solution:
        "My primary responsibility was to create a health app that leverages technology to provide accessible healthcare solutions. This involved integrating AI-powered symptom checking, enabling offline functionality, connecting local health workers, and delivering health education in local languages.",
      contributions: [
        "Led a cross-functional team through the entire product development process",
        "Conducted extensive user research to understand the unique challenges faced by rural communities",
        "Collaborated with healthcare professionals to design an AI-powered symptom checker with voice and image inputs in local languages",
        "Developed an offline mode for key features, ensuring users could book appointments and access health information without internet connectivity",
        "Integrated local health worker services for follow-up care and medication delivery",
        "Created engaging health education content in various formats (audio, visual, text) tailored to local dialects",
        "Established a user onboarding process to help users navigate the app and ensure they understand its features",
      ],
      tools: ["Google Docs", "Miro", "Whimsical", "Figma", "Jira"],
      skills: [
        "Feature Prioritization",
        "Userflows/Design Flows",
        "LP Wireframes",
        "User Stories",
        "Product Vision and Strategy",
        "PRD Sketch",
        "Design Thinking",
        "Agile",
        "Emerging Tech Trends",
        "Communication and Collaboration",
        "Market Analysis",
        "Performance Metrics",
        "Teamwork",
        "Prototypes",
      ],
      status: "In Progress",
      tags: ["project", "website"],
      documentLinks: {},
      createdAt: "2024-10-27T21:16:00.000Z",
    },
    educonnect: {
      title: "EduConnect — Streamlining Educational Management",
      image: "/rita4.webp",
      description:
        "Educational institutions struggle with inefficient management of students, teachers, and classrooms due to a lack of centralized systems, leading to data silos, miscommunication, and wasted time on administrative tasks.",
      problem:
        "Institutions, particularly in developing regions, face operational difficulties managing records and activities from a single platform. Smaller schools encounter high costs and limited customizable tools, which hinder scalability. Without actionable insights into student performance and teacher effectiveness, informed decision-making becomes challenging.",
      solution:
        "Acada addresses these issues through: 1) Centralizing management tasks to reduce manual work and automate attendance tracking, grading, and reporting, saving institutions up to 40% of the time spent on administration. 2) Eliminating the need for multiple software subscriptions, leading to potential savings of up to 25% in operational costs. 3) Allowing smaller schools to easily add classrooms and manage larger student populations, with reported 30% increases in enrollment capacity without increased administrative costs. 4) Providing in-depth analytics on student performance and teacher engagement, resulting in a 15% improvement in student success rates after implementing data-driven strategies.",
      contributions: [
        "Led platform development for educational management",
        "Designed centralized system architecture",
        "Created analytics dashboard for student performance tracking",
        "Implemented automated administrative workflows",
        "Developed scalable classroom management features",
        "Established data-driven decision making framework",
      ],
      tools: ["Jira", "Figma", "Miro", "Whimsical", "Google Docs"],
      skills: [
        "Feature Prioritization",
        "Userflows/Design Flows",
        "LP Wireframes",
        "User Stories",
        "Product Vision and Strategy",
        "PRD Sketch",
        "Design Thinking",
        "Agile",
        "Emerging Tech Trends",
        "Communication and Collaboration",
        "Market Analysis",
        "Performance Metrics",
        "Teamwork",
        "Prototypes",
      ],
      status: "In Progress",
      tags: ["project", "website", "app"],
      documentLinks: {},
      createdAt: "2024-10-27T21:32:00.000Z",
    },
    talenvo: {
      title: "Talenvo UX Copy Documentation",
      image: "/rita1.webp",
      description: "A comprehensive UX writing and documentation project for Talenvo's talent management platform.",
      problem:
        "Complex user flows and technical features were difficult for users to understand, leading to low adoption rates.",
      solution:
        "Created clear, concise UX copy and comprehensive documentation that guides users through complex processes with simple language.",
      contributions: [
        "Conducted user research to identify pain points in existing documentation",
        "Developed a consistent voice and tone for the platform",
        "Simplified technical language for non-technical users",
        "Created step-by-step guides for complex workflows",
        "Implemented contextual help throughout the platform",
        "Established documentation standards for future updates",
      ],
      tools: ["Figma", "Miro", "Google Docs", "Notion"],
      skills: [
        "UX Writing",
        "Technical Documentation",
        "User Research",
        "Information Architecture",
        "Content Strategy",
        "Usability Testing",
      ],
      status: "Completed",
      tags: ["project", "documentation"],
      documentLinks: {},
      createdAt: "2024-08-15T14:30:00.000Z",
    },
    healthbridge: {
      title: "HealthBridge",
      image: "/rita1.webp",
      description: "A platform connecting patients with healthcare providers and resources.",
      problem:
        "Fragmented healthcare information and services create barriers for patients seeking comprehensive care.",
      solution:
        "Built an integrated platform that consolidates healthcare information, provider access, and health management tools in one place.",
      contributions: [
        "Led product strategy and roadmap development",
        "Conducted healthcare ecosystem analysis",
        "Created user personas for patients and providers",
        "Designed integrated health record management system",
        "Implemented provider matching algorithm",
        "Developed health resource directory",
      ],
      tools: ["Figma", "Miro", "Jira", "Google Analytics"],
      skills: [
        "Healthcare Product Management",
        "User Research",
        "Data Privacy Compliance",
        "Feature Prioritization",
        "Stakeholder Management",
        "Product Strategy",
      ],
      status: "In Progress",
      tags: ["project", "healthcare"],
      documentLinks: {},
      createdAt: "2024-07-10T09:45:00.000Z",
    },
    evently: {
      title: "Evently — A seamless event platform",
      image: "/rita1.webp",
      description:
        "As the Product Manager for Evently, I led the development of a web-based platform enabling users to create, manage, and participate in events. The platform features event browsing, RSVP management, user authentication, notifications, and a simulated payment flow for paid events.",
      problem:
        "Event organizers and attendees needed a centralized platform to streamline event creation, discovery, and participation, with features that support both free and paid events.",
      solution:
        "We developed a comprehensive web platform with two distinct user roles: Regular Users (browsing and RSVPing) and Event Organizers (creating events and tracking RSVPs), with integrated payment processing for paid events.",
      contributions: [
        "Defined product requirements for both regular users and event organizers",
        "Coordinated cross-functional teams (frontend, backend, design) to ensure seamless user experience",
        "Oversaw user flows for event creation, RSVP management, and notifications",
        "Collaborated with designers to ensure a responsive and intuitive interface",
        "Managed the integration of payment processing for paid events",
      ],
      tools: ["Drive", "Figma", "Miro"],
      skills: ["PRD", "Product Roadmap", "Collaboration", "Teamwork", "Feature Prioritization"],
      status: "In Progress",
      tags: ["project", "website", "app"],
      documentLinks: {
        doc: "https://docs.google.com/document/d/1j_gpCyG8zI9LzNSvlEYFkXgeLfcX4COf3HhjK2wW5HQ/edit?usp=sharing",
      },
      createdAt: "2024-11-20T11:53:00.000Z",
    },
    reevolve: {
      title: "Re-evolve — Reimagining the form for global startups",
      image: "/rita1.webp",
      description: "Enhancing the feature submission form of reevolve",
      problem:
        "The existing feature submission process for global startups was cumbersome and inefficient, leading to low completion rates and poor quality submissions.",
      solution:
        "Redesigned the submission form with a focus on user experience, implementing a more intuitive flow and clearer guidance for startups to present their innovations.",
      contributions: [
        "Conducted user research to identify pain points in the existing form",
        "Created wireframes for an improved submission flow",
        "Developed feature enhancement documentation",
        "Performed SWOT analysis to identify opportunities for improvement",
        "Implemented user testing to validate the new design",
      ],
      tools: ["Miro", "Google Docs", "Google Slides"],
      skills: ["Wireframes", "Feature Enhancement Document", "Userflows", "SWOT Analysis", "User Research"],
      status: "Done",
      tags: ["Document"],
      documentLinks: {
        doc: "https://docs.google.com/document/d/1DCnepmQ074k936QRma8fD3qhuU2etjJq8wksbJg_mjw/edit?usp=sharing",
      },
      createdAt: "2024-11-30T06:27:00.000Z",
    },
    educonnect2: {
      title: "EduConnect — Collaborative Learning Platform",
      image: "/rita1.webp",
      description:
        "I led the development of EduConnect, an online platform designed to address the lack of accessible, student-friendly academic resources in African secondary schools. The platform enables students to ask subject-specific questions, share knowledge, and collaboratively solve problems, fostering a supportive learning community.",
      problem:
        "Students in African secondary schools face limited access to quality educational resources and support, hindering their academic progress and learning opportunities.",
      solution:
        "Created a collaborative online platform where students can ask questions, share knowledge, and work together to solve academic challenges, with features designed specifically for the needs and constraints of African educational contexts.",
      contributions: [
        "Led the end-to-end product development process",
        "Conducted user research with students and teachers in African schools",
        "Created detailed PRDs and feature prioritization frameworks",
        "Developed user flows and information architecture",
        "Collaborated with designers and developers to implement the platform",
        "Established metrics to measure educational impact",
      ],
      tools: ["Miro", "Google Workspace", "Gloomaps"],
      skills: [
        "PRD",
        "Sitemap",
        "Feature Prioritization",
        "Userflows",
        "Feature and Metric Based Roadmap",
        "Communication",
        "Teamwork",
        "User Persona",
        "SWOT Analysis",
      ],
      status: "In Progress",
      tags: ["project", "website", "Mobile App"],
      documentLinks: {
        doc: "https://docs.google.com/document/d/12mE_d8y8DZB9wIu5rFpghAcyIiP7TVEQd20hTWKAOQ/edit?usp=sharing",
      },
      createdAt: "2024-12-14T17:13:00.000Z",
    },
    talenvo2: {
      title: "Talenvo UXcopy Documentation",
      image: "/rita1.webp",
      description:
        "This contains the UX copy for the Talenvo. It is designed to ensure consistency across all user interfaces and maintain alignment with the app's tone of voice: Professional, friendly, straightforward and supportive.",
      problem:
        "Inconsistent messaging and tone across the Talenvo platform created confusion for users and diluted the brand identity.",
      solution:
        "Developed comprehensive UX copy documentation that establishes clear guidelines for all text elements throughout the application, ensuring a consistent voice and improved user experience.",
      contributions: [
        "Audited existing copy across all platform interfaces",
        "Established brand voice guidelines and principles",
        "Created standardized messaging templates for common user interactions",
        "Developed error message frameworks that maintain a supportive tone",
        "Implemented a review process for ongoing copy consistency",
      ],
      tools: ["Notion"],
      skills: ["UX Writing"],
      status: "Done",
      tags: ["Document"],
      documentLinks: {
        doc: "https://perpetual-howler-8f9.notion.site/169bb60b442e808db781c9cb89afa40a?v=e2ad8c0061444884a2070bdb8477e334&pvs=4",
      },
      createdAt: "2024-12-30T14:08:00.000Z",
    },
    healthbridge2: {
      title: "HealthBridge — Affordable Healthcare Access Platform",
      image: "/rita1.webp",
      description:
        "I led the development of a web-based solution aimed at addressing the critical issue of affordable healthcare access for low-income and underserved communities, where patients often struggle to locate nearby healthcare providers, understand service costs, and schedule appointments efficiently.",
      problem:
        "Low-income and underserved communities face significant barriers to healthcare access, including difficulty finding providers, understanding costs, and scheduling appointments.",
      solution:
        "Created a comprehensive platform that enables users to search for healthcare providers based on location and specialization, with transparent information on consultation fees and accepted insurance plans, plus an intuitive appointment scheduling system.",
      contributions: [
        "Developed detailed user stories, feature definitions, and acceptance criteria",
        "Created PRDs and collaborated with cross-functional teams",
        "Implemented sprint planning, backlog management, and user story tracking",
        "Participated in Scrum Sprint 1 (Jan 30 - Feb 5), managing seven user stories",
        "Created and prioritized user stories focused on patient-centered features",
        "Authored detailed user stories with clear conditions of satisfaction",
        "Managed task tracking and status updates through Jira's workflow",
      ],
      tools: ["Jira", "Scrum", "Empathy Map"],
      skills: [
        "Cross-functional Collaboration",
        "Scrum",
        "PRD",
        "Empathy Map",
        "User Persona",
        "Sprint Planning",
        "Backlog Management",
        "User Story Development",
        "Task Tracking",
      ],
      status: "Done",
      tags: ["project", "website", "open source platform"],
      documentLinks: {},
      createdAt: "2025-02-03T11:03:00.000Z",
    },
    amazon: {
      title: "Uncovering User Frustrations on Amazon: A Research-Driven Audit for Better Conversions",
      image: "/rita1.webp",
      description:
        "I conducted a strategic teardown of Amazon's product detail pages to uncover hidden user frustrations and missed opportunities using three key approaches: User Research (Voice of Customer & Friction Mapping), Intra-Platform Comparison, and Landing Page Audit.",
      problem:
        "Amazon's product detail pages contain hidden friction points that frustrate users and lead to abandoned purchases, despite the platform's overall success.",
      solution:
        "Conducted a comprehensive research-driven audit to identify specific pain points and provide actionable recommendations for improving conversion rates.",
      contributions: [
        "Analyzed hundreds of user reviews and support forum threads to reverse-engineer real customer frustrations",
        "Identified key friction points including confusing return policies, overwhelming product descriptions, and trust gaps in third-party seller reviews",
        "Compared product detail pages for similar items across different Amazon vendors to identify inconsistencies",
        "Audited the structure and copy of product listings, focusing on clarity, flow, and visual hierarchy",
        "Provided specific recommendations for improving user experience and conversion rates",
      ],
      tools: ["User Research", "Competitor Analysis"],
      skills: ["User Research", "Friction Mapping", "Comparative Analysis", "UX Audit", "Conversion Optimization"],
      status: "Done",
      tags: ["user research", "competitor analysis"],
      documentLinks: {
        presentation:
          "https://docs.google.com/presentation/d/1Dml0GEyGd6vgvMhb_zDSCpIulCWZPiPsRnEc3ZeInKY/edit?usp=sharing",
      },
      createdAt: "2025-04-22T14:03:00.000Z",
    },
    ailauncher: {
      title: "Product Launch Plan for AI-Powered Social Media Growth",
      image: "/rita1.webp",
      description:
        "In my role as a fractional product manager, I was tasked with developing a comprehensive product launch plan for Anointed Consult's AI-powered social media growth service. Using a combination of market research, strategic design, and go-to-market tactics, I played a key role in positioning this service as a localized, cost-effective solution for Nigerian businesses.",
      problem:
        "Nigerian businesses, particularly SMEs and startups, struggle with effective social media management due to limited resources, high costs of traditional agencies, and lack of tools tailored to the local market.",
      solution:
        "Developed a comprehensive AI-powered social media growth service specifically designed for the Nigerian market, with accessible pricing tiers, intuitive interfaces, and features addressing the unique needs of local businesses.",
      contributions: [
        "Led in-depth market research to identify key customer pain points within the Nigerian market",
        "Uncovered strong demand for affordable, efficient social media automation",
        "Tailored the service offering to address specific needs of small and medium-sized businesses",
        "Collaborated with the team to design a competitive pricing model accessible to local businesses",
        "Created subscription tiers offering AI-driven content creation, automation, and performance analytics",
        "Focused on simplicity and ease of use for users with varying levels of technical expertise",
        "Developed a streamlined marketing and sales strategy for maximizing engagement and adoption",
        "Created compelling lead generation tactics including free trials and clear calls to action",
        "Designed a strong content marketing plan with blog posts, social media campaigns, and influencer partnerships"
      ],
      tools: [
        "Market Research Tools",
        "Competitive Analysis Frameworks",
        "Pricing Strategy Models",
        "Go-to-Market Planning Templates"
      ],
      skills: [
        "Product Launch Planning",
        "Market Research",
        "Strategic Design",
        "Go-to-Market Strategy",
        "Pricing Strategy",
        "Content Marketing",
        "Lead Generation",
        "Customer Pain Point Analysis",
        "Product Positioning"
      ],
      status: "Not Started",
      tags: ["product launch", "AI", "social media", "marketing"],
      documentLinks: {},
      createdAt: "2025-04-22T14:25:00.000Z",
    },
  }

  const study = caseStudies[slug as keyof typeof caseStudies]

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/" className="text-green-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    image: study.image,
    author: {
      "@type": "Person",
      name: "Rita Chibuike",
    },
    publisher: {
      "@type": "Person",
      name: "Rita Chibuike",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: study.createdAt,
    dateModified: study.createdAt,
    keywords: study.skills.join(", "),
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      {mounted && (
        <Head>
          <title>{`${study.title} | Rita Chibuike - Product Manager Portfolio`}</title>
          <meta name="description" content={study.description} />
          <meta property="og:title" content={`${study.title} | Rita Chibuike - Product Manager Portfolio`} />
          <meta property="og:description" content={study.description} />
          <meta property="og:image" content={study.image} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${study.title} | Rita Chibuike - Product Manager Portfolio`} />
          <meta name="twitter:description" content={study.description} />
          <meta name="twitter:image" content={study.image} />
          <link rel="canonical" href={`https://rita-chibuike.com/case-studies/${slug}`} />
        </Head>
      )}
      <JsonLd data={caseStudyJsonLd} />
      <div className="min-h-screen bg-black text-white">
      
        

        <main className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="inline-flex items-center text-[#1ea25e] hover:underline mb-8 mt-32">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {study.title}
            </motion.h1>

            <motion.div
              className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" priority />
            </motion.div>

            <div className="prose prose-invert max-w-none">
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {study.tags.map((tag, index) => (
                  <span key={index} className="bg-[#1ea25e]/20 text-[#1ea25e] px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
                <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm">{study.status}</span>
                <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm">
                  {formatDate(study.createdAt)}
                </span>
              </motion.div>

              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {study.description}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  className="bg-neutral-900 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">Problem</h3>
                  <p>{study.problem}</p>
                </motion.div>
                <motion.div
                  className="bg-neutral-900 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">Solution</h3>
                  <p>{study.solution}</p>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <h2 className="text-2xl font-bold mb-4">My Contributions</h2>
                <ul className="list-disc pl-6 mb-8">
                  {study.contributions.map((contribution, index) => (
                    <li key={index} className="mb-2">
                      {contribution}
                    </li>
                  ))}
                </ul>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool, index) => (
                        <span key={index} className="bg-neutral-800 px-3 py-1 rounded-full text-sm mb-2">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">Skills Applied</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.skills.map((skill, index) => (
                        <span key={index} className="bg-neutral-800 px-3 py-1 rounded-full text-sm mb-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {Object.keys(study.documentLinks || {}).length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-3 text-[#1ea25e]">Related Documents</h3>
                    <div className="flex flex-wrap gap-4 mb-8">
                      {Object.entries(study.documentLinks || {}).map(([key, url], index) => (
                        <button
                          key={index}
                          className="rounded-full bg-[#1ea25e] text-black hover:bg-[#1ea25e1a] py-2 px-3"
                          onClick={() => window.open(url as string, "_blank")}
                        >
                          View {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>

              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    className="rounded-full bg-[#1ea25e] text-black hover:bg-[#1ea25e1a] py-2 px-3"
                    onClick={() => window.history.back()}
                  >
                    Back to Case Studies
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>

       
      </div>
    </>
  )
}
