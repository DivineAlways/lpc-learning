export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Community</h1>

      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Join the Discussion</h2>
        <p className="text-white/90 mb-4">
          Connect with like-minded individuals, share your insights, and engage in meaningful conversations about
          spirituality.
        </p>
        <a
          href="https://discord.gg/NGDPZQsSkt"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors inline-block"
        >
          Join Our Discord
        </a>
      </div>

      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Upcoming Live Events</h2>
        <ul className="space-y-4">
          {[1, 2, 3].map((i) => (
            <li key={i} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold text-white">Spiritual Q&A Session {i}</h3>
              <p className="text-white/90">Join us for a live Q&A session with spiritual leaders.</p>
              <p className="text-sm text-white/70">Date: June {10 + i}, 2023</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

