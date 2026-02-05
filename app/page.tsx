import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-pink-500/30">
      <Navbar />
      <Hero />
      <Features />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
