import { useState, useEffect } from "react";

export const useAlbums = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAlbums = async () => {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/albums")
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
    getAlbums();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};
