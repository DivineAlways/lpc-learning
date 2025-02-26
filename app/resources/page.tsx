import Link from "next/link"
import { Sparkles, Heart, Moon } from "lucide-react"

const resources = [
  {
    title: "Introduction to Meditation",
    type: "Article",
    icon: Moon,
    description: "Learn the fundamentals of meditation and spiritual practices.",
    link: "/resources/meditation-intro",
  },
  {
    title: "The Path to Inner Peace",
    type: "Article",
    icon: Heart,
    description: "Discover how to find and maintain inner peace in your daily life.",
    link: "/resources/inner-peace",
  },
  {
    title: "Understanding Divine Energy",
    type: "Article",
    icon: Sparkles,
    description: "Explore the nature of divine energy and its influence on our lives.",
    link: "/resources/divine-energy",
  },
]

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Learning Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Link
            key={index}
            href={resource.link}
            className="group bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-6 transition-all hover:bg-white/20"
          >
            <resource.icon className="w-8 h-8 text-orange-400 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">{resource.title}</h2>
            <p className="text-white/70 mb-4">{resource.description}</p>
            <span className="text-orange-400 group-hover:text-orange-300">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

