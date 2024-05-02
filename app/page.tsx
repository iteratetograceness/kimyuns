import { Announcements } from "@/components/announcements";
import { EventItem } from "@/components/event";
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-18 md:gap-36">
        <Intro data={latestIssue.intro} />
        <Announcements data={latestIssue.announcements}/>
      </div>
      <div className="margin-auto h-full bg-primary -mx-8 sm:-mx-12 p-8 sm:p-12 text-primary-foreground flex flex-col items-center gap-48 sm:gap-12 overflow-x-clip pb-48">
        <div className="flex flex-col gap-4 self-start">
          <h2 className="text-background text-9xl">YOZM</h2>
          <h2 className="text-background text-7xl">요즘</h2>
        </div>
        {latestIssue.events.map((event, index) => (
          <EventItem key={index} {...event} index={index} />
        ))}
      </div>
      <div className="p-6 self-center">
        그럼, 다음 이슈에 뵈요!
      </div>
    </main>
  );
}
