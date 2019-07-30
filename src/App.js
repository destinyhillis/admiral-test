import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import OnboardingContainer from './OnboardingContainer/OnboardingContainer';
import {  } from './actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
      // justChecking: clickAction => dispatch(justChecking()),
  }
};

const mapStateToProps = (state) => {
  return { 
    // ctaToggle: state.ctaToggle,
  };
};

function App() {

  const [ctaModalStatus, setCTAModalStatus] = React.useState(false)

  const ctaOnClick = (event) => {
      setCTAModalStatus(!ctaModalStatus)
  };

  return (
    <div className="App">
    {
      !ctaModalStatus ?
      <div>
        <p>
        Captain & Admiral (use Admiral logo here)
        </p>
        <p>
          The easiest way to maintain cap tables for your startup. (say more stuff here maybe?)
        </p>
        <button onClick={ ctaOnClick }>GET STARTED</button>
      </div>
      :
      <OnboardingContainer />
    }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
