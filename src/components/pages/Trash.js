import TrashTodo from "../TrashTodo"

function Trash(trashTodos, setTrashTodos,setInputText ){
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
                  {/* {trashTodos.map(todo => (
                      <TrashTodo
                       trashTodos={trashTodos}
                       setTrashTodos={setTrashTodos}
                       todo={todo}
                       key={todo.id}
                       todo={todo}
                       text={todo.text} 
                       setInputText={setInputText}
                 />
                    
                       ))} */}
                  </ul>
           </div>
 

     

        
   


</div>
</div>

</div>
)
}

export default Trash