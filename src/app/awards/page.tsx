"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import JsonLd from "@/components/json-ld"
import { useEffect, useState } from "react"
import Head from "next/head"
import CertificateCard from "@/components/certificate-card"

export default function AwardsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

 

  const certifications = [
    {
      title: "Finalist – HNG Internship 12 (2025), Product Management Track",
      organization: "HNG Internship",
      year: "2025",
      description: "Selected as one of the top 432 out of 11,285 interns, recognized for outstanding performance in product management and demonstrating strong potential for success in a professional environment.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676553/Share_HNG_Internship_12_Rita_CHIBUIKE_certificate_uj0qlg.pdf",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676553/Share_HNG_Internship_12_Rita_CHIBUIKE_certificate_uj0qlg.pdf",
    },
    {
      title: "English for IT",
      organization: "CISCO Networking Academy",
      year: "2024",
      description: "Gained proficiency in English grammar and vocabulary relevant to IT contexts, including customer support, information security, job roles, and technical terminology. Developed skills in effective communication, comprehension, and professional language use within the tech industry.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676547/English_for_IT_1_poeezi.pdf",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676547/English_for_IT_1_poeezi.pdf",
    },
    {
      title: "Completed Digital Skills Program – UNITAR & IBM SkillsBuild (2023–2024)",
      organization: "unitar",
      year: "2023 -2024",
      description: "Participated in a UN-led initiative focused on developing essential digital skills for women and youth in Africa. Gained foundational knowledge in digital literacy, supported by IBM SkillsBuild and the United Nations Institute for Training and Research (UNITAR).",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676545/Rita_Chibuike_unitar_1_khytff.pdf",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676545/Rita_Chibuike_unitar_1_khytff.pdf",
    },
    {
      title: 'Completed "English for IT 2" – Cisco Networking Academy (in collaboration with OpenEDG)',
      organization: "Cisco Networking Academy",
      year: "2024",
      description: "Developed advanced English communication skills tailored to IT professionals, including logical reasoning, technical vocabulary, and fluency at the CEFR B2 level. Covered topics like networking, customer support, software issues, product management, and professional email communication.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676539/English_for_IT_2_Rita_Chibuike_usfoh9.pdf",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676539/English_for_IT_2_Rita_Chibuike_usfoh9.pdf",
    },
    {
      title: 'Completed “Developing Essential Digital Skills”',
      organization: "Cisco Networking Academy & OpenEDG",
      year: "2025",
      description: "Earned recognition for completing the English for IT 2 course, gaining advanced language skills for the tech industry. Covered key areas such as software vocabulary, networking, customer support, and fluent communication at a CEFR B2 level.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676535/Rita_Chibuike_65_ewrqv8.jpg",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676535/Rita_Chibuike_65_ewrqv8.jpg",
    },
    {
      title: 'Women in Leadership Certificate',
      organization: "IBM SkillsBuild & UNITAR",
      year: "2024",
      description: "Completed a leadership development program empowering women with digital skills and strategies to thrive in professional and community roles. Supported by IBM SkillsBuild and the United Nations Institute for Training and Research (UNITAR).",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676531/Women_leaders_vpnclx.jpg",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676531/Women_leaders_vpnclx.jpg",
    },
    {
      title: 'Product Management Certificate',
      organization: "Lmtech",
      year: "2024",
      description: "Completed a hands-on training program in product management, gaining skills in product lifecycle, strategy, user research, agile methodologies, and stakeholder collaboration.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676505/Lmtech_product_management_certificate_yxp2pn.jpg",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676505/Lmtech_product_management_certificate_yxp2pn.jpg",
    },
    {
      title: 'Exploring Emerging Technologies for Lifelong Learning',
      organization: "SUNY & IBM SkillsBuild",
      year: "2024",
      description: "Completed a program introducing key emerging technologies including AI, blockchain, cloud computing, data science, and IoT. Gained foundational insights into how these technologies are shaping the future of work and learning.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676501/explore_emerging_tech_Rita_chibuikef_2_i3ro2k.pdf",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676501/explore_emerging_tech_Rita_chibuikef_2_i3ro2k.pdf",
    },
    {
      title: 'Product Management Fundamentals',
      organization: "HelloPM",
      year: "2025",
      description: "Completed foundational training in product management, covering core concepts such as product discovery, user research, roadmap planning, and cross-functional collaboration.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676498/HelloPm_certificate_v5j2gr.png",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676498/HelloPm_certificate_v5j2gr.png",
    },
    {
      title: 'Career Essentials Certificate',
      organization: "ALX",
      year: "2024",
      description: "Completed a professional development program focused on essential workplace skills including communication, time management, problem-solving, and career planning to support success in modern work environments.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676492/Alx_Career_Essentials_lzodcq.png",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676492/Alx_Career_Essentials_lzodcq.png",
    },
    {
      title: 'SkillsBuild Completion Certificate',
      organization: "IBM & Open P-TECH",
      year: "2024",
      description: "Successfully completed career readiness training through IBM SkillsBuild and Open P-TECH, focusing on 21st-century skills, digital literacy, and foundational knowledge for emerging career paths in technology and business.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676491/RITA_CHIBUIKE_4_ec4lyn.pdf",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676491/RITA_CHIBUIKE_4_ec4lyn.pdf",
    },
    {
      title: 'Professional Foundations Certificate',
      organization: "ALX",
      year: "2024",
      description: "Completed a foundational program designed to build professional excellence, focusing on emotional intelligence, leadership, collaboration, and critical thinking skills essential for workplace success.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676486/Alx_professional_foundations_bizhay.png",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676486/Alx_professional_foundations_bizhay.png",
    },
    {
      title: 'Product Design Certificate',
      organization: "Design for Africa (DFA)",
      year: "2024",
      description: "Completed an introductory course in product design, covering key areas such as user-centered design, design thinking, wireframing, and prototyping for digital products.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676472/Product_design_DFA_bfbxej.jpg",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676472/Product_design_DFA_bfbxej.jpg",
    },
    {
      title: 'Top Participant',
      organization: "Build for Africa (BH Africa) Contest",
      year: "2024",
      description: "Recognized for outstanding participation in the BH Africa initiative, contributing to innovative solutions aimed at addressing real-world challenges across the African continent through technology and collaboration.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676472/BH_Africa_Contest_x3fybv.jpg",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676472/BH_Africa_Contest_x3fybv.jpg",
    },
    {
      title: 'Product Management Certificate',
      organization: "3MTT (Federal Government of Nigeria Initiative)",
      year: "2024",
      description: "Completed intensive training in product management through the 3MTT program, gaining practical skills in product development, market analysis, user research, and agile methodologies tailored to the Nigerian tech ecosystem.",
      image: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676469/3MTT_certificate_pm_exwusc.jpg",
      pdfUrl: "https://res.cloudinary.com/dh3c9ay9z/image/upload/v1746676469/3MTT_certificate_pm_exwusc.jpg",
    },
  ]


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
  }

  const pageTitle = "Awards & Certifications | Rita Chibuike - Product Manager Portfolio"
  const pageDescription =
    "Explore Rita Chibuike's awards, recognitions, and professional certifications in product management and UX writing."

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
      <JsonLd data={[certificationsJsonLd]} />
      <div className="min-h-screen bg-black text-white">
      

        <main className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="inline-flex items-center text-[#0077FF] hover:underline mb-8 mt-32">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Awards & Certifications
            </motion.h1>

            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              
             
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-[#0077FF] w-8 h-1 mr-3"></span>
                Certificates
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <CertificateCard
                    key={index}
                    title={cert.title}
                    image={cert.image}
                    pdfUrl={cert.pdfUrl}
                    issuer={cert.organization}
                    date={cert.year}
                  />
                ))}
              </div>
            </motion.section>
          </div>
        </main>

   
      </div>
    </>
  )
}
