import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

const TodoFeature = (props) => {
  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "new",
    },
    {
      id: 2,
      title: "sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoList = (todo, idx) => {
    // Clone current array to the new one.
    const newTodoList = [...todoList];

    // Toggle stat.
    newTodoList[idx] = {
      ...newTodoList[idx], // Get current object.
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // Update toggle.
    setTodoList(newTodoList);
  };

  return <TodoList todoList={todoList} onTodoClick={handleTodoList} />;
};

TodoFeature.propTypes = {};

export default TodoFeature;
