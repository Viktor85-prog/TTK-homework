import { useState, useEffect } from "react";

export const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      // try {
      //   const response = await fetch(
      //     "https://jsonplaceholder.typicode.com/users"
      //   );
      //   const { results } = await response.json();
      //   setContacts(results);
      //   setIsError(false);
      //   debugger;
      // } catch (e) {
      //   setIsError(true);
      // } finally {
      //   setIsLoading(false);
      // }
      fetch("https://jsonplaceholder.typicode.com/users")
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
    getContacts();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};
