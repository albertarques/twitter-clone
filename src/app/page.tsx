import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostsList } from './components/posts-list'
import type { Database } from './types/database'
import { ComposePost } from './components/compose-post'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session == null) redirect('/login')

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*)')

  return (
    <main className="flex flex-col items-center justify-between">
      <AuthButtonServer/>
      <section className="flex flex-col w-[40rem] py-4"> 
      <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url}/>
      <PostsList posts={posts} />
      </section>
    </main>
  )
}
