'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

export function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </Button>
    );
}
