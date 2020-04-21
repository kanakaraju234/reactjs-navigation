import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigator">
            <div>
                <DrawerToggleButton click={props.ClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li> <a href="/">Product</a> </li>
                    <li> <a href="/">Users</a> </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;
