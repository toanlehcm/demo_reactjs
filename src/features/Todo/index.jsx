import React, { useState } from "react";
import PropTypes from "prop-types";
import { Routes, Route, NavLink, Navigate, useMatch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

const TodoFeature = (props) => {
  return (
    <div>
      Todo share UI
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

TodoFeature.propTypes = {};

export default TodoFeature;
