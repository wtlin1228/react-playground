import React, { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState(['Buy Milk', 'Write tutorial']);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Add Todo</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <input
              className='form-control'
              data-testid='todo-input'
              placeholder='Enter a task'
              type='text'
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <button
              className='btn btn-primary'
              data-testid='add-task'
              type='submit'
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className='row todo-list'>
        <div className='col-md-6'>
          <h3>Lists</h3>
          <ul data-testid='todos-ul'>
            {todoList.map((item, index) => (
              <li key={index}>
                <div>
                  {item}
                  <button className='btn btn-danger'>X</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
