import React from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
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
        Captain by Admiral
        </p>
        <p>
          The easiest way to create and maintain your cap tables.
        </p>
        <p>
          We are invested in the growth of your startup. Let us help you keep track of all of your shareholders,
          from investors and founders to each employee. Our graphs and charts simplify your cap table and make 
          it easier to view and update.
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
