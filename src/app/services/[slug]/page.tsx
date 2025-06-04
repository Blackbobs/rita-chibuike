"use client"

import Link from "next/link"
import { ArrowLeft, Check, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import JsonLd from "@/components/json-ld"
import { useEffect, useState } from "react"
import Head from "next/head"
import { useParams } from "next/navigation"

export default function ServicePage() {
  const params = useParams()
  const slug = params?.slug as string
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = {
    "starter-plan": {
      title: "Starter Plan",
      subtitle:
        "The perfect entry point for founders or small teams preparing to build an MVP but not sure where to start.",
      duration: "2-3 weeks",
      ideal: ["Solo founders", "Early-stage startups", "Non-technical clients needing structured guidance"],
      overview:
        "The perfect entry point for founders or small teams preparing to build an MVP but not sure where to start.",
      included: [
        "MVP Project Planning - Clear roadmap outlining goals, priorities, timelines, and must-haves vs. nice-to-haves",
        "Basic Wireframes & Feature Mapping - Lo-fi visuals and functional outlines of your MVP to guide development",
        "Tool/Tech Stack Guidance - Recommendations tailored to your team size, goals, and budget",
        "1-hour strategy call to align on vision and priorities",
        "Detailed project documentation and handoff materials",
      ],
      outcomes: [
        "Clarity on your MVP scope",
        "Aligned development direction",
        "Foundational planning that saves time and money down the line",
        "Clear next steps for development team",
      ],
      process: [
        "Initial discovery call to understand your vision and goals",
        "Market research and competitive analysis",
        "Feature prioritization and MVP scope definition",
        "Wireframe creation and user flow mapping",
        "Final presentation and handoff documentation",
      ],
    },
    "launch-plan": {
      title: "Launch Plan",
      subtitle:
        "For teams preparing for go-to-market. This plan includes not just MVP prep, but also the launch game plan.",
      duration: "4-6 weeks",
      ideal: [
        "MVPs nearing completion",
        "Small teams needing structured rollout",
        "Founders preparing for beta testing or public launch",
      ],
      overview:
        "For teams preparing for go-to-market. This plan includes not just MVP prep, but also the launch game plan.",
      included: [
        "Everything in Starter Plan",
        "Detailed Wireframes for handoff - High-fidelity wireframes ready for development",
        "Launch Timeline & Roadmap - Step-by-step plan with milestones and deadlines",
        "QA/Testing Checklist - Comprehensive testing framework to ensure quality",
        "Pre-launch Coordination & Team Alignment - Weekly check-ins and progress tracking",
        "Go-to-market strategy and launch sequence planning",
      ],
      outcomes: [
        "MVP ready for launch",
        "Timeline clarity and confidence",
        "Reduced risk of miscommunication during critical launch phase",
        "Structured approach to market entry",
      ],
      process: [
        "Comprehensive product audit and gap analysis",
        "Launch strategy development and timeline creation",
        "Detailed wireframe and specification creation",
        "QA framework setup and testing protocols",
        "Launch coordination and team alignment sessions",
      ],
    },
    "growth-plan": {
      title: "Growth Plan",
      subtitle:
        "This is a full-scope, hands-on project management experience from planning to post-launch. Ideal for teams scaling fast.",
      duration: "8-12 weeks",
      ideal: [
        "Funded startups",
        "Remote/hybrid teams needing async coordination",
        "Growing products with active users",
      ],
      overview:
        "This is a full-scope, hands-on project management experience from planning to post-launch. Ideal for teams scaling fast.",
      included: [
        "MVP Strategy, Wireframes, and Delivery Oversight - End-to-end product management",
        "Cross-functional Team Coordination - Daily standups and sprint management",
        "Weekly Standups & Progress Reporting - Regular stakeholder updates and metrics tracking",
        "Post-Launch Support & Optimization Plans - 30-day post-launch monitoring and optimization",
        "Project Management Tool Setup & Maintenance - Complete setup of Notion, Jira, or preferred tools",
        "User feedback collection and analysis framework",
      ],
      outcomes: [
        "Smooth project execution and stakeholder communication",
        "Time and budget control",
        "Ongoing support that keeps you focused on growth",
        "Scalable processes for continued success",
      ],
      process: [
        "Complete product strategy development and roadmap creation",
        "Team structure optimization and workflow setup",
        "Agile implementation with regular sprint cycles",
        "Continuous monitoring and optimization",
        "Post-launch analysis and growth planning",
      ],
    },
    "landing-page-audit": {
      title: "Landing Page Audit",
      subtitle:
        "Already launched your MVP? This add-on helps you turn traffic into conversions with an optimized landing page experience.",
      duration: "1 week",
      ideal: ["Founders with low sign-up/conversion rates", "Anyone who wants feedback before launching their website"],
      overview:
        "Already launched your MVP? This add-on helps you turn traffic into conversions with an optimized landing page experience.",
      included: [
        "In-depth Review of Current Landing Page - Comprehensive analysis of design, copy, and user flow",
        "Conversion Optimization Checklist - Actionable items to improve conversion rates",
        "UX Suggestions and Messaging Adjustments - Specific recommendations for better user experience",
        "Optional: Loom Video Walkthrough - Detailed explanation of findings and recommendations",
        "Competitive benchmark analysis",
      ],
      outcomes: [
        "Higher engagement and clarity",
        "Clear next steps to improve UX/UI",
        "Ready-to-implement suggestions",
        "Improved conversion rates",
      ],
      process: [
        "Landing page analysis and user journey mapping",
        "Conversion funnel assessment",
        "Competitive comparison and best practices review",
        "Detailed report creation with actionable recommendations",
        "Optional walkthrough session to explain findings",
      ],
    },
    "competitive-analysis": {
      title: "Competitive Analysis",
      subtitle:
        "Want to stand out in your market? This add-on gives you a strategic edge with data-driven insight into what others are doing—and what you should do differently.",
      duration: "1-2 weeks",
      ideal: [
        "Founders entering competitive markets",
        "Startups preparing for investor decks",
        "Anyone who wants to understand how they stack up",
      ],
      overview:
        "Want to stand out in your market? This add-on gives you a strategic edge with data-driven insight into what others are doing—and what you should do differently.",
      included: [
        "SWOT Analysis of Your Product - Comprehensive strengths, weaknesses, opportunities, and threats assessment",
        "2–3 Competitor Breakdowns - Detailed analysis of key competitors and their strategies",
        "Positioning & Differentiation Strategy - Clear recommendations for market positioning",
        "PDF Report with Actionable Insights - Professional report with executive summary and recommendations",
        "Market opportunity assessment and sizing",
      ],
      outcomes: [
        "Strategic clarity",
        "Differentiation opportunities",
        "Confident positioning during pitches or launches",
        "Data-driven competitive advantage",
      ],
      process: [
        "Market landscape mapping and competitor identification",
        "Deep-dive analysis of competitor strategies and positioning",
        "SWOT analysis and gap identification",
        "Differentiation strategy development",
        "Comprehensive report creation and presentation",
      ],
    },
  }

  const service = services[slug as keyof typeof services]

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-[#0077FF] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.overview,
    provider: {
      "@type": "Person",
      name: "Rita Chibuike",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  const pageTitle = `${service.title} | Rita Chibuike - Product Manager Services`
  const pageDescription = service.overview

  const handleBookCall = () => {
    // You can replace this with your actual booking link (Calendly, etc.)
    window.open("https://calendly.com/rita-chibuike", "_blank")
  }

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
          <link rel="canonical" href={`https://rita-chibuike.com/services/${slug}`} />
        </Head>
      )}
      <JsonLd data={serviceJsonLd} />
      <div className="min-h-screen text-white mt-20">

        <main className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/#services" className="inline-flex items-center text-[#0077FF] hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{service.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-[#0077FF]/20 text-[#0077FF] px-4 py-2 rounded-full">Free Consultation</span>
                <span className="bg-neutral-800 px-4 py-2 rounded-full">{service.duration}</span>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 text-lg">{service.overview}</p>
            </motion.section>

            {/* What's Included */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
              <div className="space-y-4">
                {service.included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#0077FF] mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Who It's For */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Who It&apos;s For</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {service.ideal.map((target, index) => (
                  <div key={index} className="bg-neutral-900 p-4 rounded-lg text-center">
                    <span className="text-[#0077FF] font-medium">{target}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Outcomes */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-neutral-900 p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#0077FF] mt-1 flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Process */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#0077FF] text-[#f4f4f4] rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              className="text-center bg-neutral-900 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Book a free 30-minute consultation to discuss your project and see if this service is the right fit.
              </p>
              <motion.div className="flex items-center justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  className="rounded-full bg-[#0077FF] text-white flex items-center gap-2 hover:bg-[#0077FF]/50 px-8 py-3 text-lg"
                  onClick={handleBookCall}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </button>
              </motion.div>
              <p className="text-sm text-gray-500 mt-4">
                No commitment required • Free consultation • Response within 24 hours
              </p>
            </motion.section>
          </div>
        </main>

       
      </div>
    </>
  )
}
