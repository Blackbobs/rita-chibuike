import type React from "react"
import ClientLayout from "./ClientLayout"
import { constructMetadata } from "./seo.config"
// import "./globals.css"


export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
