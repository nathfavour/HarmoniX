import Image from "next/image";
import { Card } from "@/components/Cards";
import { PrimaryButton } from "@/components/Buttons";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <section className="max-w-6xl mx-auto text-center space-y-6 animate-fade-in">
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

      <section className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
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
      </section>
    </main>
  );
}
