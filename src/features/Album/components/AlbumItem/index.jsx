import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const AlbumItem = ({ album }) => {
  return (
    <div className="album">
      <div className="album_thumbnail">
        <img src={album.thumbnailURL} alt={album.title} />
      </div>

      <p className="album_title">{album.title}</p>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.object,
};

AlbumItem.defaultProp = {
  album: {},
};

export default AlbumItem;
