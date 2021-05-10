/* eslint-disable*/
const InitialState={
  diaryData: [],
  nickname: '',
};

const reducer=(state=InitialState, action)=>{
  const newState={...state};
  if (action.type==='Get Data') {
    newState.diaryData=action.payload;
  }
  if (action.type==='Nickname Changed') {
    newState.nickname=action.payload;
  }
  //console.log('new State', newState);
  
 
  return newState;
};

export default reducer;
