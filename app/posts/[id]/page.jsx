import { createClient } from "@/utils/supabase/server";
import "./postdetail.css"
export default async function PostDetail({ params }) {
  const id = Number(params.id);
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  let { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq("id", id)

  console.log(posts + "asdasd");



  let { data: comments } = await supabase
    .from('comments')
    .select('*')

  let { data: commentsid } = await supabase
    .from('comments')
    .select('*')
    .eq("post_id", id)
  console.log(commentsid + "  asd12312312");


  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <div className="postItem">
            <h4> <span>{user?.email[0]}</span> {user?.email}</h4>
            <h1>{x.title}</h1>
            <p>{x.content}</p>
          </div>
        )) : ""
      }

    </div>
  )
}
