/* eslint-disable no-use-before-define */
import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;
