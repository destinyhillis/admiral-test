import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import OnboardingContainer from './OnboardingContainer/OnboardingContainer';
import { justChecking } from './actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
      justChecking: clickAction => dispatch(justChecking()),
  }
};

const mapStateToProps = state => {
  return { 
    // loggedIn: state.loggedIn, currentUser: state.currentUser 
  };
};

const ctaOnClick = (event) => {
justChecking() 
};

function App() {
  return (
    <div className="App">
      <p>
        LOGO...with tagline?
      </p>
      <p>
        paragraph about service
      </p>
      <button onClick={ ctaOnClick }>CTA HERE Leads to Onboarding using toggle</button>
      <OnboardingContainer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
