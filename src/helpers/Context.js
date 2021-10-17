import { createContext } from "react";

export const trashContext = createContext({
  trashTodos: [],
  setTrashTodos: () => {},
});

export const todoContext = createContext({
  todos: [],
  setTodos: () => {},
});
