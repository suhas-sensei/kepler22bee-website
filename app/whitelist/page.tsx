import Navbar from "@/app/components/layout/Navbar";
import Image from "next/image";

export default function WaitlistPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <Image
          src="/noice.jpg"
          alt="Waitlist Image"
          width={300}
          height={300}
          className="object-contain"
        />
      </main>
    </>
  );
}
