import { useState, useEffect } from "react";

export const useAlbum = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAlbum = async () => {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/photos")
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
    getAlbum();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};
