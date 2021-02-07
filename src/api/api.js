import * as axios from "axios";
import { useState, useEffect } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    getPosts();
  }, []);
  return {
    posts,
    isLoading,
    isError,
  };
};

// export const useAddPost = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const postPost = async () => {
//       setIsLoading(true);
//       fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//           title: "foo",
//           body: "bar",
//           userId: 1,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then((results) => {
//           setData(results);
//           setIsLoading(false);
//           setIsError(false);
//         })
//         .catch(() => {
//           setIsLoading(false);
//           setIsError(true);
//         });
//     };
//     postPost();
//   }, []);
//   return {
//     data,
//     isLoading,
//     isError,
//   };
// };
