import * as axios from "axios";
import { useState, useEffect } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // debugger;
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
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

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: "https://jsonplaceholder.typicode.com/posts",
// });

// export const postsAPI = {
//   getUsers(currentPage = 1, pageSize = 10) {
//     return instance
//       .get(`users?page=${currentPage}&count=${pageSize}`)
//       .then((response) => {
//         return response.data;
//       });
//   },

// follow(userId) {
//   return instance.post(`follow/${userId}`);
// },

// unFollow(userId) {
//   return instance.delete(`follow/${userId}`);
// },

// getUserProfile(userId) {
//   console.warn("старый метод");
//   return profileAPI.getUserProfile(userId);
// },
// };
