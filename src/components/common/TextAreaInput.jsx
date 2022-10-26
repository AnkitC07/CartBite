import React, { useContext } from 'react'
import { BackInStockContext } from '../../context/BackInStockContext';

const TextAreaInput = (props) => {
  const {setIsDisabled} = useContext(BackInStockContext)

  return (
        <div className="subHeader_textArea blockes">
            <div className="input_fields">
                <label htmlFor="subHeader">{props.label}</label>
                <textarea name="subHeader" id="subHeader" cols="30" rows="4" value={props.state2} onChange={event=>{props.state1(event.target.value)}}></textarea>
            </div>
        </div>
  )
}

export default TextAreaInput