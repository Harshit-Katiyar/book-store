import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';
import reducers from "./reducers";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div>
    <Layout />
  </div>
);

render(<App />, document.getElementById('root'));
