import './Nav.css';
import SearchBar from './searchbar/Searchbar'; 
import { Link } from 'react-router-dom';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css'; 
import ProfileMore from './userprofile/ProfileMore';
function Nav() {
    return (
        <nav>
        <SearchBar/>
        <p className={"InteractTitle"}>Interact</p>
        <Tooltip title="Open Editor" position="bottom" > <Link to="editor" ><i class="bi bi-file-earmark-richtext"></i></Link> </Tooltip>
        <Tooltip html={<ProfileMore/>} interactive="true" position="bottom" trigger='click' > <span className={"user-profile"} id="profile-more-btn" ></span> </Tooltip>
        
        </nav>
    );
  }
  
  export default Nav;
