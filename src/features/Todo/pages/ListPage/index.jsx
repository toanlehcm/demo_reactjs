import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

const ListPage = (props) => {
  const initTodoList = [
    {
      id: 1,
      title: 'eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'code',
      status: 'new',
    },
  ];

  const location = useLocation(); // Get params after the ?
  const history = useHistory(); // Using for navigate.
  const match = useRouteMatch(); // To get path, similar to nested routing.
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoList = (todo, idx) => {
    // Clone current array to the new one.
    const newTodoList = [...todoList];

    // Toggle state.
    newTodoList[idx] = {
      ...newTodoList[idx], // Get current object.
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    // Update toggle.
    setTodoList(newTodoList);
  };

  const showAll = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const showComplete = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const showNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  // Rendered Todo List only change when todo list and filter status change.
  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div>
      <h3>what to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />

      <button onClick={() => showAll()}>Show All</button>
      <button onClick={() => showComplete()}>Show Completed</button>
      <button onClick={() => showNew()}>Show New</button>
    </div>
  );
};

ListPage.propTypes = {};

export default ListPage;
