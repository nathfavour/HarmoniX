import { Card } from "@/components/Cards";
import { PrimaryButton } from "@/components/Buttons";

export default function Discovery() {
  return (
    <main className="p-8 space-y-12">
      {/* Categories Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Browse Categories
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {['All', 'Rock', 'Pop', 'Hip Hop', 'Electronic', 'Classical', 'Jazz', 'Folk'].map((genre) => (
            <button
              key={genre}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div key={item} className="relative group animate-fade-in-up">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                <div className="h-full w-full bg-white dark:bg-gray-900 rounded-lg p-4">
                  <h3 className="font-bold">Top Track #{item}</h3>
                  <p className="text-sm text-gray-500">Artist Name</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">New Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((item) => (
            <Card
              key={item}
              title={`New Release #${item}`}
              description="Latest trending music NFT from top artists"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
