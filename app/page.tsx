import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      {allPosts.map((post) => (
        <article key={post._id} className="mb-10 p-0">
          <Link href={post.slug} className="no-underline">
            <h2 className="text-sm m-0">{post.title}</h2>
          </Link>
          {post.description && <p className="text-sm m-0">{post.description}</p>}
        </article>
      ))}
    </div>
  )
}