import PostCard from "@/components/PostCard";

async function getPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-3 m-4 p-16 gap-4">
      {posts.map(post => <PostCard post={post} key={post.id}/>)}
    </div>
  )
}
