import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";

const ListPage = (props) => {
  console.log("1");
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
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoList = (todo, idx) => {
    // Clone current array to the new one.
    const newTodoList = [...todoList];

    // Toggle state.
    newTodoList[idx] = {
      ...newTodoList[idx], // Get current object.
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // Update toggle.
    setTodoList(newTodoList);
  };

  const showAll = () => {
    setFilterStatus("all");
  };

  const showComplete = () => {
    setFilterStatus("completed");
  };

  const showNew = () => {
    setFilterStatus("new");
  };

  const renderedTodoList = todoList.filter((todo) => filterStatus === "all" || filterStatus === todo.status);

  return (
    <>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />

      <button onClick={() => showAll()}>Show All</button>
      <button onClick={() => showComplete()}>Show Completed</button>
      <button onClick={() => showNew()}>Show New</button>
    </>
  );
};

ListPage.propTypes = {};

export default ListPage;
