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
  const [companyNameInput, setCompanyName] = useState({_id: null, name: ''})
  // date
  const [selectedDate, setDateSelect] = useState(null);

  const onboardingSubmitOnClick = (e) => {
    setDashboardModalStatus(!dashboardModalStatus);
    companyNameStateChange(companyNameInput);
  };

  const handleFormChange = (e) => {
    // company name
    setCompanyName({
      companyNameInput : e.target.value
    });
    // date
    setDateSelect({
      startDate : selectedDate
    });

  }



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
            <input type="text" name="name" onChange={ setCompanyName } /></p> 

            <p className="input-title">Formation Date</p>
            <DatePicker selected={ selectedDate } onChange={ setDateSelect } />

            <div>
              <p className="input-title">State</p> 
              <StateDropdown />

              <p className="input-title">Country</p> 
              <CountryDropdown />
            </div>


            <div>
                <button type="submit">Sign Up</button>
            </div>
          </form>
            <p className="input-title"><small>* required</small></p>
        </div>
        :
        <DashboardContainer />
      }
      </div>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer);
