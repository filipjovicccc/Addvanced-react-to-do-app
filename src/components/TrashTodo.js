import react from "react"

function TrashTodo(inputText){
 

         return(
            <div className= "todo"> 
                 <button className="trash-btn">
                         <i  className="fas fa-trash"></i>
     
                         </button>
                      <li >{inputText}</li>
                     <button   className="complete-btn">
                         <i className="fas fa-arrow-right"></i>
                         </button>
                    
                  </div>
         );
     

}

export default TrashTodo