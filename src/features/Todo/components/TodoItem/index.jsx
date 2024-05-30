import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  return <li key={todo.id}>{todo.title}</li>;
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;
