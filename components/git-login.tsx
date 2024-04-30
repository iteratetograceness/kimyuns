'use client';

import { createClient } from "@/utils/auth/client"

async function signInWithGithub() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo:  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/auth/callback' : 'https://kimyun.love/auth/callback',
      }
    })
}
  
export function GitLogin() {
    return (
        <button onClick={signInWithGithub}>Sign in with GitHub</button>
    )  
}