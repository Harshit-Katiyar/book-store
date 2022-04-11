import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class BookDetail extends Component {
  render() {
    return (
      <div>
        {this.props.current ? (
          <ListGroup>
            <h1>Order Books</h1>
            <input type="text" placeholder="Contact-Details" />
            <br></br>
            <br></br>
            <input type="text" placeholder="Address-Details" />
          </ListGroup>
        ) : null}
      </div>
    );
  }
}

function tunnelProps(state) {
  return {
    current: state.currentBook
  };
}

export default connect(tunnelProps)(BookDetail);
