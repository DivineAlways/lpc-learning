import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-white/70">© 2025 Sirius Godtalk. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-white/70 hover:text-white">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

