import React,{useState,useContext, useCallback} from 'react'
import CheckboxExample from '../../common/Checkbox'
import { MyContext } from '../../../context/MyContext';

const Notification = (props) => {
	const {emailChecked,setemailChecked,smsChecked,setsmsChecked} = useContext(MyContext)
	// const [emailChecked,setemailChecked] = email
	// const [smsChecked, setsmsChecked] = sms

	const handleChangeEmail = useCallback((emailChecked) => {setemailChecked(emailChecked);
		if(emailChecked)
		console.log('email')}, []);
	const handleChangeSMS = useCallback((smsChecked) => {setsmsChecked(smsChecked);
		if(smsChecked)
		console.log('sms')}, []);

  return (
    <div className="notification blockes">
        <span>{props.header}</span>
        <div className="checkbox">
			<div className="checkbox_1">
				<CheckboxExample label={props.label1} onChange={handleChangeEmail} checked={emailChecked} />
			</div>
			<div className="checkbox_2">
				<CheckboxExample label={props.label2} onChange={handleChangeSMS} checked={smsChecked} />
			</div>
        </div>	
    </div>
  )
}

export default Notification