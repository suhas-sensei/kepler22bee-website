import Navbar from "@/app/components/layout/Navbar";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-['Geist_Mono'] px-15 py-50">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg max-w-2xl leading-relaxed">
          Hey! Im the creator of <strong>Kepler22bee</strong>, a digital
          playground where creativity, code, and curiosity collide. Whether it
          is building games, crafting digital experiences, or designing
          expressive web elements — I bring ideas to life with a blend of design
          and engineering.
        </p>

        <div className="mt-6">
          <p className="text-md">
            ⚡ Interests: Web3, creative coding, interactive design, generative
            art, AI interfaces.
          </p>
          <p className="text-md mt-2">
            🛠️ Tools I use: React, Next.js, Tailwind, p5.js, GLSL, and more.
          </p>
        </div>
      </main>
    </>
  );
}
