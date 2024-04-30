'use client';

import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function List({
    name,
}: {
    name: string
}) {
    const id = name.replace(/\s+/g, '-').toLowerCase();
    return (
        <>
            <Label htmlFor={id}>{name}</Label>
            <Button onClick={() => console.log('add')}>Add</Button>
        </>
    )
}