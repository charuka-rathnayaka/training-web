const InitialState={
    DiaryTitleClicked:false,
    diary_title:'',
    diary_desc:'',
    diary_data:[],
    nickname:''
};

const reducer=(state=InitialState,action)=>{
    const newState={...state};
    //console.log("reducer works");
    if(action.type==='Title Clicked'){
        newState.DiaryTitleClicked=true;
    }
    if(action.type==='Title Changed'){
        newState.diary_title=action.payload;
    }
    if(action.type==='Desc Changed'){
        newState.diary_desc=action.payload;
    }
    if(action.type==='Empty Form'){
        console.log('Empty form called');
        newState.diary_title="";
        newState.diary_desc="";
        newState.DiaryTitleClicked=false;
    }
    if(action.type==="Get Data"){
        newState.diary_data=action.payload;
    }
    if(action.type==='Nickname Changed'){
        newState.nickname=action.payload;
    }
    /*if(action.type==="Submit Nickname"){
        newState.nickname=action.payload;
    }*/
    console.log("new State",newState);
    return newState;
}

export default reducer;