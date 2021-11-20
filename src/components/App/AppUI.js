import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import './App.css';

function AppUI(){

  const {error,loading, searchedTodos, onComplete, onRemoved} = React.useContext(TodoContext);

  return(
      <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {error && <p>Error</p>}
      {loading && <p>Está cargando...</p>}
      {(!loading && !searchedTodos.length && !error) && <p>Crea tu primer Todo</p>}
      {searchedTodos.map(todos => (
        <TodoItem 
          key={todos.text}
          text={todos.text}
          completed={todos.completed}
          onComplete={() => onComplete(todos.text)}
          onRemoved={() => onRemoved(todos.text)}
        />
      ))}
    </TodoList>
      <CreateTodoButton /> 
    </React.Fragment> 
  ); 
} 
 
export{ AppUI };