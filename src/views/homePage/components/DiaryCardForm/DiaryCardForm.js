import React, {useState, useRef, useEffect} from 'react';
import classes from './DiaryCardForm.module.css';
import 'firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {addCardData} from '../../action.js';
/**
 * Form for adding diary card React App component.
 * @return {String} Diary Card form.
 */
function DiaryCardForm() {
  const nickName = useSelector((state) => state.nickname);
  const dispatch=useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [diaryTitleClicked, setDiaryTitleClicked] = useState(false);


  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if ((title.length===0)&&(description.length===0)) {
        setDiaryTitleClicked(false);
      }
    }
  };

  const changeTitle=(event)=>(
    setTitle(event.target.value)
  );
  const changeDesc=(event)=>(
    setDescription(event.target.value)
  );
  const titleClicked=(event)=>(
    setDiaryTitleClicked(true)

  );
  const emptyTitleDesc=()=>{
    console.log('empty title desc');
    setDiaryTitleClicked(false);
    setTitle('');
    setDescription('');
  };

  /**
  * Add two numbers.
  * @param {object} event The second number.
  */
  function handleSubmit(event) {
    event.preventDefault();
    if ((title.length>0)||(description.length>0)) {
      let diaryTitle=title;
      let diaryDesc=description;
      let nickname=nickName;
      if (diaryTitle.length===0) {
        diaryTitle='...';
      }
      if (diaryDesc.length===0) {
        diaryDesc='...';
      }
      if (nickname.length===0) {
        nickname='...';
      }

      dispatch(addCardData({
        Title: diaryTitle,
        Description: diaryDesc,
        Author: nickname,
        TimeStamp: new Date(),
      }));
      emptyTitleDesc();
    } else {
      console.log('Ëither Title or the Descrption should have value');
    }
  }

  const descInput=<textarea value={description}
    onChange={changeDesc} type='text' rows='5'
    placeholder=" Enter Description" className={classes.DiaryDesc} ></textarea>;
  return (
    <div className={classes.DiaryCardForm} ref={ref}>
      <form className={classes.root} noValidate autoComplete="off"
        onSubmit={handleSubmit}>

        <input type='text' value={title} onChange={changeTitle}
          placeholder="  Submit New" className={classes.DiaryTitle}
          onClick={titleClicked}>
        </input>

        <input type='submit' className={classes.SubmitDiary}
          value="Submit">
        </input>
        {diaryTitleClicked ? descInput:null}
      </form>
    </div>
  );
};


export default DiaryCardForm;
