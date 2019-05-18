import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { connect } from 'react-redux';
import Feeling from '../Feeling/feeling';
import Understanding from '../Understanding/understanding';
import { getFeedback } from '../../Modules/services/feedback.service';
import Supported from '../Supported/supported';
import Comments from '../Comments/comments'

class App extends Component {

  state = {
    feedback: [],
  }
  componentDidMount() {
    this.refreshFeedback();
  }

  refreshFeedback = () => {
    getFeedback()
    .then((response)=>{
      this.props.dispatch({
        type: 'FEELING_REDUX',
        payload: response.data,
      });
    });
  };


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback Form</h1>
          </header>
          <br />
          <Route exact path='/' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/supported' component={Supported} />
          <Route path='/comments' component={Comments} />
        </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);