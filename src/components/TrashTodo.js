import react from "react"

function TrashTodo(){
 

         return(
            <div className= "todo"> 
                 <button className="trash-btn">
                         <i  className="fas fa-trash"></i>
     
                         </button>
                      <li ></li>
                     <button   className="complete-btn">
                         <i className="fas fa-arrow-right"></i>
                         </button>
                    
                  </div>
         );
     

}

export default TrashTodo