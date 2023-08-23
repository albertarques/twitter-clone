'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from './icons'
import { useRouter } from 'next/navigation'
import { Button, Navbar, NavbarBrand } from '@nextui-org/react'

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      }
    })
  }

  const handleSingOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="bg-[#124495] dark:bg-[#070e19]/90 text-white dark:text-white w-screen py-1 px-2 items-center justify-between"
    >
      <NavbarBrand>
        Twitter clone
      </NavbarBrand>
      {session == null ? (
        <Button
          onClick={handleSingIn}
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <GithubIcon />
          Sign in with Github
        </Button>
      ) : (
        <Button
          onClick={handleSingOut}
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          Sign Out
        </Button>
      )}
    </Navbar>
  )
}
