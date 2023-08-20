import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthButtons } from './auth-button-client'
import { cookies } from 'next/headers'


export async function AuthButtonsServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()



  return <AuthButtons session={session} />
}
