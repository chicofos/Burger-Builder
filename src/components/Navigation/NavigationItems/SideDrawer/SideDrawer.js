import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import classes from '../SideDrawer/SideDrawer.css'
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Auxi from '../../../../hoc/Auxi/Auxi';

const SideDrawer = (props) => {
    
    let attachedClasses = [ classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );
}

export default SideDrawer;