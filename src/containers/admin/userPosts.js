import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';
import moment from 'moment';

class UserPosts extends Component {

    componentWillMount() {
        this.props.dispatch(getPosts(this.props.user.login.id))
    }

    showUserPosts = (user) => (
        user.userPosts ?
            user.userPosts.map(item =>
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>{moment(item.createdAt).format("DD/MM/YY")}</td>
                </tr>
            )
            : null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="user_posts">
                <h4>Your Reviews: </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPosts)
