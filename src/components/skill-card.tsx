"use client"

import { FileText, LayoutTemplate, PresentationIcon as PresentationScreen, RefreshCcw, BarChart } from "lucide-react"
import { motion } from "framer-motion"

interface SkillCardProps {
  title: string
  icon: string
}

export default function SkillCard({ title, icon }: SkillCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "FileText":
        return <FileText className="h-6 w-6 text-[#1ea25e]" />
      case "LayoutTemplate":
        return <LayoutTemplate className="h-6 w-6 text-[#1ea25e]" />
      case "PresentationScreen":
        return <PresentationScreen className="h-6 w-6 text-[#1ea25e]" />
      case "RefreshCcw":
        return <RefreshCcw className="h-6 w-6 text-[#1ea25e]" />
      case "BarChart":
        return <BarChart className="h-6 w-6 text-[#1ea25e]" />
      default:
        return <FileText className="h-6 w-6 text-[#1ea25e]" />
    }
  }

  return (
    <motion.div
      className="bg-neutral-900 p-6 rounded-lg flex items-center justify-between"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <motion.div
        className="bg-green-500/10 p-3 rounded-full"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {getIcon()}
      </motion.div>
    </motion.div>
  )
}
