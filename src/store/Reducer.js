const InitialState={
    diary_data:[],
    nickname:''
};

const reducer=(state=InitialState,action)=>{
    const newState={...state};
    if(action.type==="Get Data"){
        newState.diary_data=action.payload;
    }
    if(action.type==='Nickname Changed'){
        newState.nickname=action.payload;
    }
    console.log("new State",newState);
    return newState;
}

export default reducer;