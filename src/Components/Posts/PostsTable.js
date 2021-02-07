import classes from "./Posts.module.css";

const PostsTable = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.container}>
      {data.map((data) => (
        <div>
          <div className={classes.user}>
            userId:{data.userId} id: {data.id} title: {data.title}
          </div>
          <div className={classes.text}>{data.body}</div>
        </div>
      ))}
    </div>
  );
};

export default PostsTable;
