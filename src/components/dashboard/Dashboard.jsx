import React from 'react'
import { useState } from 'react';
import CompGrid12 from './CompGrid12';
import CompGrid4 from './CompGrid4';
import CompGrid8 from './CompGrid8';
import CompGridUpper4 from './CompGridUpper4';

const Dashboard = () => {
    const [data,setData] = useState([
        {
            icon :  'first-order_major.png',
            number : 403,
            heading : 'Back in stock subscribers',
            text : 'within the last 24 hours'
        },
        {
            icon :  'discounts_major.png',
            number : 10,
            heading : 'Price drop subscribers',
            text : 'within the last 24 hours'
        },
        {
            icon :  'customers_major.png',
            number : '44.3k',
            heading : 'Total subscribers',
            text : 'over last 30 days'
        },
        {
            icon :  'email-newsletter_major.png',
            number : '1.2k',
            heading : 'Email notifications',
            text : 'sent over last 24 hours'
        },
        {
            icon :  'mobile_major.png',
            number : '100k',
            heading : 'SMS notifications',
            text : 'within the last 24 hours'
        },
        {
            icon :  'balance_major.png',
            number : '$30.5k',
            heading : 'Revenue',
            text : 'over last 30 days'
        }
    ])
    // let icon = 'fa-solid fa-user-large user-icon float-start';
    // let number = 403;
    // let heading = 'Back in stock subscribers';
    // let text = 'within the last 24 hours';


    return (
        <section className='dashboard_section'>
            <div className="container p-3">
                
                <div className="row">
                        <div className="col-md-8">  
                            <CompGrid8/>    
                        </div>
                        <div className="col-md-4 ">
                            <CompGridUpper4/>
                        </div>
                    
                </div>
                <div className="row">
                    
                            {
                                [0,1,2,3,4,5].map((i) => (
                                <CompGrid4  key={data[i].number} data = {data[i]} />
                                ))
                            }  
                        
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                            <CompGrid12/>
                    </div>
                </div>
                
            </div>
        </section>

        // <section>
        //     <div className='container p-3'>
        //         <div className='row'>
        //             <div className='col-md-12'>
        //                 <div className='back_stock'>
        //                     <h2>Back in Stock</h2>
        //                     <button class="Polaris-Button Polaris-Button--primary" type="button">
        //                         <span class="Polaris-Button__Content">
        //                             <span class="Polaris-Button__Text">Save theme</span>
        //                         </span>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
      );
}

export default Dashboard