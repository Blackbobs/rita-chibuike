"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";
import ReviewCarousel from "@/components/review-carousel";
import JsonLd from "@/components/json-ld";
import { useRouter } from "next/navigation";

export default function ClientPage() {
  const router = useRouter();

  const reviews = [
    {
      text: "I highly recommend Rita for her exceptional work as a Product Manager. In the time we've collaborated at Nuwell AI, she's consistently demonstrated great organization skills, excellent communication, and strong problem-solving abilities. Rita's attention to detail and dedication make her an asset to any project and a pleasure to work alongside.",
      author: "Lolia Nnodim",
      position: "UI/UX Designer | Product Design Instructor",
      rating: 5,
    },
    {
      text: "Working with Rita at Nuwell AI has been such a joy. She's one of those rare people who can take big, sometimes messy ideas and turn them into clear, thoughtful product plans that actually work—and more importantly, truly serve the people we're building for. Rita brings a calm confidence to every meeting, asks the right questions, and always keeps the user at the center of every decision. She's sharp, extremely detailed, kind, and just really great to collaborate with. If you get the chance to work with her, take it. She makes any team better!",
      author: "IDARA BASSEY",
      position:
        "Customer Care Representative | Community Manager | Business Development Executive",
      rating: 5,
    },
    {
      text: "I wanted to take a moment to acknowledge the significant impact Rita has had on the success of the EduBridge project. Her product management has been truly exceptional, and the results speak for themselves. Rita's strategic vision and meticulous execution were critical in driving the project forward. She consistently demonstrated a deep understanding of our goals and effectively translated them into actionable plans. Her ability to anticipate challenges and proactively address them ensured we stayed on course and delivered a high-quality product.",
      author: "Olabode Showole",
      position:
        "Frontend Developer (React.js | TypeScript | Tailwind CSS) | Python Programmer | Customer Services",
      rating: 5,
    },
    {
      text: "I've been consistently impressed by the quality and style of Rita's work on projects submitted through the Talenovo platform. Her submissions demonstrate a strong understanding of product principles and a keen eye for detail. I believe Rita possesses the skills and talent to excel in a product management role. I highly recommend her and am confident she will continue to produce exceptional work.",
      author: "Temidayo Adefioye",
      position:
        "Founder, Talenovo | Connecting Dreams with Opportunities | Software Engineer",
      rating: 5,
    },
    {
      text: "Working with Rita has been great so far. She is such a great team lead—she makes sure all her team members are on track and always deliver. I can recommend her anytime, anywhere. She is a great Product Manager and a wonderful listener.",
      author: "Benita Mbulu",
      position:
        "Software Engineer (Frontend) || UI/UX Designer || Brand Collaborator",
      rating: 5,
    },
    {
      text: "I am writing to provide a detailed recommendation for Rita, who I had the privilege of working with closely during our time on the same team at LMTECH. Over the course of our collaboration, I witnessed firsthand Rita's exceptional capabilities as a Product Manager, her outstanding leadership qualities, and her relentless commitment to delivering results that align with organizational goals. This recommendation aims to comprehensively highlight her skills, achievements, and personal attributes, offering insight into why Rita is an asset to any organization.",
      author: "Oluwatosin Oduyomi",
      position: "LMTECH",
      rating: 5,
    },
    {
      text: "I had the privilege of working with Rita Chibuike on Talenovo, specifically on the EduConnect and Evently challenges, and it was an incredibly rewarding experience. She demonstrated exceptional skills in communication, teamwork, and collaboration, which were integral to our seamless workflow and successful project delivery. I wholeheartedly recommend Rita Chibuike to any organization or team looking for a skilled and inspiring professional Product Manager who can lead with impact and collaborate with ease. It was a pleasure working with her, and I am confident she will continue to excel in her endeavors.",
      author: "Sheila Mwangi",
      position: "Software Developer || PHP (Laravel)",
      rating: 5,
    },
    {
      text: "I worked with Rita for a project where she led a team of three, and I can say that she is a really good team member and leader. She worked with us as a Product Manager and always made sure that we were all on track with what was expected from us and that everybody's contribution was valued.",
      author: "Adaeze Emelike",
      position: "UX Design || Product Strategy || Writing",
      rating: 5,
    },
    {
      text: "I am pleased to recommend Rita, who has been an exceptional Product Manager on our team. Rita is a remarkable connector, fostering collaboration and synergy among team members. Her ability to manage the team effectively while ensuring everyone feels included and valued is truly commendable. I can confidently recommend Rita for any opportunity she pursues. She will undoubtedly excel and inspire those around her.",
      author: "Stephen Oyeyemi",
      position:
        "Innovative Backend Software Engineer | Architecting Scalable Web Solutions with Node.js & TypeScript",
      rating: 5,
    },
  ];
  
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rita Chibuike",
    jobTitle: "Product Manager",
    description:
      "Agile Product Manager and UX Writer passionate about solving complex problems and creating meaningful user experiences.",
    url: "https://rita-chibuike.com",
    sameAs: ["https://linkedin.com/in/rita-chibuike"],
    knowsAbout: [
      "Product Management",
      "Agile Methodologies",
      "UX Writing",
      "Product Strategy",
      "User Research",
    ],
  };

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
  };

  return (
    <>
      <JsonLd data={[personJsonLd, reviewsJsonLd]} />
      <main className="min-h-screen bg-[0e0e0e] text-[#f4f4f4]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 mt-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                <motion.span
                  className="text-[#0077FF] inline-block"
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
                <span className="text-[#0077FF font-semibold]">
                  {" "}
                  Hey I am Rita Chibuike{" "}
                </span>{" "}
                I am an Agile product manager and Uxwriter Driven by a deep love
                for solving complex problems. What excites me most is connecting
                with users on a personal level Truly understanding their needs
                and pain points to create meaningful, impactful solutions. I
                thrive on the challenge of quickly adapting to new markets and
                environments. Collaboration is at the heart of my approach, and
                I value working with teams to bring innovative ideas to life.
                Every new challenge is an opportunity for me to make a real
                difference, and that’s what keeps me motivated and inspired.
              </motion.p>
              <motion.p
                className="text-lg mb-8 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Current Goal: Seeking for the role of an Agile product manager
                at a fast-growing company
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1qz8q0lfSAbvePg1_w-y7saX-Yv5lpDnr/view",
                      "_blank"
                    )
                  }
                  className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FF44] py-2 px-5"
                >
                  Resume
                </button>
                <button
                  onClick={() => router.push("/awards")}
                  className="rounded-full border-[#0077FF] text-[#0077FF] hover:bg-[#0077FF] hover:text-[#f4f4f4] py-2 px-4"
                >
                  Certificates
                </button>
                <Link href={'#services'} className="rounded-full border-[#0077FF] text-[#0077FF] hover:bg-[#0077FF] hover:text-[#f4f4f4] py-2 px-4">Services</Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-[#0077FF]">
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
              <ServiceCard
                title="Starter Plan"
                description="MVP planing + basic wireframes"
                href="/services/starter-plan"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ServiceCard
                title="Launch Plan"
                description="MVP planing + wireframes + launch support"
                href="/services/launch-plan"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ServiceCard
                title="Growth"
                description="Full MVP delivery + team coordination + post-launch support"
                href="/services/growth-plan"
              />
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
                href="/services/landing-page-audit"
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
                href="/services/competitive-analysis"
              />
            </motion.div>
          </div>
        </motion.section>

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
                className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-between"
              >
                <h3 className="text-2xl font-bold">outbound</h3>
                 <button className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FF44] p-2">
                  <ArrowRight className="h-5 w-5" />
                </button>
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
                className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-between"
              >
                <h3 className="text-2xl font-bold">nuwellai</h3>
                 <button className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FF44] p-2">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/projects/edubridge"
                className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-between"
              >
                <h3 className="text-2xl font-bold">edubridge</h3>
                 <button className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FF44] p-2">
                  <ArrowRight className="h-5 w-5" />
                </button>
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
              <SkillCard
                title="Product Vision and Strategy, Road mapping, Feature Prioritization."
                icon="FileText"
              />
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
              <SkillCard
                title="Documentation (PRD, BRD, Go To Market, SRS)"
                icon="FileText"
              />
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
              <SkillCard
                title="Agile Methodologies (SCRUM, JIRA)"
                icon="RefreshCcw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <SkillCard
                title="Analytical Approach to Customer Insights & User Feedback Analysis"
                icon="BarChart"
              />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ProjectCard
                title="User Frustrations on Amazon"
                image="/rita10.webp"
                href="/case-studies/amazon"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ProjectCard
                title="Ai-Launcher"
                image="/rita11.webp"
                href="/case-studies/ailauncher"
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
              <Link
                className="flex items-center justify-between"
                href={`mailto:okaforrita47@gmail.com`}
              >
                <span className="text-xl">Email</span>
                <button className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FF44] p-2">
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
              <Link
                className="flex items-center justify-between"
                href={`https://linkedin.com/in/rita-chibuike`}
              >
                <span className="text-xl">LinkedIn</span>
                <button className="rounded-full bg-[#0077FF] text-[#f4f4f4] hover:bg-[#0077FF44] p-2">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
