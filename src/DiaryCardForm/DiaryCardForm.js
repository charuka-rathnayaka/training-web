import React,{Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './DiaryCardForm.module.css';



class DiaryCardForm extends React.Component{
    state={
        DiaryTitleClicked:false
    }
    
    
     onDiaryTitleclick=()=>{
        this.setState({DiaryTitleClicked:true})
    
    }
    render(){
       const description=<textarea type='text' rows='5'  placeholder=" Enter Description" className={classes.DiaryDesc} ></textarea>
        return(
            <div className={classes.DiaryCardForm}>
                <form className={classes.root} noValidate autoComplete="off">
                    <input type='text'  placeholder="  Submit New" className={classes.DiaryTitle} onClick={this.onDiaryTitleclick}></input>
                    <input type='submit' className={classes.SubmitDiary} value="Submit"></input>
                    {this.state.DiaryTitleClicked ? description:null}
                </form>
            </div>
        );
        }
       
};

export default DiaryCardForm;