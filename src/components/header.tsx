import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MobileSidebar from './sidebar'

const Header: React.FC = () => {
  return (
    <div className='w-full flex items-center'>
            <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 border-b w-4/5 rounded-full mx-auto my-5 border-neutral-800 bg-[#0e0e0e]">
                  <div className="container mx-auto flex items-center justify-between p-4">
                    <Link href="/" className="text-xl font-bold text-[#1ea25e]" aria-label="Rita Chibuike Home">
                      Rita-Chibuike
                    </Link>
                    <div className="flex items-center gap-4">
                      <Link
                      href={'http://www.linkedin.com/in/rita-chibuike-she-her-a539b4a3/'}
                        className="hidden md:flex rounded-xl border-[#1ea25e] text-[#1ea25e] hover:bg-[#1ea25e] hover:text-[#171717] py-2 px-5"
                        aria-label="LinkedIn Profile"
                      >
                        LinkedIn
                      </Link>
                      <Link
                      href={'mailto:okaforrita47@gmail.com'}
                        className="hidden md:flex rounded-xl bg-[#1ea25e] text-[#171717] py-2 px-5"
                        aria-label="Email Me"
                      >
                        Email
                      </Link>
                      {/* <button className="md:hidden" aria-label="Open Menu">
                        <Menu className="h-6 w-6" />
                      </button> */}
                        <MobileSidebar />
                    </div>
                  </div>
                </header>
    </div>
  )
}

export default Header