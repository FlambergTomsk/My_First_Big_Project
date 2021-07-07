import { Redirect } from 'react-router';
import Preloader from '../Common/Preloader';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




function Profile (props){ 
if (!props.profile){
  return <Preloader/>
}
return (
    <div className = {s.content}>
  <ProfileInfo
  profile = {props.profile}
  status = {props.status}
  updateStatus = {props.updateStatus}
    />
  <MyPostsContainer/>
</div>    
  )
}
export default Profile;