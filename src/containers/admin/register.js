import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../actions';

class Register extends Component {

    state = {
        email: '',
        password: '',
        name: '',
        lastName: '',
        error: ''
    }

    componentWillMount() {
        this.props.dispatch(getUsers())
    }

    handleInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleInputLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
    }

    showUsers = (user) => (
        user.users ?
            user.users.map((item) =>
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            )
            : null
    )

    render() {
        const user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>
                </form>
                <div className="current_users">
                    <h4>Current Users:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>LastName</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStatesToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStatesToProps)(Register);