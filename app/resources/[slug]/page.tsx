import Link from "next/link"
import { notFound } from "next/navigation"

const articles = {
  "meditation-intro": {
    title: "Introduction to Meditation",
    content: `
      <h2>Understanding Meditation</h2>
      <p>Meditation is a practice that has been used for thousands of years to develop awareness, mindfulness, and inner peace. In today's fast-paced world, it's more important than ever to find moments of stillness and connection with our inner selves.</p>
      
      <h2>Getting Started</h2>
      <p>Begin with just 5-10 minutes of daily practice. Find a quiet space where you won't be disturbed. Sit comfortably with your back straight and your eyes closed or softly focused.</p>
      
      <h2>Basic Techniques</h2>
      <p>Start by focusing on your breath. Notice the sensation of breathing in and out. When your mind wanders (which is natural), gently bring your attention back to your breath.</p>
    `,
  },
  "inner-peace": {
    title: "The Path to Inner Peace",
    content: `
      <h2>What is Inner Peace?</h2>
      <p>Inner peace is a state of mental and spiritual calm despite the potential presence of external stressors. It's about finding harmony between your thoughts, feelings, and the world around you.</p>
      
      <h2>Daily Practices</h2>
      <p>Cultivating inner peace requires consistent practice. Start your day with gratitude, practice mindfulness throughout the day, and end with reflection.</p>
      
      <h2>Overcoming Challenges</h2>
      <p>The path to inner peace isn't always smooth. Learn to embrace challenges as opportunities for growth and understanding.</p>
    `,
  },
  "divine-energy": {
    title: "Understanding Divine Energy",
    content: `
      <h2>The Nature of Divine Energy</h2>
      <p>Divine energy is the fundamental force that connects all living beings. It's the universal life force that flows through everything in existence.</p>
      
      <h2>Connecting with Divine Energy</h2>
      <p>Through meditation, prayer, and mindful practices, we can develop our awareness of and connection to divine energy.</p>
      
      <h2>Practical Applications</h2>
      <p>Learn how to channel divine energy for healing, personal growth, and spiritual development in your daily life.</p>
    `,
  },
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/resources" className="text-orange-400 hover:text-orange-300 mb-8 inline-block">
        ← Back to Resources
      </Link>
      <article className="prose prose-invert prose-orange max-w-none">
        <h1 className="text-3xl font-bold text-white mb-8">{article.title}</h1>
        <div className="text-white/90 space-y-6" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  )
}

