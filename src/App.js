import Home from "./components/pages/Home";
import Trash from "./components/pages/Trash"
import Navbar from "./components/Navbar";
import { useState } from "react";
import { message } from "./components/helpers/Context";
import { trashContext, inputContext } from "./components/helpers/Context";

// import { trashContext } from "./components/helpers/Context";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  const [trashTodos, setTrashTodos] = useState([])
  const [inputText, setInputText] = useState("")
  return(
   <inputContext.Provider value={{inputText, setInputText}}>
    <trashContext.Provider value={{ trashTodos, setTrashTodos}}>
     <Router>
     <Navbar />
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/trash" exact component={Trash}/>
       </Switch>


     </Router>
     </trashContext.Provider >
     </inputContext.Provider>
 
  )
 
}

export default App;
