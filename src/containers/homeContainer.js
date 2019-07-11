import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBooks } from '../actions';
import BookItem from '../widgetsUI/bookItem';

class HomeContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getBooks(6, 0))
    }

    renderItems = (books) => (
        books.list ?
            books.list.map(item => (
                <BookItem {...item} key={item._id} />
            ))
            : null
    )

    render() {
        return (
            <div>
                {this.renderItems(this.props.books)}
            </div>
        )
    }
}

function mapStatesToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStatesToProps)(HomeContainer);
