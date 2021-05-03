import logo from './logo.svg';
import './App.css';
import DiaryCard from './DiaryCard/DiaryCard.js';
import DiaryCardForm from './DiaryCardForm/DiaryCardForm.js';
import PrimarySearchAppBar from './TopBar/TopBar.js';
import React,{Component} from 'react';

class App extends React.Component{
  state={
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
      ]}
      render(){
        const diaryCards= this.state.diaryArray.map((item,pos)=>{
          return(
            <DiaryCard title={item.title} description={item.description} key={pos} author={item.author}  />
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
