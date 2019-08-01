import React, { useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import StateDropdown from './StateDropdown';
import CountryDropdown from './CountryDropdown';
import { companyNameStateChange } from '../actions/actions';

const mapStateToProps = (state) => {
  return { 
    startDate: state.startDate,
    company: state.company,
    companyName: state.companyName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    companyNameStateChange: clickAction => dispatch(companyNameStateChange()),
  };
};

function OnboardingContainer() {

  const [dashboardModalStatus, setDashboardModalStatus] = useState(false);
  // company name
  const [companyNameInput, setCompanyName] = useState(null)
  // date
  const [selectedDate, setDateSelect] = useState(null);


  const handleNameInputChange = (e) => {
    setCompanyName({
      companyNameInput : e.target.value,
    });
  };

  const handleDateSelectionChange = (e) => {
    console.log(e, 'e handleDateSelect');
    setDateSelect({
      selectedDate : toLocaleString(e)
    });
  };

  const onboardingSubmitOnClick = (e) => {
    e.preventDefault();
    setDashboardModalStatus(!dashboardModalStatus);
    companyNameStateChange(companyNameInput);
    // getCompany();
    
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
            <p className="input-title">*Company Name:
            <input type="text" name="name" onChange={ handleNameInputChange } /></p> 

            <p className="input-title">Formation Date</p>
            <DatePicker selected={ selectedDate } onChange={ handleDateSelectionChange } />
            <p className="input-title">State</p> 
            <StateDropdown />

            <p className="input-title">Country</p> 
            <CountryDropdown />

            <button type="submit">Sign Up</button>

          </form>
            <p className="input-title"><small>* required</small></p>
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
