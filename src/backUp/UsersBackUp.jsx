import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import usersAva from '../../assets/images.png';
import { getTotalCountAC } from '../../redux/user-reducer';



class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').
      then(response => {
        this.props.setUsers(response.data.items);
    
        this.props.getTotalCount(response.data.totalCount);

        console.log(response.data.totalCount);

      }
      );
  }

  onPageChange = (page)=>{
    this.props.changePage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`).
    then(response => {
      this.props.setUsers(response.data.items);
    }
    );

}

  render() {




    let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

    let usersElements = this.props.users.map(user => <div key={user.id}>

      <div>{user.name}</div>
      <div>{user.status}</div>
      <div>{'user.location.city'}</div>
      <div>{'user.location.country'}</div>
      <div><img src={user.photos.small != null ? user.photos.small : usersAva} className={s.img} /></div>
      <div>
        {user.followed
          ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
          : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
        }
      </div>
    </div>)


    return (<div>
      <div>
        {pages.map(page => {
          return <span className={this.props.currentPage === page && s.selected}
          onClick = {()=>{this.onPageChange(page)}}      
          >{page}</span>
        })}
      </div>
      {usersElements}
    </div>)
  }
}
export default Users;