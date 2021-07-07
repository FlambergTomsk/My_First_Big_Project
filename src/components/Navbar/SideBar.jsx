import s from './SideBar.module.css';


const SideBar = (props)=> {
  return (
    <div className={s.friends}>
          <img src={props.image} />
        <div>
          {props.name}
        </div>
    </div>

  )
}
export default SideBar;