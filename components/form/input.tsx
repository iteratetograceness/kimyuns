import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({
    name,
    type = "text",
    placeholder = "Hello world",
    disabled = false,
    value
}: {
    name: string
    type?: string
    placeholder?: string
    disabled?: boolean
    value?: string
}) {
    const id = name.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{name}</Label>
        <Input required disabled={disabled} type={type} id={id} name={id} placeholder={placeholder} value={value} />
      </div>
    </>
  )
}
