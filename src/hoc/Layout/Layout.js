import React, {Component} from 'react';
import Auxi from '../Auxi/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/NavigationItems/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => { 
            return { showSideDrawer: !prevState.showSideDrawer } 
        });
    }

    render(){
        return(
            <Auxi>
                <Toolbar toggleMenu={this.sideDrawerOpenHandler}/>

                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}

export default Layout;