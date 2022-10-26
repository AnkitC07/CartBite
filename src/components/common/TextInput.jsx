import React, { useContext, useEffect } from 'react'
import { BackInStockContext } from '../../context/BackInStockContext';

const TextInput = (props) => {
  const {setIsDisabled} = useContext(BackInStockContext)

    // useEffect(() => {
      
    // console.log(props.state2)
     
    // }, [props.state2])
    
  return (
    <div className="input_fields">
        <div className="btn_text">
            <label htmlFor="text">{props.label}</label>
            <input type="text" placeholder={props.placeholder} value={props.state2} onChange={event=>{props.state1(event.target.value)}}/>
        </div>
    </div>
    )
}

export default TextInput