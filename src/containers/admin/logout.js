import React from 'react'
import axios from 'axios';

const LogOut = (props) => {
    axios.get('http://localhost:3001/api/logout')
        .then(() => {
            setTimeout(() =>
                props.history.push('/'), 2000)
        })
    return (
        <div className="logout_container">
            <h1>Sorry to see you go :(</h1>
        </div>
    )
}

export default LogOut;
