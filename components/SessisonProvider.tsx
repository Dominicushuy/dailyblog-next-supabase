'use client'
import { useUser } from '@/lib/store/user'
import { Database } from '@/lib/types/supabase'
import { createBrowserClient } from '@supabase/ssr'
import { useEffect } from 'react'

const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function SessisonProvider() {
  const setUser = useUser((state) => state.setUser)

  const readSession = async () => {
    const { data } = await supabase.auth.getSession()

    setUser(data.session?.user ?? null)
  }

  useEffect(() => {
    readSession()
    // eslint-disable-next-line
  }, [])

  return <></>
}
