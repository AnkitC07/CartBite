import React from 'react'
import { NavLink } from 'react-router-dom'

const CompGridUpper4 = () => {
  return (
    <div className="plan_column bg-white">
        <h5 className='confg_col_text'>New to Back in Stock?</h5>
        <p className='confg_col_heading'>configure the popup widget to start getting subscribers</p>
        <NavLink to='/backInStock'>
          <button className="Polaris-Button " type="button">
            <span className="Polaris-Button__Content">
              <span className="Polaris-Button__Text confg">Configure</span>
            </span>
          </button>
        </NavLink>
    </div>
  )
}

export default CompGridUpper4