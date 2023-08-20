import { type Post } from "../types/post"
import PostCard from "./post-card"


export function PostList({ posts }: { posts: Post[] }) {

    return (
        <>
            {
                posts.map((post) => {
                    const { id,
                        users,
                        content
                    } = post

                    const {
                        user_name: userName,
                        name: userFullName,
                        avatar_url: avatarUrl,
                    } = users

                    return (
                        <PostCard
                            key={id}
                            userFullName={userFullName}
                            userName={userName}
                            avatarUrl={avatarUrl}
                            content={content!}
                        />
                    )
                })
        }
        </>
    )
   
}