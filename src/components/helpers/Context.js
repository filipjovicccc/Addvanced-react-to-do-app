import { createContext,  } from "react";


export const trashContext = createContext({
    trashTodos: [],
     setTrashTodos: () => {} ,
      deleteHandler: () => {},
    //    inputText: (""),
    //    setInputText: () => {}


})


