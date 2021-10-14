import { createContext } from "react";

export const trashContext = createContext({
  trashTodos: [],
  setTrashTodos: () => {},

  deleteHandler: () => {},
});

export const todoContext = createContext ({
  todos: [],
  setTodos: () => {}
})
