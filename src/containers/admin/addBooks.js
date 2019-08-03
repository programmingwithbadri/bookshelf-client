import React, { Component } from 'react'

export default class AddBooks extends Component {

    state = {
        formdata: {
            name: '',
            author: '',
            review: '',
            pages: '',
            price: '',
            rating: ''
        }
    }

    handleInput = (event, name) => {
        const newformdata = {
            ...this.state.formdata
        }
        newformdata[name] = event.target.value;
        this.setState({
            formdata: newformdata
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.onSubmitForm}>
                    <h2> Add a Review</h2>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter the Name"
                            value={this.state.formdata.name}
                            onChange={(event) => this.handleInput(event, 'name')}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter the Author"
                            value={this.state.formdata.author}
                            onChange={(event) => this.handleInput(event, 'author')}
                        />
                    </div>
                    <div className="form_element">
                        <textarea
                            placeholder="Enter the Review"
                            value={this.state.formdata.review}
                            onChange={(event) => this.handleInput(event, 'review')}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter the Pages"
                            value={this.state.formdata.pages}
                            onChange={(event) => this.handleInput(event, 'pages')}
                        />
                    </div>
                    <div className="form_element">
                        <select value={this.state.formdata.rating}
                            onChange={(event) => this.handleInput(event, 'rating')}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter the Price"
                            value={this.state.formdata.price}
                            onChange={(event) => this.handleInput(event, 'price')}
                        />
                    </div>
                    <button type="submit">Add Review</button>
                </form>
            </div>
        )
    }
}
