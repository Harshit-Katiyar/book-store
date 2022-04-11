import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Grid, Row, Col } from 'react-bootstrap';
import Booklist from '../containers/Booklist';
import BookDetail from '../containers/BookDetail';
import Search from './Search';

import reducers from "../reducers";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Layout = () => (
  <Provider store={createStore(reducers)}>
    <Grid>
      <Search />
      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <Booklist />
        </Col>
        <Col md={6} mdPull={6}>
          <BookDetail />
        </Col>
      </Row>
    </Grid>
  </Provider>
);

export default Layout;