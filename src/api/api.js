import axios from 'axios';



const instance = axios.create({
  withCredentials: true,
  headers: {'API-KEY': '8bcad2b6-5c16-4e5c-b994-7a4dcc5826f3'},
  baseURL: `https://social-network.samuraijs.com/api/1.0/`
})



export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 3) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    })
}
}


  export const followAPI = {


  followDelete(userId){
    return instance.delete(`follow/${userId}`)
      .then(response=>{
        return response.data;
      })
  },


 followPost(userId){
    return instance.post(`follow/${userId}`)
      .then(response=>{
        return response.data;
      })
  }

  }


  export const profileAPI = {
    profileGet(userId){
      return instance.get(`profile/${userId}`)
        .then(response =>{
          return response.data
        })
      },

    getStatus (userId){
      return instance.get(`profile/status/${userId}`)
      .then(response =>{
        return response.data
      })
    },

    updateStatus(status){
      return instance.put(`profile/status`, {status})
      .then(response =>{
        return response.data
      })
    }
    
}
    
  
 
  


  export const authAPI = {
    authGet (){
      return instance.get(`auth/me`)
        .then(response=>{
          return response.data
        })
    },

    signIn(email, password, rememberMe){
      return instance.post(`auth/login`,
      {email, password, rememberMe})
        .then (response=>{
            return response.data
        })
    },

    logout(){
      return instance.delete(`auth/login`)
    }

  }