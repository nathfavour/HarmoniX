import Image from "next/image";
import { Card } from "@/components/Cards";
import { PrimaryButton } from "@/components/Buttons";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto p-8 text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient">
          Welcome to HarmoniX
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover, battle, and trade music NFTs in a whole new way
        </p>
        <div className="flex justify-center gap-4">
          <PrimaryButton label="Explore Music" />
          <PrimaryButton label="Start Battle" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg py-12 mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {['1M+ Users', '500K NFTs', '100K Artists', '50K Battles'].map((stat) => (
              <div key={stat} className="p-6 rounded-lg bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm animate-fade-in-up">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  {stat}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto mt-16 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          <Card 
            title="Music Battles" 
            description="Compete in real-time music battles and earn rewards" 
          />
          <Card 
            title="NFT Trading" 
            description="Build your collection of unique music NFTs" 
          />
          <Card 
            title="Community Hub" 
            description="Connect with music lovers worldwide" 
          />
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Featured Artists
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1,2,3,4].map((artist) => (
              <div key={artist} className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold">Artist {artist}</h3>
                  <p className="text-gray-200 text-sm">1.2M Followers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
