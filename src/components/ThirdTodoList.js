import React from "react"
import ThirdTodo from "./ThirdTodo";

const ThirdTodoList = ({ thirdTodos, setThirdTodos, todos }) => {
 
      return(
        <div className="todo-container" >
            <ul className="todo-list">
                {thirdTodos.map(todo => (
                    <ThirdTodo
                     thirdTodos={thirdTodos}
                     setThirdTodos={setThirdTodos}
                     key={todo.id}
                     todo={todo}
                     text={todo.text} 
                     todos={todos}
                     
                      />
                  
                      ))}
     
             </ul>
            
    </div>
    )
};

export default ThirdTodoList