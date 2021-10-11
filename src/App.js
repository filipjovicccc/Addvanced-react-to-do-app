import Home from "./components/pages/Home";
import Trash from "./components/pages/Trash"
import Navbar from "./components/Navbar";


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  return(

    <>
     <Router>
     <Navbar />
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/trash" exact component={Trash}/>
       </Switch>


     </Router>
    </>
  )
 
}

export default App;
