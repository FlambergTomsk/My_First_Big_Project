

import React, { Component, useEffect, useState } from 'react';
// import { changePage } from '../../redux/user-reducer';

const ProfileStatusWithHooks = (props)=> {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status);}, [props.status])


  const activateEditMode=()=>{
    setEditMode(true);
  }

  const deactivateEditMode=()=>{
    setEditMode(false);
    props.updateStatus(status);

  }

  const onStatusChange = (e)=>{
    setStatus(e.currentTarget.value)
  }
      return <div>
          <div>
            {!editMode&&
          <span onDoubleClick={activateEditMode}>{props.status?props.status:'Нет статуса'}</span>}
          </div>
        <div>
        {editMode&&
          <input onBlur={deactivateEditMode} onChange = {onStatusChange} autoFocus value ={status}  />}
        </div>
      </div>
    }
  

export default ProfileStatusWithHooks;