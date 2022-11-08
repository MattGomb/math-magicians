import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}  />
          <Route path="/calculator" element={<Calculator />}  />
          <Route path="/quotes" element={<Quote />}  />
        </Routes>
      </Router>
    );
  }
}

export default App;
