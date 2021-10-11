import TrashTodo from "../TrashTodo"
import { useContext } from "react"
import { trashContext } from "../helpers/Context"


function Trash( ){

    const {trashTodos, setTrashTodos} = useContext(trashContext) //TRASTODOS NE RADI
    // const {inputText, setInputText} = useContext(inputContext);

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
                  {trashTodos.map(todo => (    //TRASH TODOS NE RADI
                      <TrashTodo
                       trashTodos={trashTodos}
                       setTrashTodos={setTrashTodos}
                       todo={todo}
                       key={todo.id}
                       todo={todo}
                       text={todo.text} 
                    //    setInputText={setInputText}
                    //    inputText={inputText}
                 />
                    
                       ))}
                  </ul>
           </div>
 

     

        
   


</div>
</div>

</div>
)
}

export default Trash