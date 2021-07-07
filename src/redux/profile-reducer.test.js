import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";


const initialState = {

    postsData: [
        { message: ' ja est props ', likeCounter: ' 0 likes ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQmsW7RCW6p-Vq7joKc29Jhr9zSL650nJ2g&usqp=CAU', id: 1 },
        { message: ' My second post ', likeCounter: ' 100 likes ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQmsW7RCW6p-Vq7joKc29Jhr9zSL650nJ2g&usqp=CAU', id: 2 }
    ]

};



it ('length postsData array should be increased', ()=>{
   let action = addPostActionCreator('third message');
   let newState = profileReducer(initialState, action)


expect(newState.postsData.length).toBe(3);
})


it ('length postsData array should be decreases', ()=>{
    let action = deletePostActionCreator(2);
    let newState = profileReducer(initialState, action)
 
 
 expect(newState.postsData.length).toBe(1);
 })
 
 
 