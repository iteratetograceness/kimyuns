import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel({
    name,
    placeholder = "Type your message here.",
    }: {
    name: string
    placeholder?: string
}) {
    const id = name.toLowerCase();
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={id}>{name}</Label>
      <Textarea placeholder={placeholder} id={id} name={id} />
    </div>
  )
}
