import TrashTodo from "../TrashTodo"
import { useContext } from "react"
import { trashContext, inputContext } from "../helpers/Context"


function Trash( ){

    const {trashTodos, setTrashTodos} = useContext(trashContext) 
    const {inputText, setInputText} = useContext(inputContext); //input text

return(
<div>
    <header>
    <h1> Trash page</h1>
</header>
<div className="wrapper">

<div className="wrap">
    <h1>Trash</h1>
    <hr />
  
    <div className="todo-container" >
              <ul className="todo-list">
                  {trashTodos.map(todo => (   
                      <TrashTodo
                       trashTodos={trashTodos}
                       setTrashTodos={setTrashTodos}
                       todo={todo}
                       key={todo.id}
                       todo={todo}
                       text={todo.text} 
                       setInputText={setInputText}
                       inputText={inputText}
                 />
                    
                       ))}
                       {console.log(inputText)}
                  </ul>
           </div>
 

     

        
   


</div>
</div>

</div>
)
}

export default Trash