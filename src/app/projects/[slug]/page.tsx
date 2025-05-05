"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projects = {
    outbound: {
      title: "Outbound",
      image: "/placeholder.svg?height=600&width=1200",
      description: "A comprehensive project management tool for remote teams.",
      challenge: "Remote teams struggle with coordination, communication, and project visibility across time zones.",
      solution:
        "Created an integrated platform that combines task management, communication, and reporting in a time-zone aware interface.",
      outcome: "Improved team productivity by 35% and reduced miscommunication by 60% for distributed teams.",
    },
    nuwellai: {
      title: "Nuwellai",
      image: "/placeholder.svg?height=600&width=1200",
      description: "An AI-powered wellness assistant that provides personalized health recommendations.",
      challenge:
        "Generic wellness advice fails to account for individual health needs, preferences, and circumstances.",
      solution:
        "Developed an AI system that analyzes user data to provide tailored wellness recommendations and habit-building support.",
      outcome:
        "Users reported a 47% improvement in wellness habits and 72% higher satisfaction compared to generic wellness apps.",
    },
    edubridges: {
      title: "EduBridges",
      image: "/placeholder.svg?height=600&width=1200",
      description: "A platform connecting educational resources across socioeconomic divides.",
      challenge:
        "Educational inequality persists due to uneven distribution of resources between affluent and underserved communities.",
      solution:
        "Built a platform that facilitates resource sharing, mentorship, and collaborative learning between schools in different socioeconomic areas.",
      outcome:
        "Facilitated the sharing of over 5,000 educational resources and established 350+ mentorship relationships between schools.",
    },
  }

  const project = projects[params.slug as keyof typeof projects]

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
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">


      <main className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/#projects" className="inline-flex items-center text-[#171717] hover:underline mb-8">
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
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </motion.div>

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
                <h3 className="text-xl font-semibold mb-3 text-[#171717]">Challenge</h3>
                <p>{project.challenge}</p>
              </motion.div>
              <motion.div
                className="bg-neutral-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#171717]">Solution</h3>
                <p>{project.solution}</p>
              </motion.div>
              <motion.div
                className="bg-neutral-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#171717]">Outcome</h3>
                <p>{project.outcome}</p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <p className="mb-6">
                This project was developed with a focus on solving real-world problems through innovative product
                management and user-centered design.
              </p>

              <h3 className="text-xl font-semibold mb-3">My Role</h3>
              <p className="mb-6">
                As the Product Manager for this project, I was responsible for defining the product vision, creating the
                roadmap, prioritizing features, and coordinating with design and development teams to ensure successful
                delivery.
              </p>

              <h3 className="text-xl font-semibold mb-3">Methodology</h3>
              <p className="mb-6">
                We followed an Agile approach with two-week sprints, regular stakeholder reviews, and continuous user
                testing to ensure we were building the right solution.
              </p>

              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Feature 1: Description of the feature and its benefits</li>
                <li className="mb-2">Feature 2: Description of the feature and its benefits</li>
                <li className="mb-2">Feature 3: Description of the feature and its benefits</li>
                <li className="mb-2">Feature 4: Description of the feature and its benefits</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <p className="mb-6">
                This project utilized a modern tech stack including React, Node.js, and MongoDB, with additional tools
                for analytics and user testing.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="rounded-full bg-green-500 text-black hover:bg-green-600">View Live Project</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

   
    </div>
  )
}
