"use client"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import Footer from "@/components/footer"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer/>
      </body>
    </html>
  )
}
