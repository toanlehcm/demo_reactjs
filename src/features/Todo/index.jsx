import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "../../components/NotFound";

const TodoFeature = (props) => {
  return (
    <div>
      Todo share UI
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

TodoFeature.propTypes = {};

export default TodoFeature;
