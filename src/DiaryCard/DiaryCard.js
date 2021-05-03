import React from 'react';
import classes from './DiaryCard.module.css';

const DiaryCard =(props)=>{
        return(
            <div className={classes.DiaryCard} key={props.pos}>
            <div className={classes.DiaryCardContent}>
                <p className={classes.DiaryCardTitle}>
                   {props.title}
                </p>
                <p className={classes.DiaryCardAuthor}>
                    {props.author}
                </p>
                <p className={classes.DiaryCardDescription} maxlength="20">
                  {props.description.length<20 ?props.description : props.description.substring(0,20)}
                </p>
            </div>
            <button className={classes.DiaryCardShowMore}>
                Show More
            </button>
            </div>
        );
    
       
};

export default DiaryCard;