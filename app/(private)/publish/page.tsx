import { GitLogin } from '@/components/git-login'
import { createClient } from '@/utils/auth/server'

export default async function Publish() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        return <GitLogin/>
    }
  
    return (
        <form>
            
            input with issue # (disabled)
            date picker
            announcements input
            intro input
            heroimage input
            events input
        </form>
    )
}
