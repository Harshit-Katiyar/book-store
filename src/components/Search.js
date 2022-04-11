import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import {searchBook} from '../actions/search';
import { bindActionCreators } from 'redux';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render(){
    return(
      <div value={this.state.value} onChange={this.handleChange} type="text">
      <Form horizontal>
        <FormGroup bsSize="large">
          <FormControl 
          onChange={() => this.props.searchBook(this.state.value)}
          placeholder="Search for a book">
          </FormControl>
        </FormGroup>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    search: state.searchBook
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);