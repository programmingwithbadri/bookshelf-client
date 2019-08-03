import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home';
import Layout from './hoc/layout';
import Book from './components/book';
import Login from './containers/admin/login';
import auth from './hoc/auth';
import User from './components/admin';
import AddBooks from './containers/admin/addBooks';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={auth(Home, null)} />
                <Route path="/login" exact component={auth(Login, false)} />
                <Route path="/user" exact component={auth(User, true)} />
                <Route path="/books/:id" exact component={Book} />
                <Route path="/user/add" exact component={auth(AddBooks, true)} />
            </Switch>
        </Layout>
    )
}

export default Routes
