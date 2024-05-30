import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";
import "./style.scss";

const AlbumList = ({ albumList }) => {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
};

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

AlbumList.defaultProp = {
  albumList: [],
};

export default AlbumList;
