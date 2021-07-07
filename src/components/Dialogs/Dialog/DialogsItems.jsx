import s from './DialogsItems.module.css';
import { NavLink } from 'react-router-dom';




const DialogsItems = (props) => {
  return (
    <div>
      <NavLink to={'/dialogs/' + props.id} className={s.dialog} activeClassName={s.active}> <span ><img src = {props.image} className = {s.image}/></span>{props.name}</NavLink>
    </div>
  )
}





export default DialogsItems;