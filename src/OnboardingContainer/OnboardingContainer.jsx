import React, { useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import StateDropdown from './StateDropdown';
import CountryDropdown from './CountryDropdown';
// import {  } from '../actions/actions';

const mapStateToProps = (state) => {
  return { 
    startDate: state.startDate,
  };
};

function OnboardingContainer() {

  const [dashboardModalStatus, setDashboardModalStatus] = useState(false);
  const [selectedDate, handleDateChange] = useState(null);

  const onboardingSubmitOnClick = (event) => {
      setDashboardModalStatus(!dashboardModalStatus)
  };

  // const selectDate = (dateSelected) => {
  //     handleDateChange(dateSelected)
  // };


    return (
      <div className="onboarding">
      {
        !dashboardModalStatus ?
        <div>
          <p>
          Captain & Admiral (use Admiral logo here)
          </p>
          <p>
            Onboarding form right here
          </p>
          <form >
            <p className="input-title">*Company Name:</p> 
            <input type="text" name="name" />

            <p className="input-title">Formation Date</p> 
            <DatePicker />

            <p className="input-title">State</p> 
            <StateDropdown />

            <p className="input-title">Country</p> 
            <CountryDropdown />

            <div>
                <button onClick={ onboardingSubmitOnClick }>Create</button>
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

  export default connect(mapStateToProps, null)(OnboardingContainer);
