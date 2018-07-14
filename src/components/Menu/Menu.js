import React from 'react';
import classes from './Menu.css'

const menu = (props) => {
    return (
        <div onClick={props.toggle}> 
            <div className={classes.Bar}/>
            <div className={classes.Bar}/>
            <div className={classes.Bar}/>
        </div>
    )
}

export default menu;