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
    // startDate: state.startDate,
  };
};

function App() {

  const [ctaClickStatus, setCtaClickStatus] = React.useState(false)

  const ctaOnClick = (event) => {
      setCtaClickStatus(!ctaClickStatus);
  };

  return (
    <div className="App">
    {
      !ctaClickStatus ?
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
      <OnboardingContainer ctaClickStatus={ ctaClickStatus } />
    }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
