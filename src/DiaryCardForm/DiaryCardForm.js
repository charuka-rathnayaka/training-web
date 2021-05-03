import React,{Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './DiaryCardForm.module.css';
import firebase from '../config.js';
import 'firebase/firestore';


class DiaryCardForm extends React.Component{
    
    
    constructor(props) {
        super(props);
        this.state={
            DiaryTitleClicked:false,
            diary_title:'',
            diary_desc:''
        };
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
     onDiaryTitleclick=()=>{
        this.setState({DiaryTitleClicked:true})
    
    }
    handleTitleChange(event) {
        this.setState({diary_title: event.target.value});
      }
    handleDescChange(event) {
        this.setState({diary_desc: event.target.value});
      }
    
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.diary_title+this.state.diary_desc);
        console.log('A name was submitted: ' + this.state.diary_title+this.state.diary_desc);
        if((this.state.diary_title.length>0)||(this.state.diary_desc.length>0)){
            var DiaryTitle=this.state.diary_title;
            var DiaryDesc=this.state.diary_desc;
            if(this.state.diary_title.length==0){
                DiaryTitle="...";
            }
            if(this.state.diary_desc.length==0){
                DiaryDesc="...";
            }
            firebase.firestore().collection('Diaries').add({
                Title:DiaryTitle,
                Description:DiaryDesc,
                Author:"Anoynumus"
            });
           
            this.setState({ 
                diary_title:'',
                diary_desc:'',
                DiaryTitleClicked:false
            });
        }
        else{
            console.log("Ëither Title or the Descrption should have value");
        }
        event.preventDefault();
      }
    render(){
       const description=<textarea value={this.state.diary_desc}  onChange={this.handleDescChange} type='text' rows='5'  placeholder=" Enter Description" className={classes.DiaryDesc} ></textarea>
        return(
            <div className={classes.DiaryCardForm}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
               
                    <input type='text' value={this.state.diary_title}  onChange={this.handleTitleChange}  placeholder="  Submit New" className={classes.DiaryTitle} onClick={this.onDiaryTitleclick}></input>
               
                    <input type='submit' className={classes.SubmitDiary} value="Submit"></input>
                    {this.state.DiaryTitleClicked ? description:null}
                </form>
            </div>
        );
        }
       
};

export default DiaryCardForm;