import Navbar from "@/app/components/layout/Navbar";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-['Geist_Mono'] px-15 py-50">
        <h1 className="text-4xl font-bold mb-4">About us</h1>
        <p className="text-lg max-w-2xl leading-relaxed">
          We make visually rich, fully on-chain games with real world-building.
          Everything — assets, mechanics, lore — lives on-chain and evolves over
          time.
        </p>

        <div className="mt-6">
          <p className="text-md">
            ⚡ Interests: Currently working on a game called BlockRooms.
          </p>
          <p className="text-md mt-2">
            🛠️ Tech stack: React, Cairo, Blender, ThreeJS.
          </p>
        </div>
      </main>
    </>
  );
}
