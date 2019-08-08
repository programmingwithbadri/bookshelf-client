import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNavItems = ({ user }) => {

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
            restricted: true
        },
        {
            type: 'navItem',
            link: '/user/register',
            icon: 'file-text-o',
            text: 'Add Admins',
            restricted: true
        },
        {
            type: 'navItem',
            link: '/login',
            icon: 'fa fa-sign-in',
            text: 'Login',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            link: '/user/reviews',
            icon: 'file-text-o',
            text: 'My Reviews',
            restricted: true
        },
        {
            type: 'navItem',
            link: '/user/add',
            icon: 'file-text-o',
            text: 'Add Reviews',
            restricted: true
        },
        {
            type: 'navItem',
            link: '/user/logout',
            icon: 'fa fa-sign-out',
            text: 'Logout',
            restricted: true
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
        user.login ?
            items.map((item, i) => {
                if (user.login.isAuth) {
                    return !item.exclude ?
                        element(item, i)
                        : null
                } else {
                    return !item.restricted ?
                        element(item, i)
                        : null
                }
            })
            : null
    )
    return (
        <div>
            {showItems()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SideNavItems);
