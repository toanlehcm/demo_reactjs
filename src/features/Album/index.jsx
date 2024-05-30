import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

const AlbumFeature = (props) => {
  const DataAlbumList = [
    {
      id: 1,
      title: "V-Pop Hay Nhất Thập Niên 2010s",
      thumbnailURL: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/c/5/8/bc58f24cc102659381ab2f4638bb594d.jpg",
    },
    {
      id: 2,
      title: "đã từng xem nhau là tất cả",
      thumbnailURL: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/5/9/7e59ac229ab9e0435327cae2a1c15fba.jpg",
    },
    {
      id: 3,
      title: "Ballad Việt Ngày Nay",
      thumbnailURL: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/2/4/4/0244500201c883b4252eb5300f77e091.jpg",
    },
  ];

  return <AlbumList albumList={DataAlbumList} />;
};

AlbumFeature.propTypes = {};

export default AlbumFeature;
