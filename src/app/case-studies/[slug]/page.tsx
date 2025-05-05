"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import JsonLd from "@/components/json-ld"
import { useEffect, useState } from "react"
import Head from "next/head"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const caseStudies = {
    "health-genius": {
      title: "Culturally Relevant Calorie Tracking for Health-Conscious Nigerians- Health genius",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "A comprehensive case study on developing a calorie tracking app specifically designed for Nigerian cuisine and eating habits.",
      challenge:
        "Traditional calorie tracking apps lack culturally relevant food databases for Nigerian users, making it difficult for health-conscious Nigerians to accurately track their nutrition.",
      solution:
        "Created a specialized food database with Nigerian meals and their nutritional information, combined with an intuitive user interface that makes tracking easy and relevant.",
      outcome:
        "Increased user engagement by 78% compared to generic tracking apps, with 92% of users reporting higher satisfaction with the culturally relevant approach.",
    },
    freshpaddy: {
      title: "Empowering Career-Oriented Women with Accessible Nutrition- Freshpaddy by Nuel Ritz",
      image: "/placeholder.svg?height=600&width=1200",
      description: "A case study on creating a nutrition solution for busy professional women.",
      challenge:
        "Career-focused women often struggle to maintain balanced nutrition due to time constraints and work pressures.",
      solution:
        "Developed a meal planning and delivery service with nutritional guidance specifically tailored to the needs and schedules of professional women.",
      outcome:
        "Helped over 500 career women improve their nutritional habits while saving an average of 5 hours per week on meal preparation.",
    },
    doctorme: {
      title: "Health Companion for Easy Access to Quality Care - DoctorMe",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "A telemedicine platform designed to connect patients with healthcare providers quickly and efficiently.",
      challenge: "Limited access to quality healthcare due to geographical barriers, long wait times, and high costs.",
      solution:
        "Created an intuitive telemedicine platform with AI-powered triage, doctor matching, and follow-up care management.",
      outcome: "Reduced average time to doctor consultation by 85% and improved patient satisfaction scores by 67%.",
    },
    educonnect: {
      title: "EduConnect",
      image: "/placeholder.svg?height=600&width=1200",
      description: "An educational platform connecting students with tutors and educational resources.",
      challenge: "Students in underserved communities lack access to quality educational support and resources.",
      solution:
        "Developed a platform that matches students with qualified tutors and provides access to a comprehensive library of educational materials.",
      outcome:
        "Improved academic performance for 78% of users and increased educational resource access in target communities by 150%.",
    },
    talenvo: {
      title: "Talenvo Uxcopy Documentation",
      image: "/placeholder.svg?height=600&width=1200",
      description: "A comprehensive UX writing and documentation project for Talenvo's talent management platform.",
      challenge:
        "Complex user flows and technical features were difficult for users to understand, leading to low adoption rates.",
      solution:
        "Created clear, concise UX copy and comprehensive documentation that guides users through complex processes with simple language.",
      outcome:
        "Increased feature adoption by 45% and reduced support tickets by 60% through improved user understanding.",
    },
    healthbridge: {
      title: "HealthBridge",
      image: "/placeholder.svg?height=600&width=1200",
      description: "A platform connecting patients with healthcare providers and resources.",
      challenge:
        "Fragmented healthcare information and services create barriers for patients seeking comprehensive care.",
      solution:
        "Built an integrated platform that consolidates healthcare information, provider access, and health management tools in one place.",
      outcome: "Improved patient care coordination by 70% and increased preventative care engagement by 55%.",
    },
  }

  const study = caseStudies[params.slug as keyof typeof caseStudies]

  if (!study) {
    return (
      <div className="min-h-screen bg-[#171717] text-[#f4f4f4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/" className="text-[01351A] hover:underline">
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
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: "2023-01-01T00:00:00Z",
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
          <link rel="canonical" href={`https://rita-chibuike.com/case-studies/${params.slug}`} />
        </Head>
      )}
      <JsonLd data={caseStudyJsonLd} />
      <div className="min-h-screen bg-[#171717] text-white">
        

        <main className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/#case-studies" className="inline-flex items-center text-[#171717] hover:underline mb-8">
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
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {study.description}
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  className="bg-neutral-900 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#01351A]">Challenge</h3>
                  <p>{study.challenge}</p>
                </motion.div>
                <motion.div
                  className="bg-neutral-900 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#01351A]">Solution</h3>
                  <p>{study.solution}</p>
                </motion.div>
                <motion.div
                  className="bg-neutral-900 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#01351A]">Outcome</h3>
                  <p>{study.outcome}</p>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <h2 className="text-2xl font-bold mb-4">Process</h2>
                <p className="mb-6">
                  The development process for this project followed a user-centered design approach, with extensive
                  research and iterative testing to ensure the solution met the needs of the target audience.
                </p>

                <h3 className="text-xl font-semibold mb-3">Research & Discovery</h3>
                <p className="mb-6">
                  We began with comprehensive user research, including interviews, surveys, and competitive analysis to
                  understand the pain points and opportunities in the market.
                </p>

                <h3 className="text-xl font-semibold mb-3">Ideation & Prototyping</h3>
                <p className="mb-6">
                  Based on our research findings, we developed user personas, journey maps, and low-fidelity wireframes
                  to visualize the solution. These were refined through multiple iterations of user feedback.
                </p>

                <h3 className="text-xl font-semibold mb-3">Development & Testing</h3>
                <p className="mb-6">
                  The development phase involved close collaboration between product, design, and engineering teams. We
                  conducted regular usability testing sessions to validate our assumptions and refine the user
                  experience.
                </p>

                <h3 className="text-xl font-semibold mb-3">Launch & Iteration</h3>
                <p className="mb-6">
                  After launch, we closely monitored user metrics and gathered feedback to inform future iterations and
                  feature enhancements.
                </p>
              </motion.div>

              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="rounded-full bg-[#171717] text-[#01351A] hover:bg-[#01351A44]">
                    View Next Case Study
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
