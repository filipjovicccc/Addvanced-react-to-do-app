import react from "react"
import { trashTodos, setTrashTodos } from "../helpers/deleteTrash";


function TrashTodo(trashTodos, setTrashTodos, text){
 
console.log(trashTodos, setTrashTodos)
         return(
            <div className= "todo"> 
                 <button className="trash-btn">
                         <i  className="fas fa-trash"></i>
     
                         </button>
                      <li > {text}</li>
                     <button   className="complete-btn">
                         <i className="fas fa-arrow-right"></i>
                         </button>
                    
                  </div>
         );
     

}

export default TrashTodo