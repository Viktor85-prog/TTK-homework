// import * as axios from "axios";
import { usePosts, useAddPost } from "../../api/api";
import PostsTable from "./PostsTable";
import NewPostForm from "./NewPostForm";

const Posts = () => {
  const posts = usePosts();
  if (posts.isLoading) {
    return <div>...loading</div>;
  }
  if (posts.isError) {
    return <div>...error</div>;
  }
  return (
    <div>
      <NewPostForm />
      <PostsTable data={posts.posts.data} />
    </div>
  );
};

export default Posts;
