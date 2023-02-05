import React, { useState } from 'react';
import './body.css';
const Body = () => {
  // usestate storing an object
  const [yoiDetails, setYoiDetails] = useState({
    name: 'yoi',
    address: 'Nagatsuta',
    work: 'teacher',
  });
  const [inputValue, setInputValue] = useState('');
  // array of todos;
  const [todos, setTodos] = useState([]);

  const submitInput = () => {
    if (inputValue) {
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        task: inputValue,
        dateId: new Date(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue('');
    }
  };

  const changeDetails = () => {
    setYoiDetails({
      ...yoiDetails,
      name: 'Rumon',
    });
  };

  //mini content
  const bodyHeader = () => {
    return (
      <div>
        These are the details of Yoi Thokchom:
        {yoiDetails.name}
        {yoiDetails.address}
        <button onClick={changeDetails}>Change Yoi details</button>
      </div>
    );
  };

  // delete task
  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // select task
  const selectTask = (id) => {
    const newTodos = [...todos].map((singleTodo) =>
      singleTodo.id === id
        ? {
            ...singleTodo,
            completed: !singleTodo.completed,
          }
        : singleTodo
    );
    setTodos(newTodos);
  };

  // main content
  return (
    <div className="body-container">
      This is Body component: {bodyHeader()}
      <div className="input container">
        <input
          placeholder="Enter a Task Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={submitInput}>Submit Input</button>
      </div>
      <div
        className="task-container"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {todos.length > 0 &&
          todos.map((singleTodo, index) => {
            return (
              <div
                key={index}
                className={singleTodo.completed ? 'selected' : 'not-selected'}
                style={{
                  display: 'flex',
                  cursor: 'pointer',
                  border: '2px solid black',
                  padding: '10px',
                  margin: '10px',
                }}
              >
                <button onClick={() => deleteTask(singleTodo.id)}>
                  delete task
                </button>
                <button onClick={() => selectTask(singleTodo.id)}>
                  selectTask
                </button>
                <span>{singleTodo.task}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
