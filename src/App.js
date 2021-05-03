import logo from './logo.svg';
import './App.css';
import DiaryCard from './DiaryCard/DiaryCard.js';
import DiaryCardForm from './DiaryCardForm/DiaryCardForm.js';
import PrimarySearchAppBar from './TopBar/TopBar.js';
import React,{Component,useState,useEffect} from 'react';
import firebase from './config.js';
import 'firebase/firestore';
class App extends React.Component{
  constructor(props){
    super(props);
    this.ref=firebase.firestore().collection('Diaries');
    //this.unSubscribe=null;
  }
  state={
    diaries:[],
  diaryArray:[{
    title: "LOKI",
    description:"Loki is an upcoming American television series created by Michael Waldron for the streaming service Disney+, based on the Marvel Comics character of the same name. It is set in the Marvel Cinematic Universe (MCU), sharing continuity with the films of the franchise.",
    author:"James"
    },
    {
      title: "The Falcon",
      description:"The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on the Marvel Comics characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier."
      ,author:"Anderson"
    },
    {
      title: "WandaVision",
      description:"WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on the Marvel Comics characters Wanda Maximoff / Scarlet Witch and Vision."
      ,author:"Roy"
    },
    {
      title: "What/If ",
      description:"What/If ... An anthology series which tackles a different morality tale, and the ripple effect of a single decision that changes the trajectory of an entire life."
      ,author:"Ben"
    }
    ,
    {
      title: "The Falcon",
      description:"The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on the Marvel Comics characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier."
      ,author:"Anderson"
    },
    {
      title: "WandaVision",
      description:"WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on the Marvel Comics characters Wanda Maximoff / Scarlet Witch and Vision."
      ,author:"Roy"
    },
    {
      title: "What/If ",
      description:"What/If ... An anthology series which tackles a different morality tale, and the ripple effect of a single decision that changes the trajectory of an entire life."
      ,author:"Ben"
    }
      ]};
      
     
    
      
      componentDidMount(){
        console.log('mounting')
        this.unSubscribe=this.ref.onSnapshot(this.onCollectionUpdate);
        
      }
      
      onCollectionUpdate=(querySnapshot)=>{
        const newdiaries=[];
        //console.log(querySnapshot);
        querySnapshot.forEach((doc)=>{
          const {Title,Author,Description}=doc.data();
          console.log("doc",doc.data())
          newdiaries.push({
            key:doc.id,
            Title,
            Author,
            Description
          });

        });
        console.log(newdiaries);
        this.setState({
          diaries:newdiaries
        })
      }
       

      render(){
      
        const diaryCards= this.state.diaries.map((product)=>{
          console.log(product.title)
          return(
            <DiaryCard Title={product.Title} Description={product.Description} key={product.id} Author={product.Author}  />
          )
        });

        


  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <DiaryCardForm/>
      {diaryCards}
    </div>
  );
      }
}

export default App;
