import React,{Component,useState,useEffect} from 'react';
import classes from './SignIn.module.css';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';


const SignIn =(props)=>{

const history = useHistory();
const handleSubmit=()=> {
      console.log("Nickname Submitted");
      history.push('/home');
      
  }
      
        return(
            <div className={classes.SigninForm}>
                <p className={classes.Title}>Dear Diary</p>
                <p className={classes.SignIn}>Sign In</p>
                <form noValidate onSubmit={()=>handleSubmit()}>
                    <div className={classes.FormElement}>
                        <input type='text'  placeholder="  Your Nickname" className={classes.Nickname} ></input>
                        <input type='button' className={classes.RandomNickname} value="RANDOM"></input>
                    </div>
                    <div>
                       
                        <input type='submit' className={classes.SubmitNickname} value="Submit"></input>
                    </div>
                </form>
            </div>
        )
      }




export default SignIn;
