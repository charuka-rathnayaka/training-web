/* eslint-disable*/
import React from 'react';
import classes from './DiaryCard.module.css';

const DiaryCard =(props)=>{
  return (
    <div className={classes.DiaryCard} key={props.pos}>
      <div className={classes.DiaryCardContent}>
        <p className={classes.DiaryCardTitle}>
          {props.Title}
        </p>
        <p className={classes.DiaryCardAuthor}>
          {props.Author}
        </p>
        <div className={classes.DiaryCardDescription} maxLength="40">
          {props.Description.length<40 ?props.Description : props.Description.substring(0, 40)+"..."}

        </div>
      </div>
      <button className={classes.DiaryCardShowMore}>
                Show More
      </button>
    </div>
  );
};

export default DiaryCard;
