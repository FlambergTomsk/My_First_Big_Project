import { createSelector } from "reselect";



export const getUsersArray = (state)=>{
  return state.userPage.users
};


export const superUsersSelector = createSelector (getUsersArray,
  (users)=>{
    return users.filter(u=>true)
  }
  )


export const getTotalCountNumber = (state)=>{
  return state.userPage.totalCount
};

export const getCurrentPage = (state)=>{
  return state.userPage.currentPage
};

export const getPageSize = (state)=>{
  return state.userPage.pageSize
};

export const getLoading = (state)=>{
  return state.userPage.loading
};

export const getButtonBlockArray = (state)=>{
  return state.userPage.buttonBlockArray
}
