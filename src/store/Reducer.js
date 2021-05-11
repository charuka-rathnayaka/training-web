
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
  return newState;
};

export default reducer;
