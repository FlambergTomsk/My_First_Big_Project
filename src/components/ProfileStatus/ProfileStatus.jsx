

import React, { Component } from 'react';
import { changePage } from '../../redux/user-reducer';

class ProfileStatus extends React.Component {
  

  state = {
    editMode: false,
    value: this.props.status
  }

  componentDidUpdate(prevState, prevProps){
    if(prevProps.status!=this.props.status){
      this.setState({
        status:this.props.status
      })
    }
  }


     activateEditMode=() =>{
       this.setState({
       editMode: true
       });
      }

  deactivateEditMode=(event)=> {
    this.setState({
      editMode: false,
      })
      this.props.updateStatus(event.target.value)
  }

  changeStatus = (event)=>{
    this.setState({
      value: event.target.value
    })
  }


    render(){
      return <div>
          <div>
            {!this.state.editMode&&
          <span onDoubleClick={this.activateEditMode}>{this.props.status?this.props.status:'Нет статуса'}</span>}
          </div>
        <div>
        {this.state.editMode&&
          <input onBlur={this.deactivateEditMode} onChange={this.changeStatus} autoFocus value ={this.state.value}  />}
        </div>
      </div>
    }
  
}
export default ProfileStatus;