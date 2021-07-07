import s from './Users.module.css';
import usersAva from '../../assets/images.png';
import { NavLink } from 'react-router-dom';
import React from 'react';



const UserWithoutMemo =  ({user, unfollow, follow, buttonBlockArray}) => {
 
  return <div>
    <div>{user.name}</div>
    <div>{user.status}</div>
    <div>{'user.location.city'}</div>
    <div>{'user.location.country'}</div>
    <div>
      < NavLink to={`/profile/${user.id}`} activeClassName={s.active}>
        <img src={user.photos.small != null ? user.photos.small : usersAva} className={s.img} />
      </NavLink>
    </div>
    <div>
      {user.followed
        ? <button disabled={buttonBlockArray.some(id => id === user.id)}
          onClick={() => {
            unfollow(user.id)
          }}
        >Unfollow</button>
        : <button disabled={buttonBlockArray.some(id => id === user.id)}
          onClick={() => {
            follow(user.id)
          }}>Follow</button>
      }
    </div>
  </div>
}

const User = React.memo(UserWithoutMemo);
export default User;