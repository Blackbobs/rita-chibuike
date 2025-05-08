"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  image: string
  href: string
}

export default function ProjectCard({ title, image, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        className="overflow-hidden rounded-lg bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/10"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
          <motion.div
            className="flex items-center text-[#0077FF]"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-1">View details</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
