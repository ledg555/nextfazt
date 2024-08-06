"use client"

import Link from "next/link";

export default function PostCard({post}) {
  return (
    <div className="bg-sky-600 p-8">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">{post.title}</h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert(`Soy el post número ${post.id}!`)}>
        Info
      </button>
    </div>
  );
}