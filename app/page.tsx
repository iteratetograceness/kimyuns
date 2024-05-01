import { Announcements } from "@/components/announcements";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Issue } from "@/utils/data/types";
import { kv } from "@vercel/kv";

export default async function Home() {
  const data = await kv.zrange('issues', 0, 0);

  if (data.length === 0) {
    return (
      <main className="w-full flex flex-col gap-4">
        <p>No issues yet</p>
      </main>
    );
  }

  const latestIssue = data[0] as Issue;

  return (
    <main className="w-full flex flex-col gap-12">
      <Hero heroImage={latestIssue.heroImage} number={latestIssue.number} date={latestIssue.date} />
      <div className="w-full grid grid-cols-2 gap-12">
        <Announcements data={latestIssue.announcements}/>
        <Intro data={latestIssue.intro} />
      </div>
    </main>
  );
}
