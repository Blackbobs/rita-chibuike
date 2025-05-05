"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface Review {
  text: string
  author: string
  position: string
  rating: number
}

interface ReviewCarouselProps {
  reviews: Review[]
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isMobile = useMobile()
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isPaused, reviews.length])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }


  const getVisibleReviews = () => {
    if (isMobile) return 1
    return 3
  }

  const visibleReviews = getVisibleReviews()
  const totalSlides = Math.ceil(reviews.length / visibleReviews)

  // Get current visible reviews
  const getCurrentReviews = () => {
    const startIndex = (currentIndex % totalSlides) * visibleReviews
    return reviews.slice(startIndex, startIndex + visibleReviews)
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {getCurrentReviews().map((review, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4">{review.text}</p>
                <div className="font-bold">
                  - {review.author}, {review.position}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      
      <div className="flex justify-center items-center mt-8 gap-4">
        {/* <Button
          variant="outline"
          size="icon"
          className="rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button> */}
        <button
          className="rounded-full border-[#1ea25e] text-[#1ea25e] hover:bg-[#1ea25e44] hover:text-[#171717] p-2"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </button>

        
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex % totalSlides) === index
                  ? "bg-[#1ea25e] w-4"
                  : "bg-neutral-600 hover:bg-neutral-400"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* <Button
          variant="outline"
          size="icon"
          className="rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button> */}
        <button
          className="rounded-full border-[#1ea25e] text-[#1ea25e] hover:bg-[#1ea25e44] hover:text-[#171717] p-2"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}
