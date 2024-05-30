import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

const TodoFeature = (props) => {
  const todoList = [
    {
      id: 1,
      title: "eat",
    },
    {
      id: 2,
      title: "sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];

  return <TodoList todoList={todoList} />;
};

TodoFeature.propTypes = {};

export default TodoFeature;
