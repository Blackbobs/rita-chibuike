"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"


export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/#projects", label: "Projects" },
//     { href: "/#skills", label: "Skills" },
//     { href: "/#case-studies", label: "Case Studies" },
//     { href: "/#services", label: "Services" },
//     { href: "/awards", label: "Awards" },
//     { href: "/#contact", label: "Contact" },
//   ]

//   const isActive = (path: string) => {
//     if (path === "/") return currentPath === "/"
//     return currentPath.startsWith(path)
//   }

  return (
    <div className="md:hidden">
      {/* <button onClick={toggleSidebar} aria-label="Menu"> */}
        <Menu onClick={toggleSidebar} className="h-6 w-6" />
      {/* </button> */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed  -top-8 -right-10   h-full inset-0 bg-black min-h-screen z-40"
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-black z-50 flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-neutral-800">
                <span className="text-xl font-bold text-[#0077FF]">Rita-Chibuike</span>
                <button onClick={closeSidebar} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* <nav className="flex-1 overflow-auto py-4">
                <ul className="space-y-1 px-2">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-md transition-colors ${
                          isActive(item.href) ? "bg-green-500/10 text-green-500" : "hover:bg-neutral-800 text-white"
                        }`}
                        onClick={closeSidebar}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav> */}

              <div className="p-4 border-t border-neutral-800 space-y-3">
                <button
               
                  className="w-full rounded-full border-[#0077FF] text-[#0077FF] hover:bg-[#0077FF] hover:text-black p-2"
                  onClick={() => window.open("http://www.linkedin.com/in/rita-chibuike-she-her-a539b4a3/", "_blank")}
                >
                  LinkedIn
                </button>
                <button
                  className="w-full rounded-full bg-[#0077FF] text-white hover:bg-[#0077FFb6] p-2"
                  onClick={() => window.open("mailto:okaforrita47@gmail.com", "_blank")}
                >
                  Email
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
