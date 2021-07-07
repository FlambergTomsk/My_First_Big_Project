import s from './Navbar.module.css';
import { NavLink} from 'react-router-dom';

import SideBar from './SideBar'


function Navbar (props){ 
//  let navElements = props.sideBar.friends.map(friend => <SideBar name={friend.name} image={friend.image} />)
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' activeClassName = {s.active}>Profile</NavLink>
      </div>
      <div>
        < NavLink to='/dialogs' activeClassName = {s.active}>Messages</NavLink>
      </div>
      <div>
        < NavLink to='/users' activeClassName = {s.active}>Users</NavLink>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Setting</a>
      </div>
      <p>
        {/* {navElements} */}
      </p>
    </nav>)
}
export default Navbar;