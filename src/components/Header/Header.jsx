
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header =(props) =>{ 
      


      return (


<header className = {s.header}> 
      <div className = {s.loginblock}>
       {props.isAuth? <div> <span>{props.login }</span><button onClick={props.logout}>LogOut</button> </div>: <span>< NavLink to='/login' >Login</NavLink> </span>}
       </div>
      <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJW0KUrh-3T2TBQt94N960-yusz__8TjkA&usqp=CAU'/>

     
      </header>)

}





export default Header;