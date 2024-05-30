import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  return <span>{todo.title}</span>;
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
