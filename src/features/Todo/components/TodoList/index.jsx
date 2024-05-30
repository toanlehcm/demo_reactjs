/* eslint-disable no-use-before-define */
import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import classname from "classname";
import "./style.scss";

const TodoList = ({ todoList, onTodoClick }) => {
  const handleTodoList = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classname({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoList(todo, idx)}
        >
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

export default TodoList;
