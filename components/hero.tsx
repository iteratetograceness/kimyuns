import Image from 'next/image';
import { Issue } from "@/utils/data/types";

export function Hero({
    heroImage,
    number,
    date
}: Pick<Issue, 'heroImage' | 'number' | 'date' >) {
    const dateObject = new Date(date);
    return (
        <section className="flex flex-col gap-4">
            <div className="flex justify-between text-2xl">
                <p>Issue {number}</p>
                <p>{dateObject.toDateString()}</p>
            </div>

            <div className="relative bg-slate-300 w-full h-screen ">
                <Image src={heroImage} alt="Hero Image" fill className="object-cover"/>
            </div>
        </section>
    )
}