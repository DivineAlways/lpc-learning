import Link from "next/link"

const categories = ["Faith", "Meditation", "Spirituality", "Discussions"]

export default function VideoLibrary() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Video Library</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/videos/${category.toLowerCase()}`}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 text-sm text-white/90 hover:bg-white/20 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
          <div className="relative pt-[177.77%]">
            <iframe
              src="https://www.tiktok.com/embed/7468008855880944926"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Spiritual Awakening</h3>
            <p className="text-white/90 mb-4">Discover the path to spiritual enlightenment.</p>
            <a
              href="https://www.tiktok.com/@sirius_dot/video/7468008855880944926"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300"
            >
              Watch on TikTok
            </a>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
          <div className="relative pt-[177.77%]">
            <iframe
              src="https://www.tiktok.com/embed/7465014041874894111"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Inner Peace</h3>
            <p className="text-white/90 mb-4">Find tranquility within yourself.</p>
            <a
              href="https://www.tiktok.com/@sirius_dot/video/7465014041874894111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300"
            >
              Watch on TikTok
            </a>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
          <div className="relative pt-[177.77%]">
            <iframe
              src="https://www.tiktok.com/embed/7455054322930306334"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Divine Connection</h3>
            <p className="text-white/90 mb-4">Experience the power of spiritual connection.</p>
            <a
              href="https://www.tiktok.com/@sirius_dot/video/7455054322930306334"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300"
            >
              Watch on TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

