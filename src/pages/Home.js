//import logo from './logo.svg';
//import './App.css';
import DiaryCard from '../components/DiaryCard/DiaryCard.js';
import DiaryCardForm from '../components/DiaryCardForm/DiaryCardForm.js';
import PrimarySearchAppBar from '../components/TopBar/TopBar.js';
import React,{useEffect } from 'react';
import firebase from '../config.js';
import 'firebase/firestore';
import {connect, useDispatch} from 'react-redux';
//import {GetData} from '../store/Action.js';
//import mapDispatchtoProps from '../store/Action.js';

const Home=(state)=>{
  const dispatch=useDispatch();
  
    useEffect(()=>{
        firebase.firestore().collection('Diaries').onSnapshot(onCollectionUpdate);
        
      });
      
      const onCollectionUpdate=(querySnapshot)=>{
        const diary_data=[];
        querySnapshot.forEach((doc)=>{
          const {Title,Author,Description}=doc.data();
          diary_data.push({
            key:doc.id,
            Title,
            Author,
            Description
          });

        });
        return dispatch({type:'Get Data',
        payload:diary_data})
        //return props.GetData(diary_data);
           
      }

        const diaryCards= state.diary_data.map((product)=>{
          return(
            <DiaryCard Title={product.Title} Description={product.Description} key={product.id} Author={product.Author}  />
          )
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
      
}

const mapStatetoProps=state=>{
  return{
    diary_data:state.diary_data
}
}

export default connect(mapStatetoProps)(Home);
