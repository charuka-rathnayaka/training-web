import React,{ useState } from 'react';
import classes from './DiaryCardForm.module.css';
import firebase from '../../config.js';
import 'firebase/firestore';
import {connect} from 'react-redux';

function DiaryCardForm(state){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [diaryTitleClicked,setDiaryTitleClicked] = useState(false);

    const changeTitle=(event)=>(
        setTitle(event.target.value)
    )
    const changeDesc=(event)=>(
        setDescription(event.target.value)
    )
    const titleClicked=(event)=>(
       setDiaryTitleClicked(true)
      // console.log(state.nickname)
      
    )
    const emptyTitleDesc=(event)=>{
        console.log('empty title desc');
        setDiaryTitleClicked(false);
        setTitle('');
        setDescription('');
    }
   
  
    function handleSubmit(event) { 
      
        if((title.length>0)||(description.length>0)){
            var diaryTitle=title;
            var diaryDesc=description;
            var nickname=state.nickname;
            if(diaryTitle.length===0){
                diaryTitle="...";
            }
            if(diaryDesc.length===0){
                diaryDesc="...";
            }
            if(nickname.length===0){
                nickname="...";
            }
            firebase.firestore().collection('Diaries').add({
                Title:diaryTitle,
                Description:diaryDesc,
                Author:nickname,
                TimeStamp:new Date()
            }).then(()=>{
                return emptyTitleDesc();
            }
            );
            
        }
        else{
            console.log("Ëither Title or the Descrption should have value");
        }
        event.preventDefault();
        
      }
    
       const descInput=<textarea value={description}  onChange={changeDesc} type='text' rows='5'  placeholder=" Enter Description" className={classes.DiaryDesc} ></textarea>
        return(
            <div className={classes.DiaryCardForm}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
               
                    <input type='text' value={title}  onChange={changeTitle}  placeholder="  Submit New" className={classes.DiaryTitle} onClick={titleClicked}></input>
               
                    <input type='submit' className={classes.SubmitDiary} value="Submit"></input>
                    {diaryTitleClicked ? descInput:null}
                </form>
            </div>
        );
        
    };

const mapStatetoProps=state=>{
    return{
        nickname:state.nickname
    }
}

export default connect(mapStatetoProps)(DiaryCardForm);
