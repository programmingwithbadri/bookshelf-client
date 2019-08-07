import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getUsers, registerUser } from '../../actions';

class Register extends PureComponent {

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
        this.setState({ error: '' });

        this.props.dispatch(registerUser({
            name: this.state.name,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }, this.props.user.users))
    }

    showUsers = (user) => (
        user.users ?
            user.users.map(item =>
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            )
            : null
    )

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.register === false) {
            this.setState({
                error: 'Error Try Again'
            })
        } else {
            this.setState({
                email: '',
                password: '',
                name: '',
                lastName: '',
                error: ''
            })
        }
    }

    render() {
        const user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>
                    <div className="form_element">
                        <input type="text" placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleInputName} />
                    </div>
                    <div className="form_element">
                        <input type="text" placeholder="Enter last name"
                            value={this.state.lastName}
                            onChange={this.handleInputLastName} />
                    </div>
                    <div className="form_element">
                        <input type="email" placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputEmail} />
                    </div>
                    <div className="form_element">
                        <input type="password" placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputPassword} />
                    </div>
                    <button type="submit">Add User</button>
                    <div className="error">
                        {this.state.error}
                    </div>
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