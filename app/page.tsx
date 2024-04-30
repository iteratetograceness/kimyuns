import { Announcements } from "@/components/announcements";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Hero/>
      <div className="w-full grid grid-cols-2 gap-4">
        <Announcements/>
        <Intro/>
      </div>
    </main>
  );
}
