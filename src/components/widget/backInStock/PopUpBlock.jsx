import React, { useContext } from 'react'
import CheckboxExample from '../../common/Checkbox'
import ColorTextInput from '../../common/ColorTextInput'
import Notification from './Notification'
import TextAreaInput from '../../common/TextAreaInput'
import TextInput from '../../common/TextInput'
import { BackInStockContext } from '../../../context/BackInStockContext';


const PopUp = ({popHeader, setPopHeader, popSubHeader, setPopSubHeader, popButtonText, setPopButtonText, popButtonColor, setPopButtonColor, popNote, setPopNote, popSuccess, setPopSuccess}) => {
  // const {popHeader, setPopHeader, popSubHeader, setPopSubHeader, popButtonText, setPopButtonText, popButtonColor, setPopButtonColor, popNote, setPopNote, popSuccess, setPopSuccess} = useContext(BackInStockContext)

  return (
    <div className="Popup_wrapper bg-white border-all">
                <div className="row widget_top">
                    <h1>Popup</h1>
                    <p>Edit the details below to customize the popup</p>
                </div>
                <div className="blockes">   
                <div className="header_top">
                  <TextInput label={"Header"} value={'Notify me when available'} state1={setPopHeader} state2={popHeader}/>
                </div>                 	
                </div>
                <TextAreaInput label={'Sub header'} value={'We will send you notification as soon as this product is available again.'} state1={setPopSubHeader} state2={popSubHeader}/>
                <Notification   header={'Type of notification'} label1={'Email'} label2={'SMS'}/>
                <div className="notification_type blockes">
                  <TextInput label={"Button text"} value={'Notify me'} state1={setPopButtonText} state2={popButtonText}/>
                  <ColorTextInput label={'Button color'} value={'#000000'} state1={setPopButtonColor} state2={popButtonColor}/>
                </div>
                <div className="note">
                  <TextAreaInput label={'Note'} value={"We respect your privacy and don't share your email with anybody"} state1={setPopNote} state2={popNote}/>
                </div>
                <div className="success_msg">
                  <TextAreaInput label={'Success message'} value={"You subscribed notification successfully"} state1={setPopSuccess} state2={popSuccess}/>
                </div>
            </div>	
  )
}

export default PopUp