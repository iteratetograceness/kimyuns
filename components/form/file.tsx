import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputFile({
    name
}: {
    name: string
}) {
    const id = name.toLowerCase()
    return (
      <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{name}</Label>
        <Input id={id} name={id} type="file" />
      </div>
      </>
    )
}