"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-neutral-900 p-6 rounded-lg"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
