import { ErrorBoundary } from "react-error-boundary";
import { GitLogin } from '@/components/git-login'
import { createClient } from '@/utils/auth/server'
import { kv } from "@vercel/kv";
import { InputFile } from '@/components/form/file'
import { InputWithLabel } from '@/components/form/input'
import { DatePicker } from '@/components/form/date';
import { TextareaWithLabel } from '@/components/form/text';
import { publish } from './action';
import { List } from '@/components/form/list';
import { Submit } from '@/components/form/submit';
import { Issue } from "@/utils/data/types";

export default async function Publish() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        return <GitLogin/>
    }

    const lastIssue = await kv.zrange('issues', 0, 0);
    const nextIssue = lastIssue.length > 0 ? ((lastIssue[0] as Issue).number + 1).toString() : '0';
  
    return (
        <ErrorBoundary
            fallback={<p>There was an error while submitting the form</p>}
        >
            <form action={publish} className="flex flex-col gap-4">
                <input type="hidden" name="issue" value={nextIssue} />
                <InputWithLabel name="Issue Number" type="number" placeholder="1" disabled value={nextIssue} />
                <DatePicker />
                <InputFile name="Hero Image" />
                <TextareaWithLabel name="Intro" />
                <List name="Announcements" />
                <List name="Events" textarea file />
                <Submit/>
                {}
            </form>
        </ErrorBoundary>
    )
}
