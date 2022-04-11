import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';
import { ButtonGroup, ListGroup, ListGroupItem,Button } from 'react-bootstrap';

class Booklist extends Component {
  constructor(props){
    super(props);
    this.state = {
      current : 0,
      next : 10,
      query : null
    }
  }
  next(button){
      this.setState({
        current: button * 10,
        next: (button * 10) + 10,
        query:null
      })
  }
  componentWillReceiveProps(){
    this.setState({
      query: this.props.searchBook
    })
  }
  paginate(){
    let count = this.props.books.length / 10;
    let buttons = Array(count).fill(0).map(Number.call, Number).slice(0,count+1);
    return buttons.map(button => {
      return (
        <Button
        bsStyle="info"
        onClick={() => this.next(button)}
        >{button}</Button>
      )
    })
  }
  renderList(){
    const { current, next , query } = this.state;
    if(query){
      return this.props.books.map(book => {
        return book.title.toLowerCase().includes(query) ? 
          <ListGroupItem onClick={() => this.props.selectBook(book)} key={book.title + book.pages}>
            {book.title}
          </ListGroupItem>
        : null;
      })
    } else {
      return this.props.books.slice(current, next).map(book => {
        return (
          <ListGroupItem onClick={() => this.props.selectBook(book)} key={book.title + book.pages}>
            {book.title}
          </ListGroupItem>
        )
      });
    }
  }
  render(){
    return (
      <div>
        <ListGroup>
          {this.renderList()}
        </ListGroup>
        <ButtonGroup justified
        >{this.paginate()}
        </ButtonGroup>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    books : state.books,
    searchBook : state.searchBook
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);