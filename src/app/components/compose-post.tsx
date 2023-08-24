import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Avatar } from "@nextui-org/react"
import { AvatarIcon } from "./icons"
// import { revalidatePath } from "next/cache"

export function ComposePost({
  userName,
  userAvatarUrl
}: {
  userName: string
  userAvatarUrl: string
}) {
  return (
    <form className="flex flex-col w-[40rem] mb-2 py-4 px-2 border rounded-xl border-gray-300 shadow-lg">
      <img className="rounded-full object-contain w-12 h-12" src={userAvatarUrl} />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
        name = 'post'
        rows = {4}
        className= 'w-full text-2xl placeholder-gray-500'
        placeholder='¡¿Qué está pasando?!'
        ></textarea>
        <button className='bg-sky-300 font-bold rounded-full px-5 py-2 self-end'>
          Publicar
        </button>
      </div>
    </form>
  )
}