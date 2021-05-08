import React from 'react';
import classes from './SignIn.module.css';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import mapDispatchtoProps from '../store/Action.js';



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
                        <input type='text' value={props.nickname}  onChange={(props.NicknameChanged)} placeholder="  Your Nickname" className={classes.Nickname} ></input>
                        <input type='button' className={classes.RandomNickname} value="RANDOM"></input>
                    </div>
                    <div>
                       
                        <input type='submit' className={classes.SubmitNickname} value="Continue" disabled={props.nickname.length===0 ? true : false}></input>
                    </div>
                </form>
            </div>
        )
      }

const mapStatetoProps=state=>{
    return{
        nickname:state.nickname
      }
      }


export default connect(mapStatetoProps,mapDispatchtoProps)(SignIn);
