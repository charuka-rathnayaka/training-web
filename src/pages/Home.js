/* eslint-disable*/
// import logo from './logo.svg';
// import './App.css';
import DiaryCard from '../components/DiaryCard/DiaryCard.js';
import DiaryCardForm from '../components/DiaryCardForm/DiaryCardForm.js';
import PrimarySearchAppBar from '../components/TopBar/TopBar.js';
import React, {useEffect} from 'react';
import firebase from '../config.js';
import 'firebase/firestore';
import {connect,useSelector, useDispatch} from 'react-redux';
import {GetData} from '../store/Action.js';
// import mapDispatchtoProps from '../store/Action.js';

const Home=(state)=>{
  const dispatch=useDispatch();
  const diaryData = useSelector(state => state.diaryData);
  useEffect(()=>{
    firebase.firestore().collection('Diaries').onSnapshot(onCollectionUpdate);
  });

  const onCollectionUpdate=(querySnapshot)=>{
    const dataDiary=[];
    querySnapshot.forEach((doc)=>{
      const {Title, Author, Description}=doc.data();
      dataDiary.push({
        key: doc.id,
        Title,
        Author,
        Description,
      });
    });
    return dispatch(GetData(dataDiary));
    // return props.GetData(diary_data);
  };

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
