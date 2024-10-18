import { createClient } from "@/utils/supabase/server";
import Link from "next/link";


export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  let { data: posts } = await supabase
    .from('posts')
    .select('*')

  console.log(posts);
  
  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <Link key={i} href={"/posts/" + x.id}>
            <div key={i} className="postItem">
              {user?.email}
              <h1>{x.title}</h1>
              <p>{x.content}</p>
            </div></Link>
        )) : ""
      }
    </div>
  )
}
