import {connect} from "react-redux";
import { changePage, follow, getTotalCount, setUsers, unfollow, isLoading, buttonBlock, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator } from "../../redux/user-reducer";
import Users from "./Users";
import React from 'react';
import { getTotalCountNumber, getUsersArray, getCurrentPage, getPageSize, getLoading, getButtonBlockArray  } from "./UserSelectors";



class UsersContainer extends React.Component {

  componentDidMount() {
    const {pageSize, currentPage} = this.props
    this.props.getUsers(currentPage, pageSize);

  }

  onPageChange = (page)=>{

    this.props.changePage(page);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

render () {
  return(
  <Users 
  onPageChange = {this.onPageChange}
  follow = {this.props.follow}
  unfollow = {this.props.unfollow}
  getTotalCount = {this.props.getTotalCount}
  users = {this.props.users}
  loading = {this.props.loading}
  totalCount= {this.props.totalCount}
  currentPage = {this.props.currentPage}
  pageSize = {this.props.pageSize}
  buttonBlock = {this.props.buttonBlock}
  buttonBlockArray = {this.props.buttonBlockArray}
  

  />)
};
}

let mapStateToProps  = (state) => {

  return {
    users: getUsersArray(state),
    totalCount: getTotalCountNumber(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    loading: getLoading(state),
    buttonBlockArray: getButtonBlockArray(state)

  };
}

export default 
connect(mapStateToProps, {follow, unfollow, changePage, buttonBlock,  getUsers:getUsersThunkCreator, unfollow:unfollowThunkCreator, follow: followThunkCreator})(UsersContainer);

  
  


