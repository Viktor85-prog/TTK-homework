const PostsTable = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table border="1">
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>tittle</th>
          <th>body</th>
        </tr>

        {data.map((data) => (
          <tr>
            <td>{data.userId}</td>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PostsTable;
