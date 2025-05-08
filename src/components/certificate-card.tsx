"use client"
import { useState } from "react"
import Image from "next/image"
import { Download, Eye, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CertificateCardProps {
  title: string
  image: string
  pdfUrl?: string
  issuer: string
  date: string
}

export default function CertificateCard({ title, image, pdfUrl, issuer, date }: CertificateCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className="bg-neutral-900 rounded-lg overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/download.png"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={() => setShowModal(true)}
            >
              <Eye className="h-5 w-5" />
              <span className="sr-only">View</span>
            </button>
            {pdfUrl && (
              <button
                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={() => window.open(pdfUrl, "_blank")}
              >
                <Download className="h-5 w-5" />
                <span className="sr-only">Download</span>
              </button>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 line-clamp-1">{title}</h3>
          <div className="flex justify-between text-sm text-gray-400">
            <span>{issuer}</span>
            <span>{date}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-neutral-900 rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 z-10 rounded-full bg-black/50"
                onClick={() => setShowModal(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="relative h-[80vh] w-full">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
              </div>

              <div className="p-4 bg-neutral-900">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="flex justify-between text-gray-400">
                  <span>{issuer}</span>
                  <span>{date}</span>
                </div>
                {pdfUrl && (
                  <button
                    className="mt-4 rounded-full bg-green-500 text-black hover:bg-green-600"
                    onClick={() => window.open(pdfUrl, "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
