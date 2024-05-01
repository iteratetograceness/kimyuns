'use client';

import { useState } from "react";
import { X, Plus } from "lucide-react"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function List({
    name,
    textarea = false,
    file = false
}: {
    name: string
    textarea?: boolean
    file?: boolean
}) {
    const [inputs, setInputs] = useState<string[]>([]);
    
    const id = name.replace(/\s+/g, '-').toLowerCase();

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };
    

    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };
    
    const handleRemoveInput = (index: number) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };
    
    const InputType = textarea ? Textarea : Input;

    return (
        <div className="border border-input p-4 rounded-sm flex flex-col gap-4">
            <Label htmlFor={id}>{name}</Label>
            {inputs.map((input, index) => (
                <div key={`${id}-${index}`} className="flex w-full max-w-sm items-center gap-2">
                    <div className="flex flex-col gap-2 w-full">
                    {file ? <Input type="file" name={`${id}-file`} /> : null}
                    <InputType className="" name={id} value={input} onChange={(e) => handleInputChange(index, e.target.value)} />
                    </div>   
                    <Button className="self-start" type="button" onClick={() => handleRemoveInput(index)} size="icon" variant="outline">
                        <X size={20} />
                    </Button>             
                </div>
            ))}
            <Button className="w-fit self-end" type="button" onClick={handleAddInput}>
                <Plus size={20} />
                Add
            </Button>
        </div>
    )
}