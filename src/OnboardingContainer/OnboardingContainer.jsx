import React from 'react';
import DashboardContainer from '../DashboardContainer/DashboardContainer';

function OnboardingContainer() {

  const [dashboardModalStatus, setDashboardModalStatus] = React.useState(false)

  const onboardingSubmitOnClick = (event) => {
      setDashboardModalStatus(!dashboardModalStatus)
  };

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
          <button onClick={ onboardingSubmitOnClick }>SUBMIT</button>
        </div>
        :
        <DashboardContainer />
      }
      </div>
    );
  }

  export default OnboardingContainer;