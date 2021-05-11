export const nicknameChanged = (nick) => ({
  type: 'Nickname Changed',
  payload: nick,
});

export const GetData = (diaryData) => ({
  type: 'Get Data',
  payload: diaryData,
});
