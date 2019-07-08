import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

const Nav = (props) => {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background: 'black',
                maxWidth: '220px'
            }}
        >
            <SideNavItems />
        </SideNav>
    )
}

export default Nav
