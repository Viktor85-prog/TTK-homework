import * as axios from "axios";
import { usePosts } from "../../api/api";
import PostsTable from "./PostsTable";

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
      <PostsTable data={posts.posts.data} />
    </div>
  );
};

export default Posts;
