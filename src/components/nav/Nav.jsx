import './Nav.css';
import SearchBar from './searchbar/Searchbar'; 
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
        <SearchBar/>
        <p className={"InteractTitle"}>Interact</p>
        <Link to="editor" ><i class="bi bi-file-earmark-richtext"></i></Link>
        <span className={"user-profile"} ></span>
        
        </nav>
    );
  }
  
  export default Nav;
