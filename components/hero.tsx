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
            <div className="relative bg-slate-300 w-full h-screen text-white">
                <Image src={heroImage} alt="Hero Image" fill className="object-cover"/>
                <p className="absolute bottom-12 sm:bottom-24 md:bottom-28 lg:bottom-36 right-3 sm:right-4 text-3xl sm:text-6xl lg:text-8xl xl:text-9xl">Issue {number}</p>
                <p className="absolute bottom-4 sm:bottom-7 right-3 sm:right-4 text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{dateObject.toDateString()}</p>
            </div>
        </section>
    )
}