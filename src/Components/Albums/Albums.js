import { useState, useEffect } from "react";
import { useAlbums } from "./useAlbums";
import classes from "./Albums.module.css";

const Albums = () => {
  const albums = useAlbums();
  if (albums.isLoading) {
    return <div>...loading</div>;
  }
  if (albums.isError) {
    return <div>...error</div>;
  }
  // console.log(albums);
  let data = albums.data;
  return (
    <div>
      <h2>ALBUMS</h2>
      <div className={classes.list}>
        {data.map((data) => (
          <ol>
            <li>
              <a href="#" className={classes.singlelist}>
                {data.title}
              </a>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Albums;
