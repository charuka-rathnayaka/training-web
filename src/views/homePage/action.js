
export const addCardData= (cardDetails)=>{
  return {
    type: 'ADD_SAGA_CARD',
    payload: cardDetails,
  };
};

export const getCardData= ()=>{
  return {
    type: 'GET_SAGA_DATA',
  };
};
