'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react'
import { AvatarIcon } from './icons'
import { IconRepeat, IconHeart, IconMessageCircle } from '@tabler/icons-react'
import Link from 'next/link'

export function TweetCard ({ username, name, avatarUrl, content, createdAt }) {
  return (
    <Card className='my-2'>
      <CardHeader>
        <div className="flex gap-5">
          <Link href={`/${username}`}>	
            <Avatar radius="full" size="lg" src={avatarUrl ? avatarUrl : { AvatarIcon }} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{content}</p>
      </CardBody>
      <CardFooter className="flex flex-col">
        <div className='w-full m-1 flex'>
          <IconMessageCircle size={20} strokeWidth={1.5} className='mr-2' />
          <IconHeart size={20} strokeWidth={1.5} className='mr-2'  />
          <IconRepeat size={20} strokeWidth={1.5} className='mr-2'  />
        </div>
        <div className='w-full m-1'>
          <p className=" text-sm">{createdAt.substring(11, 16)} | {createdAt.substring(0, 10)}</p>
        </div>
      </CardFooter>
    </Card>
  )
}