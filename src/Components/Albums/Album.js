import { useState, useEffect } from "react";
import { useAlbum } from "./useAlbum";
import classes from "./Albums.module.css";

const Album = () => {
  const album = useAlbum();
  if (album.isLoading) {
    return <div>...loading</div>;
  }
  if (album.isError) {
    return <div>...error</div>;
  }
  let albumId = window.location.pathname.split("/")[2];
  let data = album.data.filter((el) => el.albumId == albumId);

  return (
    <div>
      <h2>ALBUM № {albumId}</h2>
      <div className={classes.list}>
        {data.map((data) => (
          <div className={classes.pictureWithName}>
            <figure className={classes.sign}>
              <img
                alt="картинка"
                src={data.thumbnailUrl}
                className={classes.picture}
              />
              <figcaption className={classes.signfig}>
                {data.id}. {data.title}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
