import { useState, useEffect } from "react";
import { useAlbums } from "./useAlbums";
import classes from "./Albums.module.css";
import { NavLink } from "react-router-dom";

const Albums = () => {
  const albums = useAlbums();
  if (albums.isLoading) {
    return <div>...loading</div>;
  }
  if (albums.isError) {
    return <div>...error</div>;
  }
  let data = albums.data;
  return (
    <div>
      <h2>ALBUMS</h2>
      <div className={classes.list}>
        {data.map((data) => (
          <ol>
            <li>
              <NavLink
                albumId={data.id}
                to={"/Album/" + data.id}
                activeClassName="selected"
                className={classes.singlelist}
              >
                {data.id}. {data.title}
              </NavLink>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Albums;
