export function Intro({
    data
}: {
    data: string;
}) {
    return (
        <div className="flex flex-col gap-6 text-xl leading-loose">
            <h2 className="font-bold text-5xl">{(new Date()).getUTCMonth() + 1}월</h2>
            {data}
        </div>
    )
}