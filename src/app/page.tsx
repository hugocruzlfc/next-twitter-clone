import { AuthButtonsServer } from '@/app/components/auth-button-server'  
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostList } from './components/post-list'
import { Database } from './types/database'
import { ComposePost } from './components/compose-post'


export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) redirect('/login')

  const { data: posts } = await supabase.from('posts').select(
    '*, users(*)'
  ).order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className='max-w-[800px] w-full mx-auto border-l border-r border-white/30 min-h-screen'>
       
        <ComposePost avatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostList posts={posts} />
      </section>
      <AuthButtonsServer />
   
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
   

    </main>
  )
}
