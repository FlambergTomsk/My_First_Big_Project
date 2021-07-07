import s from './ProfileInfo.module.css';




function ProfileInfo (){ 
return (
  <div className = {s.content}>
  <img src = 'https://cepia.ru/images/u/pages/3439/6.jpg'></img>
  <div>
    ava + description
  </div>
</div>    
  )
}
export default ProfileInfo;