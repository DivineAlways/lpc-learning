import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-white">
            Sirius Godtalk
          </Link>
          <div className="flex space-x-4">
            <Link href="/videos" className="text-white/90 hover:text-white">
              Videos
            </Link>
            <Link href="/community" className="text-white/90 hover:text-white">
              Community
            </Link>
            <Link href="/resources" className="text-white/90 hover:text-white">
              Resources
            </Link>
            <button className="text-white/90 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

