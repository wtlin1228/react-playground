import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('displays default todo items', () => {
  const { getByTestId } = render(<App />);
  const todoList = getByTestId('todos-ul');
  expect(todoList.children.length).toBe(2);
});

it('allows input', () => {
  const { getByTestId } = render(<App />);
  const todoInput = getByTestId('todo-input');
  const item = 'Learn React';
  todoInput.value = item;
  fireEvent.change(todoInput);
  expect(todoInput.value).toBe(item);
});

it('adds a new todo item', () => {
  const { getByTestId, getByText } = render(<App />);
  const todoInput = getByTestId('todo-input');
  const addTodoButton = getByText('Add Task');
  const todoList = getByTestId('todos-ul');
  const item = 'Learn React';
  todoInput.value = item;
  fireEvent.change(todoInput);
  fireEvent.click(addTodoButton);
  expect(todoList.children.length).toBe(3);
});
