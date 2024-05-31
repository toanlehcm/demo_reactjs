import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const DetailPage = (props) => {
  const { todoId } = useParams();
  return <div>Detail Page for Todo ID: {todoId}</div>;
};

DetailPage.propTypes = {};

export default DetailPage;
