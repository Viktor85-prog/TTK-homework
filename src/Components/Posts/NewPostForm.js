import classes from "./Posts.module.css";
import userphoto from "../../assets/images/bat.jpg";
import { useState, useEffect } from "react";

const NewPostForm = () => {
  const useAddPost = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const postPost = async () => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((results) => {
            setData(results);
            setIsLoading(false);
            setIsError(false);
          })
          .catch(() => {
            setIsLoading(false);
            setIsError(true);
          });
      };
      postPost();
    }, []);
    return {
      data,
      isLoading,
      isError,
    };
  };
  let userId = 555;
  let id = 11;
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.user}>
          <div>
            userId: {userId} id: {id}
          </div>
          <div>
            <img src={userphoto} className={classes.userphoto} />
          </div>

          <div>
            <textarea placeholder="новый пост"></textarea>
          </div>
          <button onClick={useAddPost}>Запостить</button>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
