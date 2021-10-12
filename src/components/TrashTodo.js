import react from "react"
import { trashContext } from "./helpers/Context";
import { useContext } from "react";

function TrashTodo(todo,  id, ){

   const {trashTodos, setTrashTodos} = useContext(trashContext) 
   // const example = trashTodos.map((ex) => ex.id)
  
   // const secondExample = [{id: example}]
   // const obj = Object.assign({}, secondExample)
  

   const deleteRamp= () => {
      
       var newList = trashTodos
       console.log(newList)
       newList.splice(0, 1)
       setTrashTodos([...newList])
      
     
        }
   
       return(
            <div className= "todo"> 
                         <li >{todo.text}</li>
                         <button onClick={() => deleteRamp()} className="trash-btn">
                         <i  className="fas fa-trash"></i>
     
                         </button>
                  </div>
         );
     

}

export default TrashTodo