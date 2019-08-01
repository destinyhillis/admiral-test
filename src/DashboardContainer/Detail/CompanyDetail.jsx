import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getCompany } from '../../actions/actions';

const mapStateToProps = state => {
    return { 
        company: state.company,
        dashboardModalStatus: state.dashboardModalStatus,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCompany: company => dispatch(getCompany(company)),
    }
};

function CompanyDetail(){

    const [companyToShow, getCompany] = useState();

    // getCompany();
    useEffect(() => {
        document.title = `${companyToShow}`;
    });


  return (
    <div>
      <p>{companyToShow}</p>
    </div>
  );

    // if(this.props.dashboardModalStatus){
    //     this.props.getCompany();
    // }

    // console.log(this.props, 'props')
    // const allCompanies = this.props.company;
    // console.log(allCompanies, 'allCompanies')
    // const currentCompany = allCompanies[0];
    // console.log(currentCompany, 'currentCompany')
    // // const companyDetails = currentCompany.map((detail, i) => {
    // //     return(
    // //         <div>
    // //             <p>{ detail[i].companyName }</p>
    // //         </div>
    // //     )
    // // })

    // return(
    //     <div>
    //         {/* { currentCompany.companyName } */}
    //     </div>
    // )
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);