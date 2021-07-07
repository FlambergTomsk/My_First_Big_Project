import Preloader from '../../Common/Preloader';
import ProfileStatusWithHooks from '../../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';


const ProfileInfo= (props) =>{ 
if (!props.profile){ return <Preloader/>}
return (
  <div className = {s.content}>
  <img src = 'https://cepia.ru/images/u/pages/3439/6.jpg'></img>
  <div>
  <img src = {props.profile.photos.large}/>
  </div>
  <div>
    {props.profile.aboutMe}
  </div>
  <div>
    {props.profile.lookingForAJobDescription}
  </div>
  <div>
    <ProfileStatusWithHooks
      status = {props.status}
      updateStatus = {props.updateStatus}
      />
  </div>
</div>    
  )
}
export default ProfileInfo;