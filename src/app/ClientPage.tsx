"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillCard from "@/components/skill-card"
import ServiceCard from "@/components/service-card"
import { motion } from "framer-motion"
import ReviewCarousel from "@/components/review-carousel"
import JsonLd from "@/components/json-ld"
// import { useRouter } from "next/navigation"

export default function ClientPage() {
  // const router = useRouter()
 
  const reviews = [
    {
      text: "Rita's product management skills transformed our project. Her strategic vision and user-focused approach helped us deliver a product that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO at TechStart",
      rating: 5,
    },
    {
      text: "Working with Rita was a game-changer for our team. Her documentation skills and agile methodology expertise streamlined our development process significantly.",
      author: "Michael Chen",
      position: "CTO at InnovateLabs",
      rating: 5,
    },
    {
      text: "Rita's analytical approach to customer insights helped us pivot our product in the right direction. Her recommendations were data-driven and impactful.",
      author: "Aisha Okoye",
      position: "Product Director at HealthTech",
      rating: 5,
    },
    {
      text: "The level of detail in Rita's product documentation is exceptional. She has a unique ability to translate complex technical requirements into clear, actionable items.",
      author: "David Rodriguez",
      position: "Engineering Lead at SoftServe",
      rating: 5,
    },
    {
      text: "Rita's leadership during our product launch was instrumental to its success. Her ability to coordinate cross-functional teams and keep everyone aligned with the vision was impressive.",
      author: "Jennifer Lee",
      position: "Marketing Director at GrowthX",
      rating: 5,
    },
    {
      text: "We hired Rita as a consultant for our healthcare app, and she delivered beyond our expectations. Her understanding of both product management and the healthcare domain made her invaluable.",
      author: "Dr. Emmanuel Okafor",
      position: "Founder at MediTech Solutions",
      rating: 5,
    },
  ]

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rita Chibuike",
    jobTitle: "Product Manager",
    description:
      "Agile Product Manager and UX Writer passionate about solving complex problems and creating meaningful user experiences.",
    url: "https://rita-chibuike.com",
    sameAs: ["https://linkedin.com/in/rita-chibuike"],
    knowsAbout: ["Product Management", "Agile Methodologies", "UX Writing", "Product Strategy", "User Research"],
  }

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rita Chibuike Product Management Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.text,
    })),
  }

  return (
    <>
      <JsonLd data={[personJsonLd, reviewsJsonLd]} />
      <main className="min-h-screen bg-[0e0e0e] text-[#f4f4f4]">
    
    

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                <motion.span
                  className="text-[#1ea25e] inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Product Manager
                </motion.span>
              </h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Hi, I'm Rita Chibuike — an Agile Product Manager and UX Writer who's passionate about solving complex
                problems and creating meaningful user experiences. I thrive on connecting with users, adapting quickly,
                and collaborating with teams to turn insights into impactful solutions.
              </motion.p>
              <motion.p
                className="text-lg mb-8 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Current Goal: Seeking for the role of an Agile product manager at a fast-growing company
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <button className="rounded-full bg-[#1ea25e] text-[#171717] hover:bg-[#1ea25e44] py-2 px-4">View Projects</button>
                <button
                  className="rounded-full border-[#1ea25e] text-[#1ea25e] hover:bg-[#1ea25e] hover:text-black py-2 px-4"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-[#1ea25e]">
                <Image
                  src="/rita.png"
                  alt="Rita Chibuike - Product Manager"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="container mx-auto px-4 py-16 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Link
                href="/projects/outbound"
                className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <h3 className="text-2xl font-bold">outbound</h3>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link
                href="/projects/nuwellai"
                className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <h3 className="text-2xl font-bold">nuwellai</h3>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/projects/edubridges"
                className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <h3 className="text-2xl font-bold">edubridges</h3>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="container mx-auto px-4 py-16 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <SkillCard title="Product Vision and Strategy, Road mapping, Feature Prioritization." icon="FileText" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <SkillCard title="Lo-fi prototypes." icon="LayoutTemplate" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <SkillCard title="Documentation (PRD, BRD, Go To Market, SRS)" icon="FileText" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SkillCard title="Presentation." icon="PresentationScreen" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <SkillCard title="Agile Methodologies (SCRUM, JIRA)" icon="RefreshCcw" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <SkillCard title="Analytical Approach to Customer Insights & User Feedback Analysis" icon="BarChart" />
            </motion.div>
          </div>
        </motion.section>

        {/* Case Studies Section */}
        <motion.section
          id="case-studies"
          className="container mx-auto px-4 py-16 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Case studies, Launch plans and Documentation
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <ProjectCard
                title="Culturally Relevant Calorie Tracking for Health-Conscious Nigerians- Health genius"
                image="/rita1.webp"
                href="/case-studies/health-genius"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ProjectCard
                title="Empowering Career-Oriented Women with Accessible Nutrition- Freshpaddy by Nuel Ritz"
                image="/rita2.webp"
                href="/case-studies/freshpaddy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ProjectCard
                title="Health Companion for Easy Access to Quality Care - DoctorMe"
                image="/rita3.webp"
                href="/case-studies/doctorme"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ProjectCard
                title="Acada"
                image="/rita4.webp"
                href="/case-studies/acada"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ProjectCard
                title="Evently- A seamless event platform"
                image="/rita5.webp"
                href="/case-studies/evently"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ProjectCard
                title="Re-evolve- reimagining the form for global startups"
                image="/rita6.webp"
                href="/case-studies/evolve"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ProjectCard
                title="EduConnect"
                image="/rita7.webp"
                href="/case-studies/educonnect"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <ProjectCard
                title="Talenvo Uxcopy Documentation"
                image="/rita8.webp"
                href="/case-studies/talenvo"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ProjectCard
                title="HealthBridge"
                image="/rita9.webp"
                href="/case-studies/healthbridge"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="container mx-auto px-4 py-16 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-xl mb-12 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hire me as a full time PM without the cost of a full time PM
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <ServiceCard title="Starter Plan" description="MVP planing + basic wireframes" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ServiceCard title="Launch Plan" description="MVP planing + wireframes + launch support" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ServiceCard title="Growth" description="Full MVP delivery + team coordination + post-launch support" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ServiceCard
                title="Add-on: Landing Page Audit"
                description="Conversion optimization report + suggestions"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <ServiceCard
                title="Add-on: Competitive Analysis"
                description="Benchmark & SWOT analysis + market positioning"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section
          id="reviews"
          className="container mx-auto px-4 py-16 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Reviews
          </motion.h2>

          <ReviewCarousel reviews={reviews} />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="container mx-auto px-4 py-16 border-t border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-neutral-900 p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link className="flex items-center justify-between" href={`mailto:okaforrita47@gmail.com`}>
              <span className="text-xl">Email</span>
              <button className="rounded-full bg-[#1ea25e] text-[#171717] hover:bg-[#1ea25e44] p-2">
                <ArrowRight className="h-5 w-5" />
              </button>
              </Link>
            </motion.div>
            <motion.div
              className="bg-neutral-900 p-6 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
                <Link className="flex items-center justify-between" href={`mailto:okaforrita47@gmail.com`}>
              <span className="text-xl">LinkedIn</span>
              <button className="rounded-full bg-[#1ea25e] text-[#171717] hover:bg-[#1ea25e44] p-2">
                <ArrowRight className="h-5 w-5" />
              </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>     
      </main>
    </>
  )
}
