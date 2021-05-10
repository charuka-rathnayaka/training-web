/* eslint-disable*/
export const addCardData=(cardDetails)=>{
    return {
     type: 'ADD_SAGA_CARD',
     payload:cardDetails
     }
 }
 
 export const getCardData=()=>{
     //console.log("In action.js");
     
     return {
         type: 'GET_SAGA_DATA',
     }
 }