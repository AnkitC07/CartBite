import React, { useContext } from 'react'
import { BackInStockContext } from '../../context/BackInStockContext';

const ColorTextInput = (props) => {
  const {setIsDisabled} = useContext(BackInStockContext)

  return (

    <div className="input_fields">
        <div className="btn_clr_text">
            <label htmlFor="clr">{props.label}</label>
            <input type="text" value={props.state2} onChange={event=>{props.state1(event.target.value)}}/>
        </div>
        <div className="btn_clr">
            <input type="color" name="btn_clr" id="btn_clr" value={props.state2} onChange={event=>{props.state1(event.target.value)}}/>
        </div>
    </div>
        
  )
}

export default ColorTextInput