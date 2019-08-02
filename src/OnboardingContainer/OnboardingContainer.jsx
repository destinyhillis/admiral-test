import React, { useState } from 'react';
import { connect } from 'react-redux';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import { createCompanyName,  } from '../actions/actions';

const mapStateToProps = (state) => {
  return { 
    companyName: state.companyName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    createCompanyName: company => dispatch(createCompanyName(company)),
  };
};

function OnboardingContainer() {

  const [dashboardModalStatus, setDashboardModalStatus] = useState(false);
  const [companyName, setCompanyName] = useState(null)

  const handleNameInputChange = (e) => {
    setCompanyName({
      companyName : e.target.value,
    });
  };

  const onboardingSubmitOnClick = (e) => {
    e.preventDefault();
    setDashboardModalStatus(!dashboardModalStatus);
    createCompanyName(companyName);
  };


    return (
      <div className="onboarding">
      {
        !dashboardModalStatus ?
        <div>
          <p>
          Captain by Admiral
          </p>
          <h1>Sign Up</h1>
          <p>
            Let us take the take the hard part out of creating cap tables for your business.
          </p>
          <form onSubmit={ onboardingSubmitOnClick }>
            <p className="input-title">Company Name:
            <input type="text" name="name" onChange={ handleNameInputChange } /></p> 

            <button type="submit">Sign Up</button>

          </form>
        </div>
        :
        <div>
          <DashboardContainer />
        </div>
      }
      </div>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer);
