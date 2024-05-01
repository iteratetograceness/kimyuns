export function Announcements({
    data
}: {
    data: string[]
}) {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">공지사항</h2>
            <ul className="font-normal text-xl flex flex-col gap-3">
                {data.map((announcement, index) => (
                    <li key={index}>{announcement}</li>
                ))}
            </ul>
        </div>
    )
}