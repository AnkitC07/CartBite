import React from 'react';


const CompGrid8 = () => {
  return (
        <div className=" plan_column bg-white">
            <div className="">
                <h5 className='plan_column_main_text'>Your plan</h5>
                <p className='plan_column_heading'>You have <span className='span_green'>14 days left</span> remaining of your free trial.</p>
                {/* <button className=' px-3 plan_column_btn bg-success text-white'>Upgrade to premium</button> */}
                <button className="Polaris-Button Polaris-Button--primary" type="button">
                    <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">Upgrade to premium</span>
                    </span>
                </button>
            </div>
            <div className="plan_column_icon">	
                {/* <i className="fa-solid fa-database"></i> */}
                <img src='plan_img.png' alt="plan_img.png"/>
            </div>
        </div>
  )
}

export default CompGrid8