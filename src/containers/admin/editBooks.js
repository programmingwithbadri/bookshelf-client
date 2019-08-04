import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { updateBook } from '../../actions';

class EditBooks extends PureComponent {

    state = '';

    handleInput = (event, name) => {
        const newformdata = {
            ...this.state.formdata
        }
        newformdata[name] = event.target.value;
        this.setState({
            formdata: newformdata
        })
    }

    componentWillMount() {
        // the state is set by getting it while redirecting 
        this.setState({
            formdata: this.props.location.state
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateBook(this.state.formdata))
    }

    render() {
        console.log(this.state)
        return (
            <div className="rl_container article">
                <form onSubmit={this.onSubmitForm}>
                    <h2> Edit the Review</h2>
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
                    <button type="submit">Edit Review</button>
                    <div className="delete_post">
                        <div className="button">
                            Delete Review
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(EditBooks)