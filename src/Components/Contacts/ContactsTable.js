export const ContactsTable = ({ data }) => {
  return (
    <div>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Adress</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        {data.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>
              {data.address.city} {data.address.street}
            </td>
            <td>{data.phone}</td>
            <td>{data.website}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
