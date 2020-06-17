import React, { Component } from 'react'
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import BodyComp from './components/Body';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      errorInfo: null,
      visible: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log('1 - getDerivedStateFromError called..');
    return { error: true };
  }

  changeState = () => {
    console.log('changeState called..');
    this.setState({
      visible: true
    });
  }

  componentDidCatch(error, errorInfo) {
    console.log('2 - componentDidCatch called..');
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong</h1>
          {this.state.error.toString()}
        </div>
      )
    } else {
      return (
        <div>
          <Router>
            <Header></Header>
            <BodyComp></BodyComp>
            <Footer></Footer>
          </Router>
        </div>
      )
    }
  }
}

export default App
