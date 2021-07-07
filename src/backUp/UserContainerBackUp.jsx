import {connect} from "react-redux";
import { changePageAC, followAC, getTotalCountAC, setUsersAC, unfollowAC } from "../../redux/user-reducer";
import Users from "./Users";


let mapStateToProps  = (state) => {

  return {
    users: state.userPage.users,

    totalCount: state.userPage.totalCount,
    currentPage: state.userPage.currentPage,
    pageSize: state.userPage.pageSize

  };
}
  
  let mapDispatchToProps = (dispatch)=>{

  return{

         follow: (userId) => {
            dispatch(followAC(userId));
          },

          unfollow: (userId) => {
            dispatch(unfollowAC(userId));
          },

         setUsers: (users)=>{
           dispatch(setUsersAC(users));
         },

         changePage: (page)=>{
           dispatch(changePageAC(page));
         },

         getTotalCount: (totalCount)=>{
           dispatch(getTotalCountAC(totalCount));
         }
        



        }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

  
  
export default UsersContainer;