import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const SideNavItems = () => {

    const items = [
        {
            type: 'navItem',
            link: '/',
            icon: 'home',
            text: 'Home',
            restricted: false
        },
        {
            type: 'navItem',
            link: '/user',
            icon: 'file-text-o',
            text: 'My Profile',
            restricted: false
        },
        {
            type: 'navItem',
            link: '/user/register',
            icon: 'file-text-o',
            text: 'Add Admins',
            restricted: false
        },
        {
            type: 'navItem',
            link: '/login',
            icon: 'fa fa-sign-in',
            text: 'Login',
            restricted: false
        },
        {
            type: 'navItem',
            link: '/user/reviews',
            icon: 'file-text-o',
            text: 'My Reviews',
            restricted: false
        },
        {
            type: 'navItem',
            link: '/user/add',
            icon: 'file-text-o',
            text: 'Add Reviews',
            restricted: false
        },
        {
            type: 'navItem',
            link: '/user/logout',
            icon: 'fa fa-sign-out',
            text: 'Logout',
            restricted: false
        }
    ]

    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        items.map((item, i) => {
            return element(item, i)
        })
    )
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems
