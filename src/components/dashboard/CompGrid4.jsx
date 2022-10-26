import React from 'react'

const CompGrid4 = ({data}) => {
  return (
        <div className="col-md-4 column-of-4">
            <div className="col_1_content column bg-white">
                <div className="top-data">
                    <img src={data.icon} />
                </div>
                <div className="text-end bottom-data">
                    <h2 className='sub-column-no'>{data.number}</h2>
                    <h5 className='subscriber_column_heading'>{data.heading}</h5>
                    <p className='subscriber_column_text'>{data.text}</p>
                </div>
            </div>
        </div>   
  )
}

export default CompGrid4