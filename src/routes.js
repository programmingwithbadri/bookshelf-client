import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home';
import Layout from './hoc/layout';
import Book from './components/book';
import Login from './containers/admin/login';
import auth from './hoc/auth';
import User from './components/admin';
import AddBooks from './containers/admin/addBooks';
import UserPosts from './containers/admin/userPosts';
import EditBooks from './containers/admin/editBooks';
import Register from './containers/admin/register';
import LogOut from './containers/admin/logout';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={auth(Home, null)} />
                <Route path="/login" exact component={auth(Login, false)} />
                <Route path="/user/logout" exact component={auth(LogOut, true)} />
                <Route path="/user" exact component={auth(User, true)} />
                <Route path="/user/register" exact component={auth(Register, true)} />
                <Route path="/books/:id" exact component={Book} />
                <Route path="/user/add" exact component={auth(AddBooks, true)} />
                <Route path="/user/edit/:id" exact component={auth(EditBooks, true)} />
                <Route path="/user/reviews" exact component={auth(UserPosts, true)} />
            </Switch>
        </Layout>
    )
}

export default Routes
