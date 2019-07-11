import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBooks } from '../actions';
import BookItem from '../widgetsUI/bookItem';

class HomeContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getBooks(1, 0, 'asc'))
    }

    renderItems = (books) => (
        books.list ?
            books.list.map(item => (
                <BookItem {...item} key={item._id} />
            ))
            : null
    )

    loadmore = () => {
        let count = this.props.books.list.length;
        this.props.dispatch(getBooks(3, count, 'asc', this.props.books.list))
    }

    render() {
        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore"
                    onClick={this.loadmore}>load more</div>
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
