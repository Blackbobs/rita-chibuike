"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
   href: string
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        className="bg-neutral-900 p-6 rounded-lg hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077FF]/10 h-full"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mt-4 pt-4">
          <span className="text-[#0077FF] text-sm font-medium">Learn more →</span>
        </div>
      </motion.div>
    </Link>
  )
}
