'use client';

import { createClient } from "@/utils/auth/client"
import { Button } from "./ui/button";

async function signInWithGithub() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo:  process.env.NODE_ENV !== 'development' ? 'https://kimyun.love/auth/callback' : 'http://localhost:3000/auth/callback',
      }
    })
}
  
export function GitLogin() {
    return (
        <Button onClick={signInWithGithub}>Sign in with GitHub</Button>
    )  
}