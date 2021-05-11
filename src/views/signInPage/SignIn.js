import React from 'react';
import classes from './SignIn.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {nicknameChanged} from '../../store/Action.js';
import {uniqueNamesGenerator, names} from 'unique-names-generator';

/**
 * SignIn React App component.
 * @return {String} HTML for SIgnIn page.
 */
function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.nickname);
  const config= {
    dictionaries: [names],
  };
  const handleSubmit=(event)=> {
    console.log('Nickname Submitted');
    history.push('/home');
  };
  /**
  * Function for generating random name.
  */
  function generateRandomName() {
    const characterName= uniqueNamesGenerator(config);
    dispatch(nicknameChanged(characterName));
  }
  return (
    <div className={classes.SigninForm}>
      <p className={classes.Title}>Dear Diary</p>
      <p className={classes.SignIn}>Sign In</p>
      <form noValidate onSubmit={()=>handleSubmit()}>
        <div className={classes.FormElement}>
          <input type='text' value={nickName}
            onChange={(event)=>dispatch(nicknameChanged(event.target.value))}
            placeholder="  Your Nickname" className={classes.Nickname}>
          </input>
          <input type='button' className={classes.RandomNickname}
            onClick={generateRandomName} value="RANDOM">
          </input>
        </div>
        <div>
          <input type='submit'
            className={classes.SubmitNickname} value="Continue"
            disabled={nickName.length===0 ? true : false}>
          </input>
        </div>
      </form>
    </div>
  );
};


export default SignIn;
