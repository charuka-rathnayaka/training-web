//import logo from './logo.svg';
//import './App.css';
import DiaryCard from '../components/DiaryCard/DiaryCard.js';
import DiaryCardForm from '../components/DiaryCardForm/DiaryCardForm.js';
import PrimarySearchAppBar from '../components/TopBar/TopBar.js';
import React,{Component,useState,useEffect} from 'react';
import firebase from '../config.js';
import 'firebase/firestore';
import {connect} from 'react-redux';
import mapDispatchtoProps from '../store/Action.js';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.ref=firebase.firestore().collection('Diaries');
    this.unSubscribe=null;
  }
      componentDidMount(){
        this.unSubscribe=this.ref.onSnapshot(this.onCollectionUpdate);
        
      }
      
      onCollectionUpdate=(querySnapshot)=>{
        const diary_data=[];
        querySnapshot.forEach((doc)=>{
          const {Title,Author,Description}=doc.data();
          //console.log("doc",doc.data())
          diary_data.push({
            key:doc.id,
            Title,
            Author,
            Description
          });

        });
        return this.props.GetData(diary_data);
           
      }
       

      render(){
      
        const diaryCards= this.props.diary_data.map((product)=>{
          //console.log("from redux",this.props.diary_data);
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
}

const mapStatetoProps=state=>{
  return{
    diary_data:state.diary_data
}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Home);
