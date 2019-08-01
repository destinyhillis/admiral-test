// import React, { useState, useEffect } from 'react';
import React from 'react';
import { connect } from 'react-redux';
// import { getCompany, companyNameStateChange } from '../actions/actions';
import CompanyDetail from './Detail/CompanyDetail';


const mapStateToProps = (state) => {
  return { 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


function DashboardContainer() {
  // const [company, getCompany] = useState(null);

    return (
      <div>
        <p>
        Captain by Admiral
        </p>
        <p>
            Dashboard Stuff right here
        </p>
        <CompanyDetail />
      </div>
    );
  }

  export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);