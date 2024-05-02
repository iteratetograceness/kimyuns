import type { Event } from "@/utils/data/types";
import Image from "next/image";

export function EventItem(props: Event & { index: number }) {
    if (!props.photo) return null;

    const isEven = props.index % 2 === 0;

    return (
        <div className={`flex flex-col gap-6 relative w-fit ${isEven ? '' : 'self-end'}`}>
            <Image src={props.photo} alt={props.description} width={400} height={400} />
            <p className="absolute -bottom-24 -right-12 sm:-bottom-6 sm:-right-6 bg-foreground px-10 py-7 rounded-full text-xl prose text-primary-foreground w-64 sm:w-96">{props.description}</p>
        </div>
    )
}
