import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      {allPosts.map((post) => (
        <article key={post._id} className="">
          <Link href={post.slug} className="">
            <h2 className="">{post.title}</h2>
          </Link>
          {post.description && <p className="">{post.description}</p>}
        </article>
      ))}
    </div>
  )
}