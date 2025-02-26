import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Welcome to Sirius Godtalk</h1>
      <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl">
        Where everything is everything... do you know what I mean?
      </p>
      <Link
        href="/videos"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
      >
        Of Course
      </Link>
    </div>
  )
}

