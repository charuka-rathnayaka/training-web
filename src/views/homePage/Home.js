/* eslint-disable*/
// import logo from './logo.svg';
// import './App.css';
import DiaryCard from './components/DiaryCard/DiaryCard.js';
import DiaryCardForm from './components/DiaryCardForm/DiaryCardForm.js';
import PrimarySearchAppBar from './components/TopBar/TopBar.js';
import React, {useEffect} from 'react';
import 'firebase/firestore';
import { getCardData } from './action.js'
import {useSelector, useDispatch} from 'react-redux';



const Home=(state)=>{
  const dispatch=useDispatch();
  const diaryData = useSelector(state => state.diaryData);
  useEffect(()=>{
    dispatch(getCardData())
  });

  const diaryCards= diaryData.map((product)=>{
    return (
      <DiaryCard Title={product.Title} Description={product.Description} key={product.id} Author={product.Author} />
    );
  });
  return (
    <div className="Home">
      <PrimarySearchAppBar/>
      <div>
        <DiaryCardForm/>
      </div>
      {diaryCards}
    </div>
  );
};



export default Home;
