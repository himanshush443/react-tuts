import React from 'react';
import { ACTIONS } from './App';

export default function Todo({ todo, dispatch }) {
  return (
    <div style={{ backgroundColor: todo.complete ? 'red' : 'green' }}>
      <span>{todo.name}</span>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        delete
      </button>
    </div>
  );
}
