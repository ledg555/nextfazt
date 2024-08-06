import PostCard from "@/components/PostCard";
import Posts from "../page.jsx";
import { Suspense } from "react";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
}

async function Page({params}) {
  const post = await getPost(params.myParam);
  return (<>
    <PostCard post = {post}/>
    <hr />
    <h3>Puede que también te interese...</h3>
    <Suspense fallback={<p>😛</p>}>
    <Posts/>
    </Suspense>
    </>
  )
}

export default Page