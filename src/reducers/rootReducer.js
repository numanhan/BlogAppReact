const initState= {

     posts: [ 
        {id:'1', title:'fuckin', body:'lorem ipsum fuckin fuck '},
        {id:'2', title:'fuck', body:'lorem ipsum fuckin fuck '},
        {id:'3', title:'fuckingfuck', body:'lorem ipsum fuckin fuck '},
    ]
};


const rootReducer = (state=initState,action) => {
   // console.log(action);
        if(action.type==='DELETE_POST'){
            let newPosts=state.posts.filter(post=>{
                return post.id!==action.id
            });
            return {
                ...state,
                posts:newPosts

            }
        }
    return state;
}



export default rootReducer;