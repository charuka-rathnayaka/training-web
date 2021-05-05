import React,{Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './DiaryCardForm.module.css';
import firebase from '../../config.js';
import 'firebase/firestore';
import {connect} from 'react-redux';
import mapDispatchtoProps from '../../store/Action.js';

class DiaryCardForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     emptyData(){
        return this.props.dispatch({ type: "Empty Form"});
    }
    
    handleSubmit(event) {
        
        if((this.props.diary_title.length>0)||(this.props.diary_desc.length>0)){
            var DiaryTitle=this.props.diary_title;
            var DiaryDesc=this.props.diary_desc;
            if(this.props.diary_title.length==0){
                DiaryTitle="...";
            }
            if(this.props.diary_desc.length==0){
                DiaryDesc="...";
            }
            firebase.firestore().collection('Diaries').add({
                Title:DiaryTitle,
                Description:DiaryDesc,
                Author:"Anoynumus",
                TimeStamp:new Date()
            }).then(()=>{
                return this.props.EmptyTitleDesc();
            }
            );
            
        }
        else{
            console.log("Ëither Title or the Descrption should have value");
        }
        event.preventDefault();
        
      }
    render(){
       const description=<textarea value={this.props.diary_desc}  onChange={this.props.DescriptionChanged} type='text' rows='5'  placeholder=" Enter Description" className={classes.DiaryDesc} ></textarea>
        return(
            <div className={classes.DiaryCardForm}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
               
                    <input type='text' value={this.props.diary_title}  onChange={(this.props.TitleChanged)}  placeholder="  Submit New" className={classes.DiaryTitle} onClick={this.props.TitleClicked}></input>
               
                    <input type='submit' className={classes.SubmitDiary} value="Submit"></input>
                    {this.props.DiaryTitleClicked ? description:null}
                </form>
            </div>
        );
        }
    };

const mapStatetoProps=state=>{
    return{
        DiaryTitleClicked:state.DiaryTitleClicked,
        diary_title:state.diary_title,
        diary_desc:state.diary_desc
    }
}
/*     
const mapDispatchtoProps = dispatch =>{
    
    return{
        TitleClicked:()=>dispatch({
            type:'Title Clicked'
        }),
        TitleChanged:(event)=>dispatch({
            type:'Title Changed',
            payload:event.target.value
        }),
        DescriptionChanged:(event)=>dispatch({
            type:'Desc Changed',
            payload:event.target.value
        }),
        EmptyTitleDesc:()=>dispatch({
            type:'Empty Form'
        }),
    }
}
*/
export default connect(mapStatetoProps,mapDispatchtoProps)(DiaryCardForm);


//export default DiaryCardForm;