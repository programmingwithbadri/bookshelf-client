import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home';
import Layout from './hoc/layout';
import Book from './components/book';
import Login from './containers/admin/login';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/books/:id" exact component={Book} />
            </Switch>
        </Layout>
    )
}

export default Routes
