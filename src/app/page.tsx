import Image from "next/image";
import { Card } from "@/components/Cards";
import { PrimaryButton } from "@/components/Buttons";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome to HarmoniX</h1>
        <p className="text-gray-600">Discover, battle, and trade music NFTs.</p>
        <PrimaryButton label="Explore Music" />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Music Battles" description="Compete or vote for your favorites" />
        <Card title="NFT Trading" description="Collect and trade unique music NFTs" />
        <Card title="Community Hub" description="Engage with other music fans" />
      </section>
    </main>
  );
}
