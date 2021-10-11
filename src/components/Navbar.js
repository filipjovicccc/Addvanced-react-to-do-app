import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar(){ 

    return (
    <div className="navbar">
      <Link to="/"style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>&nbsp;&nbsp;
      <Link to="/trash"style={{ color: 'inherit', textDecoration: 'inherit'}} >Trash</Link>
    </div>)

}

export default Navbar