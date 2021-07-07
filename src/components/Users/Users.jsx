import s from './Users.module.css';
import Preloader from '../Common/Preloader';
import React from 'react';
import Paginator from '../../assets/Paginator';
import User from './User';



const Users = ({ totalCount, pageSize, currentPage, onPageChange, follow, unfollow, loading, buttonBlockArray, ...props }) => {

let usersElements = props.users.map(user => 
<User
 key={user.id}
 user = {user}
 follow = {follow}
 unfollow = {unfollow}
 buttonBlockArray = {buttonBlockArray}
 />)
  return (<div>
    <div>
      <Paginator
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
    <div> {loading ?
      <Preloader />
      : null

    }</div>

    {usersElements}
  </div>)
}


export default Users;