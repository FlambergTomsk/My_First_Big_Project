import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getStatus, profileGetThunkCreator, updateStatus} from '../../redux/profile-reducer';
import React from 'react';
import { withRouter } from 'react-router';
import { profileAPI } from '../../api/api';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component{ 


  componentDidMount (){
    let userId = this.props.match.params.userId;
    if (!userId) {userId =this.props.authorizedUserId
      if (!userId){ this.props.history.push('/login')
    }
};
    this.props.profileGet(userId);
    this.props.getStatus(userId);
  }    






render () {
  return(
    
 <Profile {...this.props}
 profile = {this.props.profile}/>)
 }
}


let mapStateToProps  = (state) => {

  return {
   profile: state.profilePage.profile,
   isAuth: state.auth.isAuth,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id

  };
}



// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);


// let dataFromURL = withRouter(AuthRedirectComponent);

// export default connect (mapStateToProps, {profileGet:profileGetThunkCreator})(dataFromURL);


export default compose (
  
connect (mapStateToProps, {profileGet:profileGetThunkCreator, updateStatus, getStatus }),
withRouter,

)
(ProfileContainer)

