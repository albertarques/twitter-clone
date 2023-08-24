import { TweetCard } from './tweet-card'
import { type Post } from '../types/posts'

export function PostsList ({ posts }: { posts: Post[] | null }) {
  return (
    posts.map((post) => {
      const {
        id,
        user,
        content,
        created_at: createdAt
      } = post

      const {
        user_name: userName,
        name: fullName,
        avatar_url: avatarUrl
      } = user
      return (
        <TweetCard
          key={id}
          username={userName}
          name={fullName}
          avatarUrl={avatarUrl}
          content={content}
          createdAt={createdAt}
        />
      )
    })
  )
}